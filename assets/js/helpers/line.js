export class PathBuilder {
    constructor(route) {
        // Public variables
        this.linePath = '';

        // Private externals copy
        this._route = route;

        // Private variables
        this._svg = null;
        this._path = null;
        this._width = 0;
        this._height = 0;
        this._lastPoint = { x: null, y: null };
    }

    _toPx = ({ string }) => parseInt(string.replace('px', ''), 10);

    _percentageToPx = ({ string, axis }) => (parseFloat(string.replace('%', '')) / 100) * this[`_${axis}`];

    _vwToPx = ({ string }) => (parseFloat(string.replace('vw', '')) / 100) * window.innerWidth;

    _computeLength({ string, axis }) {
        switch (true) {
            case string.endsWith('px'):
                return Math.round(this._toPx({ string }));
            case string.endsWith('%'):
                return Math.round(this._percentageToPx({ string, axis }));
            case string.endsWith('vw'):
                return Math.round(this._vwToPx({ string }));
        }
    }

    _pointTo({ x: rawX, y: rawY, xRelative = '0px', yRelative = '0px' }) {
        const x = this._computeLength({ string: rawX, axis: 'width' });
        const y = this._computeLength({ string: rawY, axis: 'height' });
        const xRel = x + this._computeLength({ string: xRelative, axis: 'width' });
        const yRel = y + this._computeLength({ string: yRelative, axis: 'height' });
        this.linePath += `${xRel} ${yRel}`;
        this._lastPoint.x = xRel;
        this._lastPoint.y = yRel;
    }

    _curveTo({ a1, a2, endPoint }) {
        const p2 = {
            x: this._lastPoint.x + endPoint.x,
            y: this._lastPoint.y + endPoint.y
        };

        // first anchor
        this.linePath += `C${this._lastPoint.x + a1.x} ${this._lastPoint.y + a1.y}`;
        // second anchor
        this.linePath += ` ${p2.x + a2.x} ${p2.y + a2.y}`;
        // the point
        this.linePath += ` ${p2.x} ${p2.y}`;

        this._lastPoint.x = p2.x;
        this._lastPoint.y = p2.y;
    }

    // Directive switcher
    _computePathPortion(directive) {
        switch (directive.type) {
            case 'M':
                this.linePath += 'M';
                this._pointTo(directive);
                break;
            case 'L':
                this.linePath += 'L';
                this._pointTo(directive);
                break;
            case 'C':
                this._curveTo(directive);
                break;
            default:
                break;
        }
    }

    addSvgRef(svg) {
        this._svg = svg;
    }

    addPathRef(path) {
        this._path = path;
    }

    viewBoxCalc() {
        const { width, height } = this._svg.getBoundingClientRect();
        this._width = width;
        this._height = height;
        return `0 0 ${width || 0} ${height || 0}`;
    }

    // Main path builder function
    buildPath() {
        this.linePath = '';

        this._route.forEach((directive, index) => {
            this._computePathPortion(directive);
        });

        this._path.setAttribute('d', this.linePath);
    }
}
