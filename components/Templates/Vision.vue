<template>
    <div v-if="data" class="wrapper-vision">
        <div class="hero-vision">
            <div class="container">
                <div class="wrapper-title">
                    <h1 class="basic-h1" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <!-- <div v-if="data.subtitle || data.text" class="wrapper-subtitle">
                        <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
                        <div v-if="data.text" class="hero-text neptune" v-html="data.text"></div>
                    </div> -->
                </div>
            </div>
        </div>
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
