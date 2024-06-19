<template>
    <div ref="schema" class="schema">
        <svg width="2841" height="868" viewBox="0 0 2841 868" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="schemaVisionBot">
                <g id="maskVisionBot">
                    <mask
                        id="maskVisionBot0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="13"
                        y="3"
                        width="2814"
                        height="850"
                    >
                        <path
                            id="modelVisionBot"
                            d="M2823.85 237.776C2866.8 446.968 2273 701.623 1497.57 806.564C722.133 911.505 58.7056 826.992 15.7604 617.8C-27.1847 408.608 566.615 153.953 1342.05 49.0121C2117.48 -55.9286 2780.91 28.584 2823.85 237.776Z"
                            stroke="#657DA2"
                        />
                    </mask>
                    <g mask="url(#maskVisionBot0)">
                        <path
                            id="modelVisionBot_2"
                            opacity="0.4"
                            d="M2823.85 237.776C2866.8 446.968 2273 701.623 1497.57 806.564C722.133 911.504 58.7056 826.992 15.7604 617.8C-27.1847 408.608 566.615 153.953 1342.05 49.0119C2117.48 -55.9288 2780.91 28.5837 2823.85 237.776Z"
                            stroke="#657DA2"
                            stroke-width="2"
                        />
                        <path
                            id="trailVisionBot_1"
                            d="M3141 428H2808V40H3141V428Z"
                            fill="url(#paint0_radialVisionBot)"
                        />
                        <path id="trailVisionBot_2" d="M14 833H-319V445H14V833Z" fill="url(#paint1_radialVisionBot)" />
                    </g>
                </g>
                <circle id="circleVisionBot_1" cx="2826.5" cy="278.5" r="7.5" fill="#657DA2" />
                <circle id="circleVisionBot_2" cx="13.5" cy="599.5" r="7.5" fill="#19232F" />
            </g>
            <defs>
                <radialGradient
                    id="paint0_radialVisionBot"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(3141 234) rotate(-180) scale(333 194)"
                >
                    <stop stop-color="#657DA2" />
                    <stop offset="1" stop-color="#657DA2" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                    id="paint1_radialVisionBot"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14 639) rotate(-180) scale(333 194)"
                >
                    <stop stop-color="#19232F" />
                    <stop offset="1" stop-color="#19232F" stop-opacity="0" />
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
            const circle1 = gsap.to('#circleVisionBot_1', {
                motionPath: {
                    path: '#modelVisionBot',
                    align: '#modelVisionBot',
                    alignOrigin: [0.5, 0.5],
                    start: 0,
                    end: 0.2
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const trail1 = gsap.to('#trailVisionBot_1', {
                motionPath: {
                    path: '#modelVisionBot',
                    align: '#modelVisionBot',
                    alignOrigin: [1, 0.5],
                    autoRotate: true,
                    start: 0,
                    end: 0.2
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const circle2 = gsap.to('#circleVisionBot_2', {
                motionPath: {
                    path: '#modelVisionBot',
                    align: '#modelVisionBot',
                    alignOrigin: [0.5, 0.5],
                    start: 0.5,
                    end: 0.71
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const trail2 = gsap.to('#trailVisionBot_2', {
                motionPath: {
                    path: '#modelVisionBot',
                    align: '#modelVisionBot',
                    alignOrigin: [1, 0.5],
                    autoRotate: true,
                    start: 0.5,
                    end: 0.71
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            this.tweens.push(circle1, circle2, trail1, trail2);
        }
    }
};
</script>
<style lang="scss" scoped></style>
