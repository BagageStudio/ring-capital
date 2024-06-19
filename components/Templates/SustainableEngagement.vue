<template>
    <div v-if="data" class="wrapper-se">
        <div class="hero-se">
            <div class="container">
                <div class="wrapper-title">
                    <h1 class="basic-h1 strong-titan" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <div v-if="data.subtitle" class="wrapper-subtitle basic-subtitle" v-html="data.subtitle"></div>
                </div>
            </div>
        </div>
        <SESocialDigital :data="data" />
        <LayoutTextLogos
            :small-title="data.partnersTitle"
            :text="data.partnersText"
            :list="data.partners"
            has-link
            white-mode
        />
        <SEInvestorCompany :data="data" />
        <SERingFoundationMod :data="data" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
.hero-se {
    padding: 20px 0 60px;
    text-align: center;
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
    .hero-se {
        padding: 90px 0 0;
    }
    .wrapper-subtitle {
        max-width: 690px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
