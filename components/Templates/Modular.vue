<template>
    <div v-if="data" class="wrapper-page">
        <div v-if="data.title || data.subtitle" class="hero-wrapper">
            <img src="/img/ring-green.png" class="bg-img right" />
            <img src="/img/ring-green.png" class="bg-img left" />
            <div class="container content-pad hero-modular">
                <h1 v-if="data.title" class="basic-h1">{{ data.title }}</h1>
                <div v-if="data.subtitle" class="basic-h3">{{ data.subtitle }}</div>
            </div>
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
    padding-top: 9rem;
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

.hero-wrapper {
    width: 100%;
}

.hero-modular {
    padding-top: 4rem;
    padding-bottom: 5px;
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

@media (min-width: $desktop) {
    .wrapper-page {
        padding-top: 6.5rem;
    }
    .hero-modular {
        padding-top: 16.5rem;
        padding-bottom: 7.5rem;
    }

    .bg-img {
        top: -13rem;
        width: 38rem;
        &.left {
            left: 0rem;
            transform: scaleX(-1);
        }
        &.right {
            right: 0rem;
            transform: rotate(0);
        }
    }
}
</style>
