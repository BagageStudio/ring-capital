<template>
    <div ref="schema" class="schema">
        <svg viewBox="0 0 1280 680" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="test">
                <rect width="1280" height="680" fill="#657DA2" />
                <path
                    id="model"
                    ref="model"
                    d="M72.5403 518.536C43.0804 424.808 273.24 268.978 586.62 170.48C899.996 71.9814 1177.92 68.1145 1207.38 161.842C1236.84 255.569 1006.68 411.399 693.304 509.898C379.928 608.397 102 612.264 72.5403 518.536Z"
                    stroke="#19232F"
                    stroke-width="3"
                />
                <path
                    v-for="planet in planets"
                    :id="`trail_${planet.id}`"
                    :key="`trail_${planet.id}`"
                    d="M553 491H220V103H553V491Z"
                    :fill="`url(#paint${planet.id}_radial)`"
                />
                <path
                    id="defonce"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1280 0H0V680H1280V0ZM586.841 171.196C743.48 121.962 891.23 96.3881 1003.47 94.8262C1059.6 94.0452 1106.81 99.2691 1141.79 110.513C1176.8 121.764 1199.4 138.983 1206.66 162.067C1213.92 185.151 1205.23 212.204 1182.95 241.461C1160.69 270.699 1124.96 301.99 1078.48 333.46C985.527 396.395 849.714 459.949 693.075 509.183C536.436 558.416 388.685 583.99 276.441 585.552C220.314 586.333 173.109 581.109 138.123 569.865C103.114 558.614 80.5116 541.396 73.2559 518.312C66.0003 495.228 74.6878 468.174 96.9645 438.917C119.227 409.679 154.954 378.389 201.435 346.918C294.389 283.984 430.202 220.429 586.841 171.196ZM1208.09 161.617C1200.62 137.837 1177.43 120.391 1142.25 109.085C1107.05 97.7712 1059.66 92.5442 1003.45 93.3263C891.027 94.8908 743.129 120.5 586.391 169.765C429.654 219.029 293.699 282.639 200.594 345.676C154.046 377.192 118.171 408.589 95.7711 438.008C73.3856 467.408 64.3506 494.982 71.8249 518.761C79.2993 542.541 102.484 559.987 137.665 571.293C172.868 582.607 220.254 587.834 276.462 587.052C388.889 585.488 536.787 559.878 693.525 510.614C850.262 461.349 986.217 397.739 1079.32 334.702C1125.87 303.186 1161.74 271.789 1184.14 242.37C1206.53 212.97 1215.57 185.397 1208.09 161.617Z"
                    fill="#19232F"
                />
                <g v-for="planet in planets" :id="`circle_wrapper_${planet.id}`" :key="`circle_wrapper_${planet.id}`">
                    <circle :id="`circle_${planet.id}`" cx="876" cy="297" r="7.5" :fill="planet.color.hex" />
                </g>

                <g v-for="planet in planets" :id="`circle_proxy_${planet.id}`" :key="`circle_proxy_${planet.id}`">
                    <circle :id="`circle_${planet.id}`" cx="876" cy="297" r="7.5" fill="transparent" />
                </g>

                <g v-for="planet in planets" :id="`border_wrapper_${planet.id}`" :key="`border_wrapper_${planet.id}`">
                    <path
                        :id="`border_${planet.id}`"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M220 257.75C198.323 257.75 180.75 275.323 180.75 297C180.75 318.677 198.323 336.25 220 336.25C241.677 336.25 259.25 318.677 259.25 297C259.25 275.323 241.677 257.75 220 257.75ZM179.25 297C179.25 274.494 197.494 256.25 220 256.25C242.506 256.25 260.75 274.494 260.75 297C260.75 319.506 242.506 337.75 220 337.75C197.494 337.75 179.25 319.506 179.25 297Z"
                        :fill="planet.color.hex"
                    />
                </g>
            </g>
            <defs>
                <radialGradient
                    v-for="planet in planets"
                    :id="`paint${planet.id}_radial`"
                    :key="`paint${planet.id}_radial`"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(553 297) rotate(-180) scale(333 194)"
                >
                    <stop :stop-color="planet.color.hex" />
                    <stop offset="1" :stop-color="planet.color.hex" stop-opacity="0" />
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
    props: {
        links: {
            type: Array,
            required: true
        },
        selected: {
            type: String,
            required: true
        }
    },
    data: () => ({
        watcher: null,
        tweens: {},
        planets: [],
        loaded: false,
        pathLength: 0
    }),
    watch: {
        selected(value, oldValue) {
            if (value) {
                this.slowMo(value);
            } else {
                this.resetSpeed(oldValue);
            }
        }
    },
    mounted() {
        this.planets = [...this.links];
        this.$nextTick(() => {
            console.log(MotionPathPlugin.getRawPath('#model'));

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
            this.setAppearInitialStyles();
            this.initPlanets();
            this.appearAnimation();
        });
    },
    beforeDestroy() {
        this.pause();
    },
    methods: {
        pause() {
            Object.values(this.tweens).forEach(tws => {
                tws.forEach(t => {
                    t.pause();
                });
            });
        },
        play() {
            Object.values(this.tweens).forEach(tws => {
                tws.forEach(t => {
                    t.play();
                });
            });
        },
        appearAnimation() {
            gsap.to(this.$refs.model, {
                duration: 1.5,
                strokeDashoffset: -this.pathLength,
                ease: 'power3.inOut'
            });
            this.planets.reverse().forEach((planet, index) => {
                const id = planet.id;

                gsap.to(`#circle_${id}`, {
                    duration: 1.2,
                    opacity: 1,
                    scale: 1,
                    delay: 1.3,
                    transformOrigin: '50% 50%'
                });
                gsap.to(this.tweens[id], {
                    duration: 1.2,
                    timeScale: 1,
                    delay: 1.3
                });
                gsap.to(`#trail_${id}`, {
                    duration: 1.2,
                    opacity: 1,
                    delay: 2.3,
                    ease: 'power3.out'
                });
            });
        },
        setAppearInitialStyles() {
            // hide the path
            const path = this.$refs.model;
            this.pathLength = path.getTotalLength();
            path.style.strokeDasharray = this.pathLength;
            path.style.strokeDashoffset = 0;

            // hide the planets and trails
            this.planets.forEach((planet, index) => {
                const id = planet.id;
                gsap.set(`#circle_${id}`, {
                    opacity: 1,
                    scale: 0,
                    transformOrigin: '50% 50%'
                });
                gsap.set(`#trail_${id}`, {
                    opacity: 0
                });
            });
        },
        initPlanets() {
            this.planets.forEach((planet, index) => {
                const star = [];
                const id = planet.id;
                gsap.set(`#border_${id}`, {
                    scale: 0.25,
                    opacity: 0
                });
                star[0] = gsap
                    .to(`#circle_proxy_${id}`, {
                        motionPath: {
                            path: '#model',
                            align: '#model',
                            alignOrigin: [0.5, 0.5],
                            autoRotate: true,
                            start: 0 + 0.3 * index,
                            end: 1 + 0.3 * index
                        },
                        duration: 16,
                        repeat: -1,
                        ease: 'none',
                        onUpdate() {
                            const x = gsap.getProperty(this.targets()[0], 'x');
                            const y = gsap.getProperty(this.targets()[0], 'y');
                            gsap.set(`#circle_wrapper_${id}`, {
                                x,
                                y
                            });
                        }
                    })
                    .timeScale(0.35);
                star[1] = gsap
                    .to(`#trail_${id}`, {
                        motionPath: {
                            path: '#model',
                            align: '#model',
                            alignOrigin: [1, 0.5],
                            autoRotate: true,
                            start: 0 + 0.3 * index,
                            end: 1 + 0.3 * index
                        },
                        duration: 16,
                        repeat: -1,
                        ease: 'none'
                    })
                    .timeScale(0.35);
                star[2] = gsap
                    .to(`#border_wrapper_${id}`, {
                        motionPath: {
                            path: '#model',
                            align: '#model',
                            alignOrigin: [0.5, 0.5],
                            autoRotate: true,
                            start: 0 + 0.3 * index,
                            end: 1 + 0.3 * index
                        },
                        duration: 16,
                        repeat: -1,
                        ease: 'none'
                    })
                    .timeScale(0.35);
                this.tweens[id] = star;
            });
        },
        slowMo(id) {
            const index = this.planets.findIndex(p => p.id === id);
            const p = this.planets.splice(index, 1)[0];
            this.planets.push(p);

            const planet = this.tweens[id];

            gsap.killTweensOf([planet, `#border_${id}`, `#circle_${id}`]);
            gsap.to(planet, {
                duration: 1,
                timeScale: 0.4
            });
            gsap.to(`#circle_${id}`, {
                duration: 0.8,
                scale: 2.6,
                transformOrigin: '50% 50%'
            });
            gsap.to(`#border_${id}`, {
                duration: 0.5,
                scale: 1,
                opacity: 1,
                transformOrigin: '50% 50%',
                delay: 0.2
            });
        },
        resetSpeed(id, index) {
            const planet = this.tweens[id];

            gsap.killTweensOf([planet, `#border_${id}`, `#circle_${id}`]);
            gsap.to(planet, {
                duration: 1,
                timeScale: 1
            });
            gsap.to(`#circle_${id}`, {
                duration: 1,
                scale: 1,
                transformOrigin: '50% 50%'
            });
            gsap.to(`#border_${id}`, {
                duration: 0.5,
                scale: 0.25,
                transformOrigin: '50% 50%',
                opacity: 0
            });
        }
    }
};
</script>
<style lang="scss" scoped></style>
