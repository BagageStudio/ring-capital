<template>
    <div v-if="content" class="wrapper-ecosystem">
        <div class="container">
            <div class="wrapper-title content-pad">
                <h3 class="ecosystem-title basic-h3 underlined strong-neptune" v-html="content.ecosystemTitle"></h3>
                <p v-if="content.ecosystemSubtitle" class="ecosystem-subtitle basic-subtitle">
                    {{ content.ecosystemSubtitle }}
                </p>
                <div v-if="content.ecosystemText" class="ecosystem-text neptune" v-html="content.ecosystemText"></div>
                <Tags v-show="!isL" v-if="content.ecosystemTags" :content="content.ecosystemTags" />
            </div>
        </div>
        <FastImage v-if="isL" class="ecosystem-image" :image="content.ecosystemImage" />
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true }
    },
    computed: {
        isL() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.l;
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-ecosystem {
    padding: 40px 0 80px;
    color: $orbit;
    background: $grey;
}

@media (min-width: $desktop-small) {
    .wrapper-title {
        width: percentage(4/8);
    }
}
@media (min-width: $desktop) {
    .wrapper-title {
        width: percentage(7/12);
    }
}
@media (min-width: $desktop-large) {
    .wrapper-title {
        padding-left: calc(#{percentage(1/12)} + #{$gutter});
    }
}
</style>
