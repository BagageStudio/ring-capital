<template>
    <div v-if="data" class="wrapper-investors">
        <div class="container">
            <div class="hero-portfolio">
                <h1 class="basic-h1 underlined saturn">
                    <span>{{ data.title }}</span>
                </h1>
                <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
            </div>
            <LogosList :content="data.investors" :size="'medium'" :has-link="false" />
        </div>
        <CenteredText :content="data.moduleText" />
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
.hero-portfolio {
    padding: 0 $gutter;
}
</style>
