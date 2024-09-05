<template>
    <div class="hero-wrapper container content-pad">
        <div class="hero">
            <h1 v-if="content.title" class="basic-h1">{{ content.title }}</h1>
            <div v-if="content.subtitle" class="basic-h3">{{ content.subtitle }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.hero-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.hero {
    width: 100%;
    text-align: center;
}

.basic-h1 {
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--txt);
}

.basic-h3 {
    margin-top: 3rem;
}

@media (min-width: $tablet) {
    .hero {
        width: 66.66%;
        margin: 0 auto;
    }
}

@media (min-width: $desktop) {
    .hero-wrapper {
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
    }
}
</style>
