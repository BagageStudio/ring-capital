<template>
    <div v-if="data" class="wrapper-page">
        <div class="hero-modular">
            <div class="container">
                <div class="wrapper-title">
                    <h1 class="basic-h1 strong-titan" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <div v-if="data.subtitle" class="wrapper-subtitle basic-subtitle" v-html="data.subtitle"></div>
                </div>
            </div>
        </div>
        <Module v-for="module in data.modules" :key="module.id" :data="module" />
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
.hero-modular {
    padding: 20px 0 60px;
    text-align: center;
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
    .hero-modular {
        padding: 90px 0 0;
    }
    .wrapper-subtitle {
        max-width: 690px;
        margin-left: auto;
        margin-right: auto;
    }
}
// .wrapper-page {
//     padding: 10px 0 60px;
// }

// @media (min-width: $desktop-small) {
//     .wrapper-page {
//         padding: 70px 0 110px;
//     }
// }
</style>
