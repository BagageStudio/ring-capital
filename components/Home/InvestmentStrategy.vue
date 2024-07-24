<template>
    <div class="wrapper-investment-strategy">
        <FastImage class="background-shape" :image="data.investmentStrategyBackgroundShape" contains />
        <div class="container">
            <div class="container-small">
                <h2 class="investment-strategy-title basic-h2">{{ data.investmentStrategyTitle }}</h2>
                <div class="investment-strategy-intro basic-txt" v-html="data.investmentStrategyIntro"></div>
                <div class="wrapper-buttons-funds">
                    <div class="funds-buttons">
                        <button
                            v-for="(fund, index) in slides"
                            :key="'fund-' + fund.id"
                            ref="fundBtn"
                            type="button"
                            class="fund-button"
                            :class="{ active: index === activeFund }"
                            @click="changeFund(index)"
                        >
                            {{ fund.name }}
                            <div class="wrapper-indicator">
                                <div class="indicator"></div>
                            </div>
                        </button>
                    </div>
                    <div class="investment-strategy-funds">
                        <div
                            v-for="(fund, index) in slides"
                            ref="slides"
                            :key="fund.id"
                            class="investment-strategy-fund"
                            :class="{ active: index === activeFund }"
                        >
                            <div class="fund-logo"><FastImage :image="fund.logoImage" contain /></div>
                            <div class="fund-name">{{ fund.name }}</div>
                            <div class="fund-description">{{ fund.description }}</div>
                            <div class="fund-full-description" v-html="fund.fullDescription"></div>
                            <nuxt-link :to="fund.slug" :aria-label="fund.name" class="fund-btn btn-rounded">
                                {{ data.learnMoreButtonLabel }}
                            </nuxt-link>
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
    data: () => ({
        activeFund: 0,
        slides: [],
        timer: null
    }),
    computed: {
        isDesktop() {
            if (!this.$store.state.superWindow) return false;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.xl;
        }
    },
    watch: {
        isDesktop(id) {
            if (id && !this.timer) {
                this.$nextTick(() => this.triggerAutoTimer(this.activeFund));
            }
            if (!id && this.timer) this.killAnim();
        }
    },
    mounted() {
        this.slides = this.shuffle(this.data.fundsSlides);
        if (this.isDesktop) {
            this.$nextTick(() => this.triggerAutoTimer(this.activeFund));
        }
    },
    methods: {
        triggerAutoTimer(index) {
            if (this.timer) this.timer.kill();
            this.timer = this.$gsap.to(this.$refs.fundBtn[index], {
                duration: 5,
                '--progress': 1,
                ease: 'linear',
                onComplete: () => {
                    this.autoChangeFund();
                }
            });
        },
        shuffle(array) {
            return [...array]
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
        },
        changeFund(nextSlide) {
            if (nextSlide === this.activeFund) return;

            const currentFund = this.$refs.slides[this.activeFund];
            const nextFund = this.$refs.slides[nextSlide];

            this.$gsap.to(this.$refs.fundBtn[this.activeFund], {
                duration: 0.2,
                '--progress': 0,
                ease: 'Power2.easeOut'
            });

            // Disappear
            this.$gsap.to([...currentFund.children].reverse(), {
                stagger: 0.04,
                duration: 0.7,
                autoAlpha: 0,
                y: 100,
                ease: 'power4.out',
                overwrite: true
            });

            // Reappear
            this.$gsap.fromTo(
                [...nextFund.children].reverse(),
                {
                    y: -200
                },
                {
                    y: 0,
                    stagger: 0.04,
                    duration: 1.2,
                    autoAlpha: 1,
                    ease: 'power4.out',
                    delay: 0.1,
                    overwrite: true
                }
            );

            this.triggerAutoTimer(nextSlide);
            this.activeFund = nextSlide;
        },
        autoChangeFund() {
            const nextFund = this.activeFund === this.slides.length - 1 ? 0 : this.activeFund + 1;
            this.changeFund(nextFund);
        },
        killAnim() {
            this.activeFund = 0;
            if (this.timer) this.timer.kill();
            this.timer = null;
            const slideItems = [...this.$refs.slides].map(s => [...s.children]).flat();
            this.$gsap.set(slideItems, { clearProps: 'all' });
            this.$gsap.set(this.$refs.fundBtn, { clearProps: 'all' });
        }
    }
};
</script>
<style lang="scss" scoped>
.wrapper-investment-strategy {
    position: relative;
    padding: 5rem 0;
    > .container {
        position: relative;
    }
}
.background-shape {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    max-width: 500px;
    pointer-events: none;
    ::v-deep .image {
        object-position: 100% 0%;
    }
}
.investment-strategy-title {
    position: relative;
    display: block;
    margin-bottom: 2rem;
    padding: 0 var(--gutter) 2rem;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: var(--gutter);
        right: var(--gutter);
        border-bottom: 1px solid currentColor;
    }
}
.investment-strategy-intro {
    padding: 0 var(--gutter);
}
.investment-strategy-funds {
    padding: 0 var(--gutter);
}
.investment-strategy-fund {
    padding: 4rem 0;
    &:not(:last-child) {
        border-bottom: 1px solid #c5c5c5;
    }
}
.fund-logo {
    width: 110px;
    margin-bottom: 20px;
}
.fund-name,
.fund-description {
    font-family: var(--urbanist);
    font-size: 3.5rem;
    line-height: 4.2rem;
    font-weight: 600;
}
.fund-btn {
    margin-top: 2rem;
}

.funds-buttons {
    display: none;
}

.fund-full-description {
    display: none;
}

@media (min-width: $tablet) {
    .investment-strategy-funds {
        display: flex;
        flex-wrap: wrap;
    }
    .investment-strategy-fund {
        flex: 0 0 auto;
        width: 50%;
        border-bottom: 1px solid #c5c5c5;
    }
}

@media (min-width: $desktop) {
    .fund-name {
        display: none;
    }

    .wrapper-buttons-funds {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        width: 100%;
        margin-top: 13rem;
    }
    .funds-buttons {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        width: calc(4 / 10 * 100%);
        padding: 0 var(--gutter);
    }
    .fund-button {
        position: relative;
        font-family: var(--urbanist);
        font-size: 5rem;
        line-height: 6rem;
        font-weight: 600;
        text-align: left;
        padding: 2rem 0;
        transition: color 0.2s ease-out;
        &.active {
            color: var(--brand-primary-red);
        }
    }
    .wrapper-indicator {
        position: absolute;
        display: flex;
        align-items: flex-end;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #c5c5c5;
        .indicator {
            width: 100%;
            height: 1.5px;
            background-color: var(--brand-primary-red);
            transform: scaleX(var(--progress, 0));
            transform-origin: 0 0;
        }
    }
    .investment-strategy-funds {
        position: relative;
        display: block;
        flex: 0 0 auto;
        width: calc(5 / 10 * 100%);
        padding: 0;
    }
    .investment-strategy-fund {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        width: auto;
        padding: 0 var(--gutter);
        border-bottom: 0;
        transform: translateY(-50%);
        pointer-events: none;
        z-index: 1;
        > * {
            opacity: 0;
            visibility: hidden;
        }
        &:first-child {
            > * {
                opacity: 1;
                visibility: visible;
            }
        }
        &:not(:last-child) {
            border-bottom: 0;
        }
        &.active {
            pointer-events: auto;
        }
    }
    .fund-full-description {
        display: block;
        margin-top: 2rem;
        ::v-deep p {
            font-size: 2.5rem;
            line-height: 3.2rem;
            margin: 0;
        }
        ::v-deep p + p {
            margin-top: 1em;
        }
    }
    .fund-btn {
        margin-top: 4rem;
    }
}
</style>
