<template>
    <div v-if="data" class="wrapper-team">
        <div class="container">
            <div class="hero-team">
                <div class="wrapper-title">
                    <h1 class="basic-h1 team-title underlined-center" v-html="data.title"></h1>
                    <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
                </div>
            </div>
            <DetailList :content="data.members" />
        </div>
        <InvestorsMod :content="data" />
        <Mosaic :content="data.mosaic" />
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
.team-title {
    margin-bottom: 25px;
}

@media (min-width: $desktop-small) {
    .hero-team {
        padding: 110px $gutter 50px;
    }
    .wrapper-title {
        max-width: 668px;
        margin: 0 auto;
    }
    .team-title {
        margin-bottom: 35px;
    }
}
</style>
