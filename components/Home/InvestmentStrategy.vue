<template>
    <div class="wrapper-investment-strategy container">
        <div class="container-small">
            <h2 class="investment-strategy-title">{{ data.investmentStrategyTitle }}</h2>
            <div class="investment-strategy-intro" v-html="data.investmentStrategyIntro"></div>
            <div class="investment-strategy-funds">
                <div v-for="fund in data.fundsSlides" :key="fund.id" class="investment-strategy-fund">
                    <div class="fund-logo"><FastImage :image="fund.logoImage" contain /></div>
                    <div class="fund-name">{{ fund.name }}</div>
                    <div class="fund-description">{{ fund.description }}</div>
                    <nuxt-link :to="fund.slug" :aria-label="fund.name" class="fund-btn btn-rounded">
                        {{ data.learnMoreButtonLabel }}
                    </nuxt-link>
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
    }
};
</script>
<style lang="scss" scoped>
.wrapper-investment-strategy {
    margin: 5rem 0;
}
.investment-strategy-title {
    position: relative;
    display: block;
    margin-bottom: 2rem;
    padding: 0 var(--gutter) 2rem;
    font-family: var(--urbanist);
    font-weight: 600;
    font-size: 5rem;
    line-height: 5rem;
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
    :deep p {
        margin: 1em 0;
        font-size: 2.5rem;
        line-height: 3.2rem;
    }
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
</style>
