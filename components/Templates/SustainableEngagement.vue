<template>
    <div v-if="data" class="wrapper-se">
        <div class="hero-se">
            <div class="container">
                <div class="wrapper-title">
                    <h1 class="basic-h1" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <div v-if="data.subtitle || data.text" class="wrapper-subtitle">
                        <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
                        <div v-if="data.text" class="hero-text neptune" v-html="data.text"></div>
                    </div>
                </div>
            </div>
        </div>
        <SocialDigital :data="data" />
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
    text-align: center;
    padding: 20px 0 60px;
}
.wrapper-title {
    padding: 0 $gutter;
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
    .hero-text {
        max-width: 430px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
