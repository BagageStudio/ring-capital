<template>
    <div v-if="data" class="wrapper-vision">
        <div class="hero-vision">
            <div class="container">
                <div class="wrapper-title">
                    <h1 class="basic-h1 strong-neptune" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <div v-if="data.subtitle" class="wrapper-subtitle basic-subtitle" v-html="data.subtitle"></div>
                </div>
            </div>
        </div>
        <Believe :content="data" />
        <Manifesto :content="data.manifesto" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    head() {
        return {
            htmlAttrs: {
                class: 'lightmode'
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.hero-vision {
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
    .hero-vision {
        padding: 90px 0 0;
    }
    .wrapper-subtitle {
        max-width: 690px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
