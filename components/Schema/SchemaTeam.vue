<template>
    <svg ref="schema" class="schema" viewBox="0 0 1132 460" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="team">
            <rect width="1132" height="460" fill="white" />
            <g id="maskTeam">
                <mask
                    id="maskTeam0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="-14"
                    y="-61"
                    width="1149"
                    height="588"
                >
                    <path
                        id="modelTeam"
                        d="M26.9071 99.5255C48.9471 11.422 305.611 -0.262377 600.183 73.4277C894.755 147.118 1115.69 278.277 1093.65 366.381C1071.61 454.484 814.941 466.169 520.369 392.479C225.798 318.789 4.8671 187.629 26.9071 99.5255Z"
                        stroke="#657DA2"
                    />
                </mask>
                <g mask="url(#maskTeam0)">
                    <path
                        id="modelTeam_2"
                        opacity="0.4"
                        d="M26.9071 99.5255C48.9471 11.422 305.611 -0.262377 600.183 73.4277C894.755 147.118 1115.69 278.277 1093.65 366.381C1071.61 454.484 814.941 466.169 520.369 392.479C225.798 318.789 4.8671 187.629 26.9071 99.5255Z"
                        stroke="#657DA2"
                        stroke-width="2"
                    />
                    <path id="trailTeam_2" d="M268 460H-65V72H268V460Z" fill="url(#paintTeam0_radial)" />
                    <path id="trailTeam_1" d="M764 331H431V-57H764V331Z" fill="url(#paintTeam1_radial)" />
                </g>
            </g>
            <g id="circle_wrapper_2">
                <circle id="circle_2" cx="763.5" cy="121.5" r="7.5" fill="#657DA2" />
            </g>
            <g id="circle_wrapper_1">
                <circle id="circle_1" cx="267.5" cy="307.5" r="7.5" fill="#657DA2" />
            </g>
        </g>
        <defs>
            <radialGradient
                id="paintTeam0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(268 266) rotate(-180) scale(333 194)"
            >
                <stop stop-color="#657DA2" />
                <stop offset="1" stop-color="#657DA2" stop-opacity="0" />
            </radialGradient>
            <radialGradient
                id="paintTeam1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(764 137) rotate(-180) scale(333 194)"
            >
                <stop stop-color="#657DA2" />
                <stop offset="1" stop-color="#657DA2" stop-opacity="0" />
            </radialGradient>
        </defs>
    </svg>
</template>

<script>
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export default {
    data: () => ({
        tweens: [],
        watcher: null,
        playing: true
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
            if (!this.playing) return;

            this.tweens.forEach(t => {
                t.pause();
            });
            this.playing = false;
        },
        play() {
            if (this.playing) return;
            this.tweens.forEach(t => {
                t.play();
            });
            this.playing = true;
        },
        killAnim() {
            gsap.killTweensOf(['#circle_wrapper_2', '#trailTeam_2', '#circle_wrapper_1', '#trailTeam_1']);
        },
        initPlanets() {
            const circle2 = gsap.to('#circle_wrapper_2', {
                motionPath: {
                    path: '#modelTeam',
                    align: '#modelTeam',
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                    start: 0.5001,
                    end: 1.5
                },
                duration: 5,
                repeat: -1,
                ease: 'none'
            });
            const trail2 = gsap.to('#trailTeam_2', {
                motionPath: {
                    path: '#modelTeam',
                    align: '#modelTeam',
                    alignOrigin: [1, 0.5],
                    autoRotate: true,
                    start: 0.5001,
                    end: 1.5
                },
                duration: 5,
                repeat: -1,
                ease: 'none'
            });
            const circle1 = gsap.to('#circle_wrapper_1', {
                motionPath: {
                    path: '#modelTeam',
                    align: '#modelTeam',
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true
                },
                duration: 5,
                repeat: -1,
                ease: 'none'
            });
            const trail1 = gsap.to('#trailTeam_1', {
                motionPath: {
                    path: '#modelTeam',
                    align: '#modelTeam',
                    alignOrigin: [1, 0.5],
                    autoRotate: true
                },
                duration: 5,
                repeat: -1,
                ease: 'none'
            });
            this.tweens.push(circle1, circle2, trail1, trail2);
        }
    }
};
</script>
<style lang="scss" scoped>
path {
    backface-visibility: hidden;
    will-change: transform;
    transform-style: preserve-3d;
}
</style>
