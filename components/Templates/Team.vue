<template>
    <div v-if="data" class="wrapper-team">
        <div class="container">
            <div class="hero-team">
                <h1 class="basic-h1" v-html="data.title"></h1>
            </div>
            <DetailList :content="data.members" />
        </div>
        <InvestorsMod :content="data" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    head() {
        return {
            htmlAttrs: {
                class: 'lightmode'
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.wrapper-team {
    color: $orbit;
}
.hero-team {
    text-align: center;
    padding: 20px $gutter 40px;
}

@media (min-width: $desktop-small) {
    .hero-team {
        padding: 110px $gutter 50px;
    }
}
</style>
