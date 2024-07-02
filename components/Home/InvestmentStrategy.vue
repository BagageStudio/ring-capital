<template>
    <div class="wrapper-investment-strategy">
        <FastImage class="background-shape" :image="data.investmentStrategyBackgroundShape" contains />
        <div class="container">
            <div class="container-small">
                <h2 class="investment-strategy-title basic-h2">{{ data.investmentStrategyTitle }}</h2>
                <div class="investment-strategy-intro basic-txt" v-html="data.investmentStrategyIntro"></div>
                <div class="wrapper-buttons-funds">
                    <div v-if="isDesktop" class="funds-buttons">
                        <button
                            v-for="fund in data.fundsSlides"
                            :key="'fund-' + fund.id"
                            type="button"
                            class="fund-button"
                        >
                            {{ fund.name }}
                            <div class="wrapper-indicator">
                                <div class="indicator"></div>
                            </div>
                        </button>
                    </div>
                    <div class="investment-strategy-funds">
                        <div
                            v-for="(fund, index) in data.fundsSlides"
                            :key="fund.id"
                            class="investment-strategy-fund"
                            :class="{ active: index === activeFound }"
                        >
                            <div class="fund-logo"><FastImage :image="fund.logoImage" contain /></div>
                            <div v-if="!isDesktop" class="fund-name">{{ fund.name }}</div>
                            <div class="fund-description">{{ fund.description }}</div>
                            <div v-if="isDesktop" class="fund-full-description" v-html="fund.fullDescription"></div>
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
        activeFound: 0
    }),
    computed: {
        isDesktop() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.xl;
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
    }
    .wrapper-indicator {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #c5c5c5;
        .indicator {
            width: 100%;
            height: 100%;
            background-color: var(--brand-primary-red);
            transform: scaleX(0);
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
        top: 0;
        left: 0;
        right: 0;
        width: auto;
        padding: 0 var(--gutter);
        border-bottom: 0;
        opacity: 0;
        visibility: hidden;
        &.active {
            opacity: 1;
            visibility: visible;
        }
        &:not(:last-child) {
            border-bottom: 0;
        }
    }
    .fund-full-description {
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
