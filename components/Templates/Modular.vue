<template>
    <div v-if="data" class="wrapper-page">
        <img src="/img/ring-green.png" class="bg-img right" />
        <img src="/img/ring-green.png" class="bg-img left" />
        <div class="container content-pad hero-modular">
            <h1 class="basic-h1" v-html="$options.filters.noPAround(data.title)"></h1>
            <div v-if="data.subtitle" class="basic-h3" v-html="$options.filters.noPAround(data.subtitle)"></div>
        </div>
        <Mods v-for="m in data.modules" :key="m.id" :data="m" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-page {
    position: relative;
    padding-top: 14rem;
}
.bg-img {
    position: absolute;
    top: -18rem;
    width: 29rem;
    max-width: none;
    z-index: -1;
    &.left {
        left: -6rem;
        transform: scaleX(-1) rotate(10deg);
    }
    &.right {
        right: -6rem;
        transform: rotate(10deg);
    }
}

.hero-modular {
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
    .hero-modular {
        width: 66.66%;
        margin: 0 auto;
    }
}
</style>
