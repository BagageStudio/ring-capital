<template>
    <div ref="vitality" :style="{ '--scroll-parallax': 0, '--scroll-appear': 1 }" class="wrapper-vitality container">
        <div class="container-small">
            <div class="vitality">
                <h2 class="vitality-title">{{ data.vitalityTitle }}</h2>
                <div class="vitality-text">
                    <h3 class="vitality-subtitle" v-html="data.vitalitySubtitle"></h3>
                    <div class="bottom-vitality">
                        <div class="vitality-intro basic-txt" v-html="data.vitalityIntro"></div>
                        <div class="vitality-numbers">
                            <div
                                v-for="vitalityNumber in data.vitalityNumbers"
                                :key="vitalityNumber.id"
                                class="vitality-number-content"
                            >
                                <span class="vitality-number">{{ vitalityNumber.number }}</span>
                                <span class="vitality-content">{{ vitalityNumber.content }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.$gsap.to(this.$refs.vitality, {
            scrollTrigger: {
                trigger: this.$refs.vitality,
                scrub: true
            },
            '--scroll-parallax': 1,
            ease: 'linear'
        });
        this.$gsap.to(this.$refs.vitality, {
            scrollTrigger: {
                trigger: this.$refs.vitality,
                scrub: true,
                start: 'top bottom',
                end: 'top top'
            },
            '--scroll-appear': 0,
            ease: 'linear'
        });
    }
};
</script>
<style lang="scss" scoped>
.wrapper-vitality {
    margin-top: 6rem;
    margin-bottom: 10rem;
}
.vitality {
    container-type: inline-size;
}
.vitality-title {
    display: block;
    margin-bottom: 4rem;
    padding: 0 var(--gutter);
    font-family: var(--urbanist);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 22cqw;
    line-height: 0.7;
    background-image: url('/img/big-ring-green.png');
    transform-origin: 50% 0%;
    transform: translateY(calc(-20px * var(--scroll-appear))) scale(calc(1 + var(--scroll-appear) * 0.5));
    // background-size: 150% auto;
    background-size: calc(150% + 10% * var(--scroll-parallax)) auto;
    background-position: 50% calc(25% + 10% * var(--scroll-parallax));
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.vitality-text {
    transform: translateY(calc((-20px + 7vw) * var(--scroll-appear)));
}
.vitality-subtitle {
    padding: 0 var(--gutter);
    font-family: var(--urbanist);
    font-size: 4rem;
    line-height: 4.8rem;
    font-weight: 700;
    color: #148668;
}
.bottom-vitality {
    position: relative;
    margin-top: 2rem;
    padding-top: 2rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--gutter);
        right: var(--gutter);
        border-top: 1px solid currentColor;
    }
}
.vitality-intro {
    padding: 0 var(--gutter);
}
.vitality-numbers {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
}
.vitality-number-content {
    position: relative;
    flex: 0 0 auto;
    width: 50%;
    padding: 1rem var(--gutter) 2rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        border-top: 1px solid currentColor;
    }
    > span {
        display: block;
    }
    &:nth-child(odd) {
        &::before {
            left: var(--gutter);
            right: 0;
        }
    }
    &:nth-child(even) {
        &::before {
            left: 0;
            right: var(--gutter);
        }
    }
}
.vitality-number {
    font-family: var(--urbanist);
    font-size: 5rem;
    font-weight: 600;
    line-height: 6rem;
}
.vitality-content {
    font-family: var(--urbanist);
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.7rem;
    letter-spacing: 0.03rem;
}

@media (min-width: $desktop) {
    .wrapper-vitality {
        margin-top: 20rem;
    }
    .vitality-text {
        transform: translateY(calc((-140px + 7vw) * var(--scroll-appear)));
    }
    .vitality-title {
        margin-bottom: 6rem;
        transform: translateY(calc(-140px * var(--scroll-appear))) scale(calc(1 + var(--scroll-appear) * 0.5));
    }
    .vitality-subtitle {
        font-size: 5rem;
        line-height: 6rem;
    }
    .bottom-vitality {
        display: flex;
        align-items: flex-start;
        padding-top: 0;
    }
    .vitality-intro {
        flex: 0 0 auto;
        width: 50%;
        padding-top: 3rem;
    }
    .vitality-numbers {
        flex: 0 0 auto;
        width: 50%;
        margin-top: 0;
    }
    .vitality-number-content {
        padding: 1rem var(--gutter) 4rem;
        &:nth-child(-n + 2) {
            &::before {
                content: none;
            }
        }
        &:nth-last-child(-n + 2) {
            padding-bottom: 0;
        }
        &:nth-child(odd) {
            &::before {
                left: var(--gutter);
                right: 0;
            }
        }
        &:nth-child(even) {
            &::before {
                left: 0;
                right: var(--gutter);
            }
        }
    }
}
</style>
