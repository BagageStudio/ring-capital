<template>
    <div v-if="content" id="manifesto" class="wrapper-manifesto">
        <div v-for="(manifesto, index) in content" :key="manifesto.id" class="manifesto">
            <SchemaVisionBottom v-if="index === 1 && isM" />
            <svg
                v-if="index === 1 && !isM"
                class="mobile-schema"
                viewBox="0 0 375 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.4"
                    d="M-36.9981 126.239C41.3812 111.846 122.401 98.9079 205.502 87.6617C280.542 77.5063 354.529 69.103 427.002 62.3946"
                    stroke="#657DA2"
                />
                <path
                    d="M256.953 80.6499C167.454 91.1502 107.956 101.15 50.954 110.65"
                    stroke="url(#paintTopPart0_linear)"
                />
                <circle
                    r="7.5"
                    transform="matrix(0.697626 -0.716462 -0.716462 -0.697626 261.058 81.2557)"
                    fill="#1F2C3C"
                />
                <defs>
                    <linearGradient
                        id="paintTopPart0_linear"
                        x1="254.428"
                        y1="83.1134"
                        x2="77.0241"
                        y2="119.533"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#1F2C3C" />
                        <stop offset="1" stop-color="#1F2C3C" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div class="container-manifesto container">
                <div class="section-title">
                    <h3
                        class="manifesto-title basic-h3 underlined strong-neptune"
                        v-html="manifesto.blockTitleTitle"
                    ></h3>
                    <h4 v-if="manifesto.blockTitleSubtitle" class="manifesto-subtitle basic-h4">
                        <span>{{ manifesto.blockTitleSubtitle }}</span>
                    </h4>
                    <div
                        v-if="manifesto.blockTitleText"
                        class="manifesto-text neptune"
                        v-html="manifesto.blockTitleText"
                    ></div>
                </div>
                <div class="section-content">
                    <h4 v-if="manifesto.blockContentTitle" class="manifesto-subtitle basic-h4">
                        <span>{{ manifesto.blockContentTitle }}</span>
                    </h4>
                    <div
                        v-if="manifesto.blockContentText"
                        class="manifesto-text neptune"
                        v-html="manifesto.blockContentText"
                    ></div>
                    <div v-if="manifesto.blockContentImage" class="manifesto-img">
                        <FastImage class="img" :image="manifesto.blockContentImage" cover />
                    </div>
                </div>
            </div>
            <svg
                v-if="index === 1 && !isM"
                class="mobile-schema bottom"
                viewBox="0 0 375 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.4"
                    d="M-30.4995 118.096C69.9368 97.6533 173.457 73.3322 278.679 45.138C323.169 33.2168 366.972 20.8691 410.001 8.14539"
                    stroke="#657DA2"
                />
                <path
                    d="M228.53 58.6246C315.971 36.8481 373.719 19.3764 429.054 2.71739"
                    stroke="url(#paintBottomPart0_linear)"
                />
                <circle
                    r="7.5"
                    transform="matrix(-0.601033 0.799224 0.799224 0.601033 224.381 58.5449)"
                    fill="#657DA2"
                />
                <defs>
                    <linearGradient
                        id="paintBottomPart0_linear"
                        x1="368.394"
                        y1="21.372"
                        x2="367.661"
                        y2="18.4076"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#677D9F" />
                        <stop offset="1" stop-color="#677D9F" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Array, required: true }
    },
    computed: {
        isM() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.m;
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-manifesto {
    position: relative;
    padding: 80px 0;
    color: $orbit;
    background: $grey;
}

.section-title,
.section-content {
    padding: 0 #{$gutter};
}
.section-title {
    margin-bottom: 40px;
}
.manifesto-title {
    margin-bottom: 0;
    + .manifesto-subtitle,
    + .manifesto-text {
        margin-top: 30px;
    }
}
.manifesto-subtitle {
    margin-bottom: 0;
    + .manifesto-text {
        margin-top: 20px;
    }
}
.manifesto-img {
    position: relative;
    max-height: 400px;
    &::before {
        content: '';
        display: block;
        padding-bottom: 142.5%;
    }
    .img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
}

.mobile-schema {
    width: 100%;
    &.bottom {
        margin: 50px 0;
    }
}

@media (min-width: $tablet) {
    .schema {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2350px;
        margin-top: -50px;
        transform: translate(-50%, -50%);
    }
    .manifesto {
        margin-bottom: 250px;
        &:last-child {
            margin-bottom: 0;
        }
        &:nth-child(even) {
            .container-manifesto {
                flex-direction: row-reverse;
                .section-title {
                    width: math.percentage(math.div(4, 8));
                }
                .section-content {
                    width: math.percentage(math.div(3, 8));
                }
            }
        }
    }
    .container-manifesto {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .section-title {
        flex: 0 0 auto;
        width: math.percentage(math.div(3, 8));
    }
    .section-content {
        flex: 0 0 auto;
        width: math.percentage(math.div(4, 8));
    }
    .manifesto-img {
        max-height: none;
    }
}

@media (min-width: $desktop-small) {
    .schema {
        width: 2850px;
    }
}
@media (min-width: $desktop) {
    .wrapper-manifesto {
        padding: 130px 0 160px;
    }
    .manifesto {
        &:nth-child(even) {
            .container-manifesto {
                .section-title {
                    width: math.percentage(math.div(6, 12));
                    padding: 0 #{$gutter};
                }
                .section-content {
                    width: math.percentage(math.div(6, 12));
                    padding-right: calc(#{math.percentage(math.div(1, 12))} + #{$gutter});
                }
            }
        }
    }
    .section-title {
        width: math.percentage(math.div(6, 12));
        padding-right: calc(#{math.percentage(math.div(1, 12))} + #{$gutter});
    }
    .section-content {
        width: math.percentage(math.div(6, 12));
    }
}
@media (min-width: $desktop-large) {
    .schema {
        margin-top: 0px;
    }
    .manifesto {
        &:nth-child(even) {
            .container-manifesto {
                .section-title {
                    padding: 0 calc(#{math.percentage(math.div(1, 12))} + #{$gutter}) 0 #{$gutter};
                }
                .section-content {
                    padding: 0 calc(#{math.percentage(math.div(1, 12))} + #{$gutter});
                }
            }
        }
    }
    .section-title {
        padding: 0 calc(#{math.percentage(math.div(1, 12))} + #{$gutter});
    }
    .section-content {
        padding: 0 calc(#{math.percentage(math.div(1, 12))} + #{$gutter}) 0 #{$gutter};
    }
    .manifesto-img {
        position: relative;
        top: 100px;
    }
}
</style>
