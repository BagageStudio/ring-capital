<template>
    <div v-if="data" class="wrapper-use-cases">
        <div class="container">
            <div class="hero-use-cases">
                <h1 class="basic-h1 underlined neptune">
                    <span>{{ data.title }}</span>
                </h1>
                <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
                <div v-if="data.text" v-html="data.text"></div>
            </div>
            <DetailList class="shape-two" fixed-height :content="data.useCases" />
        </div>
        <Mosaic :content="data.mosaic" />
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

@media (min-width: $desktop-small) {
    .hero-use-cases {
        width: percentage(6/9);
        min-height: 350px;
        padding: 90px #{2 * $gutter} 80px #{$gutter};
    }
}
@media (min-width: $desktop-large) {
    .hero-use-cases {
        width: percentage(4/9);
    }
}
</style>
