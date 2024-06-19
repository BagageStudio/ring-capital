<template>
    <div ref="schema" class="schema">
        <svg
            class="top-part"
            width="784"
            height="322"
            viewBox="0 0 784 322"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="communityUp">
                <g id="maskCom_1">
                    <mask
                        id="maskCom0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="351"
                        y="-1"
                        width="434"
                        height="220"
                    >
                        <path
                            id="modelCom_1"
                            d="M351.986 0C492.588 63.7387 637.424 136.443 784.001 217.59"
                            stroke="#657DA2"
                        />
                    </mask>
                    <g mask="url(#maskCom0)">
                        <path
                            id="modelCom_1_2"
                            opacity="0.4"
                            d="M351.986 0C492.588 63.7387 637.424 136.443 784.001 217.59"
                            stroke="#657DA2"
                            stroke-width="2"
                        />
                        <path
                            id="trailCom_1"
                            d="M1112.38 415.106H779.383V27.1056H1112.38V415.106Z"
                            fill="url(#paintCom0_radial)"
                        />
                    </g>
                </g>
                <g id="maskCom_2">
                    <mask
                        id="mask1"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="-1"
                        y="10"
                        width="780"
                        height="313"
                    >
                        <path
                            id="modelCom_2"
                            d="M0 10.7555C227.098 68.473 496.577 174.323 778 321.936"
                            stroke="#657DA2"
                        />
                    </mask>
                    <g mask="url(#mask1)">
                        <path
                            id="modelCom_2_2"
                            opacity="0.4"
                            d="M0 10.7555C227.098 68.473 496.577 174.323 778 321.936"
                            stroke="#657DA2"
                            stroke-width="2"
                        />
                        <path
                            id="trailCom_2"
                            d="M1107.82 516.381H774.824V128.381H1107.82V516.381Z"
                            fill="url(#paintCom1_radial)"
                        />
                    </g>
                </g>
                <circle id="circle_2" cx="775.5" cy="315.5" r="7.5" fill="#F4F928" />
                <circle id="circle_1" cx="775.5" cy="213.5" r="7.5" fill="#657DA2" />
            </g>
            <defs>
                <radialGradient
                    id="paintCom0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1112.38 221.106) rotate(-180) scale(333 194)"
                >
                    <stop stop-color="#657DA2" />
                    <stop offset="1" stop-color="#657DA2" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                    id="paintCom1_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1107.82 322.381) rotate(-180) scale(333 194)"
                >
                    <stop stop-color="#F4F928" />
                    <stop offset="1" stop-color="#F4F928" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
        <svg
            width="583"
            height="171"
            class="bottom-part"
            viewBox="0 0 583 171"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="communityDown">
                <g id="maskCom_3">
                    <mask
                        id="maskComm30"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="-1"
                        y="-1"
                        width="584"
                        height="173"
                    >
                        <path
                            id="modelCom_3"
                            d="M-0.5 -0.0197144C149.79 9.17569 355.964 68.7673 582.5 171.324"
                            stroke="#657DA2"
                        />
                    </mask>
                    <g mask="url(#maskComm30)">
                        <path
                            id="mask_bg"
                            opacity="0.4"
                            d="M-0.5 -0.0197144C149.79 9.17569 355.964 68.7673 582.5 171.324"
                            stroke="#657DA2"
                            stroke-width="2"
                        />
                        <path
                            id="trailCom_3"
                            d="M906.424 375.855H573.424V-12.1445H906.424V375.855Z"
                            fill="url(#paintCom2_radial)"
                        />
                    </g>
                </g>
                <circle id="circle_3" cx="582.5" cy="170.5" r="7.5" fill="#657DA2" />
            </g>
            <defs>
                <radialGradient
                    id="paintCom2_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(906.424 181.855) rotate(-180) scale(333 194)"
                >
                    <stop stop-color="#657DA2" />
                    <stop offset="1" stop-color="#657DA2" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
    </div>
</template>
<script>
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export default {
    data: () => ({
        tweens: [],
        watcher: null
    }),
    mounted() {
        this.$nextTick(() => {
            this.watcher = this.$stereorepo.superScroll
                .watch({
                    element: this.$refs.schema
                })
                .on('enter-view', () => {
                    this.play();
                })
                .on('leave-view', () => {
                    this.pause();
                });
            this.initPlanets();
        });
    },
    beforeDestroy() {
        if (this.watcher) this.watcher.forget();
        this.pause();
    },
    methods: {
        pause() {
            this.tweens.forEach(t => {
                t.pause();
            });
        },
        play() {
            gsap.to(this.tweens, {
                duration: 3,
                progress: 1,
                ease: 'power2.out'
            });
        },
        initPlanets() {
            const circle1 = gsap.to('#circle_1', {
                motionPath: {
                    path: '#modelCom_1',
                    align: '#modelCom_1',
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0.35
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const trail1 = gsap.to('#trailCom_1', {
                motionPath: {
                    path: '#modelCom_1',
                    align: '#modelCom_1',
                    alignOrigin: [1, 0.5],
                    autoRotate: true,
                    start: 1,
                    end: 0.35
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const circle2 = gsap.to('#circle_2', {
                motionPath: {
                    path: '#modelCom_2',
                    align: '#modelCom_2',
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0.75
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const trail2 = gsap.to('#trailCom_2', {
                motionPath: {
                    path: '#modelCom_2',
                    align: '#modelCom_2',
                    alignOrigin: [1, 0.5],
                    autoRotate: true,
                    start: 1,
                    end: 0.75
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const circle3 = gsap.to('#circle_3', {
                motionPath: {
                    path: '#modelCom_3',
                    align: '#modelCom_3',
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0.2
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const trail3 = gsap.to('#trailCom_3', {
                motionPath: {
                    path: '#modelCom_3',
                    align: '#modelCom_3',
                    alignOrigin: [1, 0.5],
                    autoRotate: true,
                    start: 1,
                    end: 0.2
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            this.tweens.push(circle1, circle2, circle3, trail1, trail2, trail3);
        }
    }
};
</script>
<style lang="scss" scoped>
.top-part {
    position: absolute;
    top: -15px;
    right: -15px;
}
.bottom-part {
    position: absolute;
    bottom: -15px;
    left: -15px;
}
</style>
