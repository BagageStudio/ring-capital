<template>
    <div v-if="data" class="wrapper-r2s">
        <div class="hero-r2s">
            <div class="container">
                <div class="wrapper-title content-pad">
                    <h1 class="basic-h1" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
                </div>
            </div>
        </div>
        <FiftyFifty :content="data.fiftyFiftyBlocks" />
        <Mosaic :content="data.mosaic" />
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
.hero-r2s {
    padding: 0 0 90px;
}
@media (min-width: $desktop) {
    .hero-r2s {
        padding: 90px 0 160px;
    }
    .wrapper-title {
        width: percentage(6/12);
    }
}
</style>
