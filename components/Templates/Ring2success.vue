<template>
    <div v-if="data" class="wrapper-r2s">
        <div class="hero-r2s">
            <div class="container">
                <div class="wrapper-title">
                    <h1 class="basic-h1 strong-neptune" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <div v-if="data.subtitle" class="wrapper-subtitle basic-subtitle" v-html="data.subtitle"></div>
                </div>
            </div>
        </div>
        <Ring2SuccessFiftyFifty :content="data.fiftyFiftyBlocks" />
        <Ring2SuccessJourney :title="data.journeyTitle" :content="data.journey" />
        <Ring2SuccessEcosystem :content="data" />
        <LayoutMosaic :content="data.mosaic" />
        <Ring2SuccessCrew :content="data" />
        <Ring2SuccessStories :content="data" />
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
.hero-r2s {
    padding: 20px 0 60px;
    text-align: center;
    color: $orbit;
}
.wrapper-title {
    padding: 0 $gutter;
}
.wrapper-subtitle {
    margin: 0;
    ::v-deep p {
        margin: 20px 0;
    }
}

@media (min-width: $desktop-small) {
    .hero-r2s {
        padding: 90px 0 0;
    }
    .wrapper-subtitle {
        max-width: 690px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
