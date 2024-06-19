<template>
    <div v-if="data" class="wrapper-use-cases">
        <div class="container">
            <div class="hero-use-cases">
                <h1 class="basic-h1 underlined neptune">
                    <span>{{ data.title }}</span>
                </h1>
                <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
                <div v-if="data.text" class="neptune" v-html="data.text"></div>
            </div>
            <LayoutDetailList class="shape-two" fixed-height :content="data.useCases" />
            <div v-if="data.seeAllLink" class="wrapper-all">
                <a :href="data.seeAllLink" target="_blank" rel="noopener noreferrer" class="btn-line on-grey">
                    <span class="deco"></span>
                    {{ $t('usecases.seeAllLabel') }}
                </a>
            </div>
        </div>
        <LayoutMosaic :content="data.mosaic" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    computed: {},
    head() {
        return {
            htmlAttrs: {
                class: 'greymode'
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.wrapper-use-cases {
    color: $orbit;
}
.hero-use-cases {
    padding: 20px $gutter 40px;
}
.wrapper-all {
    display: flex;
    justify-content: center;
    padding: 60px $gutter;
}

@media (min-width: $phone) {
    .wrapper-all {
        padding-top: 0;
    }
}
@media (min-width: $desktop-small) {
    .hero-use-cases {
        width: math.percentage(math.div(6, 9));
        min-height: 350px;
        padding: 90px #{2 * $gutter} 80px #{$gutter};
    }
    .wrapper-all {
        margin-top: -60px;
        padding: 0 $gutter 95px;
    }
}
@media (min-width: $desktop-large) {
    .hero-use-cases {
        width: math.percentage(math.div(4, 9));
    }
}
</style>
