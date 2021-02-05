<template>
    <div class="fund-schema-desktop">
        <component :is="fundLogo" class="fund-logo" />
        <svg class="rings" viewBox="0 0 946 1066" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="fund">
                <g id="maskFund_3">
                    <mask
                        id="maskFund0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="60"
                        y="96"
                        width="885"
                        height="903"
                    >
                        <path
                            id="modelFund_3"
                            d="M944 96.7229C405.612 324.521 28.3519 626.798 62.6503 824.298C93.9707 1004.65 459.225 1044.32 944 943.246"
                            stroke="#657DA2"
                        />
                    </mask>
                    <g mask="url(#maskFund0)">
                        <path
                            id="modelFund_3_2"
                            opacity="0.4"
                            d="M944 96.7229C405.612 324.521 28.3519 626.798 62.6503 824.298C93.9707 1004.65 459.225 1044.32 944 943.246"
                            stroke="#657DA2"
                            stroke-width="2"
                        />
                        <path id="trailFund_3" d="M1241 1083H908V695H1241V1083Z" fill="url(#paintFund0_radial)" />
                    </g>
                </g>
                <g id="maskFund_2">
                    <mask
                        id="maskFund1"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="206"
                        y="119"
                        width="735"
                        height="758"
                    >
                        <path
                            id="modelFund_2"
                            d="M939.998 119.618C490.649 315.849 179.94 566.494 208.352 730.102C234.274 879.368 535.045 913.443 939.998 833.665"
                            stroke="#657DA2"
                        />
                    </mask>
                    <g mask="url(#maskFund1)">
                        <path
                            id="modelFund_2_2"
                            opacity="0.4"
                            d="M939.998 119.618C490.649 315.849 179.94 566.494 208.352 730.102C234.274 879.368 535.045 913.443 939.998 833.665"
                            stroke="#657DA2"
                            stroke-width="2"
                        />
                        <path id="trailFund_2" d="M1263 993H930V605H1263V993Z" fill="url(#paintFund1_radial)" />
                    </g>
                </g>
                <g id="maskFund_1">
                    <mask
                        id="maskFund2"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="373"
                        y="144"
                        width="568"
                        height="599"
                    >
                        <path
                            id="modelFund_1"
                            d="M939.999 145.252C590.215 304.982 353.067 499.251 375.143 626.368C395.241 742.098 624.716 770.605 939.999 714.025"
                            stroke="#657DA2"
                        />
                    </mask>
                    <g mask="url(#maskFund2)">
                        <path
                            id="modelFund_1_2"
                            opacity="0.4"
                            d="M939.999 145.252C590.215 304.982 353.067 499.251 375.143 626.368C395.241 742.098 624.716 770.605 939.999 714.025"
                            stroke="#657DA2"
                            stroke-width="2"
                        />
                        <path id="trailFund_1" d="M1263 342H930V-46H1263V342Z" fill="url(#paintFund2_radial)" />
                    </g>
                </g>
                <circle
                    id="circleFund_3"
                    r="7.5"
                    transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 945.607 942.607)"
                    :fill="color"
                />
                <circle
                    id="circleFund_2"
                    r="7.5"
                    transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 945.607 833.607)"
                    :fill="color"
                />
                <circle
                    id="circleFund_1"
                    r="7.5"
                    transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 935.607 147.607)"
                    :fill="color"
                />
            </g>
            <defs>
                <radialGradient
                    id="paintFund0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1241 889) rotate(-180) scale(333 194)"
                >
                    <stop :stop-color="color" />
                    <stop offset="1" :stop-color="color" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                    id="paintFund1_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1263 799) rotate(-180) scale(333 194)"
                >
                    <stop :stop-color="color" />
                    <stop offset="1" :stop-color="color" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                    id="paintFund2_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1263 148) rotate(-180) scale(333 194)"
                >
                    <stop :stop-color="color" />
                    <stop offset="1" :stop-color="color" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
    </div>
</template>
<script>
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import FundLogoAltitude from './FundLogoAltitude';
import FundLogoMission from './FundLogoMission';
import FundLogoFoundation from './FundLogoFoundation';
gsap.registerPlugin(MotionPathPlugin);
export default {
    components: {
        FundLogoAltitude,
        FundLogoMission,
        FundLogoFoundation
    },
    props: {
        color: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        }
    },
    data: () => ({
        tweens: [],
        watcher: null
    }),
    computed: {
        fundLogo() {
            const mapping = {
                'ring-altitude': 'FundLogoAltitude',
                'ring-mission': 'FundLogoMission',
                'ring-foundation': 'FundLogoFoundation'
            };
            return mapping[this.logo];
        }
    },
    mounted() {
        this.$nextTick(() => {
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
            const circle1 = gsap.to('#circleFund_1', {
                motionPath: {
                    path: '#modelFund_1',
                    align: '#modelFund_1',
                    alignOrigin: [0.5, 0.5],
                    start: 0,
                    end: 0.8
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const trail1 = gsap.to('#trailFund_1', {
                motionPath: {
                    path: '#modelFund_1',
                    align: '#modelFund_1',
                    alignOrigin: [1, 0.5],
                    autoRotate: true,
                    start: 0,
                    end: 0.8
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const circle2 = gsap.to('#circleFund_2', {
                motionPath: {
                    path: '#modelFund_2',
                    align: '#modelFund_2',
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0.5
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const trail2 = gsap.to('#trailFund_2', {
                motionPath: {
                    path: '#modelFund_2',
                    align: '#modelFund_2',
                    alignOrigin: [1, 0.5],
                    autoRotate: true,
                    start: 1,
                    end: 0.5
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const circle3 = gsap.to('#circleFund_3', {
                motionPath: {
                    path: '#modelFund_3',
                    align: '#modelFund_3',
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0.3
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            const trail3 = gsap.to('#trailFund_3', {
                motionPath: {
                    path: '#modelFund_3',
                    align: '#modelFund_3',
                    alignOrigin: [1, 0.5],
                    autoRotate: true,
                    start: 1,
                    end: 0.3
                },
                paused: true,
                immediateRender: true,
                duration: 5,
                ease: 'none'
            });
            this.tweens.push(circle1, circle2, circle3, trail1, trail2, trail3);
            this.play();
        }
    }
};
</script>
<style lang="scss" scoped>
.fund-logo {
    position: absolute;
    top: 105px;
    right: 110px;
    width: 28%;
    max-width: 240px;
}
.ring {
    width: 100%;
}
</style>
