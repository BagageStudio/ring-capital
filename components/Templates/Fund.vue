<template>
    <div v-if="data" class="wrapper-fund" :class="[`theme-${data.theme}`]">
        <img :src="`/img/ring-${data.theme}.png`" class="bg-img" />
        <div class="container content-pad fund-hero">
            <div class="fund-logo"><FastImage :image="data.logoImage" contain /></div>
            <h1 class="basic-h1" v-html="$options.filters.noPAround(data.title)"></h1>
        </div>
        <div class="container">
            <div class="fund-infos">
                <div class="fund-description content-pad">
                    <h2 class="basic-h3">{{ data.description }}</h2>
                    <p class="basic-subtitle">{{ data.fullDescription }}</p>
                </div>
                <div v-if="data.keyFigures.length" class="content-pad fund-numbers-wrapper">
                    <div class="fund-numbers">
                        <div v-for="keyFigure in data.keyFigures" :key="keyFigure.id" class="fund-number">
                            <span class="fund-number-number">{{ keyFigure.number }}</span>
                            <span class="fund-number-title basic-tag">{{ keyFigure.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="targets-cols container">
            <div class="target-col content-pad">
                <div class="target-title basic-h4">{{ data.targetsFirstColumnTitle }}</div>
                <div v-for="item in data.targetsFirstColumnItems" :key="item.id" class="target-item">
                    <span>{{ item.text }}</span>
                </div>
            </div>
            <div class="target-col content-pad">
                <div class="target-title basic-h4">{{ data.targetsSecondColumnTitle }}</div>
                <div v-for="item in data.targetsSecondColumnItems" :key="item.id" class="target-item">
                    <span>{{ item.text }}</span>
                </div>
            </div>
        </div>

        <div class="container">
            <LayoutLinkedCompanies :companies="data.portfolioItems" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-fund {
    position: relative;
    padding-top: 14rem;
    &.theme-orange .fund-hero > h1 {
        color: var(--brand-primary-red);
    }
    &.theme-blue .fund-hero > h1 {
        color: var(--brand-primary-blue);
    }
    &.theme-green .fund-hero > h1 {
        color: var(--brand-primary-green);
    }
}
.bg-img {
    position: absolute;
    top: -9rem;
    left: -10rem;
    width: 29rem;
    transform: scaleX(-1);
    max-width: none;
    z-index: -1;
}
.fund-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
    > h1 {
        width: 100%;
        padding-bottom: 2rem;
        text-align: center;
        border-bottom: 1px solid var(--txt);
    }
}

.fund-logo {
    width: 11rem;
    margin-bottom: 2rem;
}

.fund-infos {
    position: relative;
    padding-bottom: 3rem;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: var(--gutter);
        right: var(--gutter);
        height: 1px;
        background-color: var(--txt);
    }
}

.fund-description > h2 {
    margin-bottom: 1rem;
}

.fund-numbers-wrapper {
    max-width: 500px;
}

.fund-numbers {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    padding: 3rem 4rem;
    border: 1px solid var(--txt);
}

.fund-number {
    display: flex;
    flex-direction: column;
}

.fund-number-number {
    font-family: var(--urbanist);
    font-size: 3.5rem;
    line-height: normal;
    font-weight: 600;
}

.targets-cols {
    padding-top: 6rem;
}

.target-col {
    margin-bottom: 6rem;
}

.target-title {
    margin-bottom: 2rem;
}

.target-item {
    padding: 2rem 0;
    border-top: 1px solid #9d9d9d;
    &:last-child {
        border-bottom: 1px solid #9d9d9d;
    }
}

.wrapper-other-companies {
    margin-bottom: 9rem;
}

@media (min-width: $desktop) {
    .bg-img {
        top: -19rem;
        left: -15rem;
        width: 46rem;
        transform: scaleX(-1) rotate(-26deg);

        // top: -9rem;
        // left: -10rem;
        // width: 29rem;
    }
    .fund-hero {
        margin-bottom: 4rem;
        > h1 {
            padding-bottom: 4rem;
        }
    }
    .fund-infos {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .fund-description {
        flex: 0 0 50%;
    }
    .fund-numbers-wrapper {
        flex: 0 0 50%;
    }
    .targets-cols {
        display: flex;
        padding-top: 10rem;
    }
    .target-col {
        flex: 0 0 50%;
    }
}

@media (min-width: $desktop-xxl) {
    .fund-description {
        flex: 0 0 66.66%;
    }
    .fund-numbers-wrapper {
        max-width: none;
        flex: 0 0 33.33%;
    }
}
</style>
