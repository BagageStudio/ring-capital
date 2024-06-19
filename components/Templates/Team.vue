<template>
    <div v-if="data" class="wrapper-team">
        <div class="container">
            <SchemaTeam v-if="isL" />
            <div class="hero-team">
                <div class="wrapper-title">
                    <h1 class="basic-h1 team-title" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
                </div>
            </div>
            <LayoutDetailList class="shape-one" :content="data.members" random />
        </div>
        <LayoutTextLogos
            :big-title="data.investorsTitle"
            :subtitle="data.investorsSubtitle"
            :link="data.investorsLink"
            :list="data.investors"
        />
        <LayoutMosaic :content="data.mosaic" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    computed: {
        isL() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.l;
        }
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

.basic-h1 {
    ::v-deep p {
        position: relative;
        display: inline;
        margin: 0;
    }
    ::v-deep span {
        position: relative;
        padding-top: 8px;
        box-shadow: 10px 0 0 $white, -10px 0 0 $white;
        background-color: $white;
        background-position: 0% calc(74% + 0.7px);
    }
    ::v-deep strong {
        color: $neptune;
        font-weight: 300;
    }
}

@media (min-width: $desktop-small) {
    .wrapper-team {
        position: relative;
    }
    .schema {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 1050px;
        z-index: -1;
    }
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
