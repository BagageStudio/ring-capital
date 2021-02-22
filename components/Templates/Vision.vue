<template>
    <div v-if="data" class="wrapper-vision">
        <div class="hero-vision">
            <div class="container">
                <div class="wrapper-title">
                    <h1 class="basic-h1 strong-saturn" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
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
    computed: {}
};
</script>

<style lang="scss" scoped></style>
