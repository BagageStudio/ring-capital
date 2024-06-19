<template>
    <div v-if="data" class="wrapper-investors">
        <div class="container">
            <div class="hero-investors">
                <h1 class="basic-h1 underlined saturn">
                    <span>{{ data.title }}</span>
                </h1>
                <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
            </div>
            <div class="wrapper-logos">
                <LayoutLogosList :content="data.investors" show-label class="medium-grid big-height" />
            </div>
        </div>
        <LayoutCenteredText :content="data.moduleText" />
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
.hero-investors {
    padding: 20px $gutter;
}

.wrapper-logos {
    padding: 0 0 70px;
}

@media (min-width: $desktop-small) {
    .hero-investors {
        padding: 90px $gutter 30px;
    }
    .wrapper-logos {
        padding: 0 0 120px;
    }
}
</style>
