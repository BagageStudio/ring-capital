<template>
    <div v-if="content" class="wrapper-ecosystem">
        <FastImage v-if="isL" class="ecosystem-image" :image="content.ecosystemImage" />
        <div class="container-ecosystem container">
            <div class="wrapper-title">
                <h3 class="ecosystem-title basic-h3 underlined strong-neptune" v-html="content.ecosystemTitle"></h3>
                <p v-if="content.ecosystemSubtitle" class="ecosystem-subtitle basic-subtitle">
                    {{ content.ecosystemSubtitle }}
                </p>
                <div v-if="content.ecosystemText" class="ecosystem-text neptune" v-html="content.ecosystemText"></div>
                <LayoutTags v-show="!isL" v-if="content.ecosystemTags" :content="content.ecosystemTags" />
            </div>
        </div>
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
.wrapper-title {
    padding: 0 #{$gutter};
}

@media (min-width: $desktop-small) {
    .wrapper-ecosystem {
        position: relative;
    }
    .wrapper-title {
        width: math.percentage(math.div(4, 8));
        padding: 0;
    }
    .ecosystem-title,
    .ecosystem-subtitle,
    .ecosystem-text {
        padding: 0 #{$gutter};
    }
    .ecosystem-text {
        width: math.percentage(math.div(3, 4));
    }
    .ecosystem-image {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 67vw;
    }
    .container-ecosystem {
        position: relative;
    }
}
@media (min-width: $desktop) {
    .wrapper-ecosystem {
        padding: 160px 0;
    }
    .wrapper-title {
        width: math.percentage(math.div(7, 12));
    }
    .ecosystem-text {
        width: math.percentage(math.div(5, 7));
    }
    .ecosystem-image {
        width: 62vw;
        max-width: 899px;
    }
}
@media (min-width: $desktop-large) {
    .wrapper-title {
        padding-left: math.percentage(math.div(1, 12));
    }
    .ecosystem-subtitle {
        width: math.percentage(math.div(4, 6));
    }
    .ecosystem-text {
        width: math.percentage(math.div(3, 6));
    }
}
</style>
