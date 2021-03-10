<template>
    <div v-if="data" class="wrapper-vision">
        <div class="hero-vision">
            <div class="hero-vision-container container">
                <div class="wrapper-title">
                    <h1 class="basic-h1 strong-saturn" v-html="$options.filters.nestedTitle(data.title, true)"></h1>
                    <div v-if="data.subtitle" class="wrapper-subtitle basic-subtitle" v-html="data.subtitle"></div>
                </div>
                <div v-if="isM" class="wrapper-imgs">
                    <div class="wrapper-hero-img left">
                        <FastImage class="hero-img" :image="data.heroLeftImage" cover />
                    </div>
                    <div v-if="isXL" class="wrapper-hero-img right">
                        <FastImage class="hero-img" :image="data.heroRightImage" cover />
                    </div>
                </div>
            </div>
        </div>
        <Believe :content="data" />
        <Manifesto :content="data.manifesto" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    computed: {
        isM() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.m;
        },
        isXL() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.xl;
        }
    }
};
</script>

<style lang="scss" scoped>
.hero-vision {
    padding: 0 0 70px;
}
.wrapper-title {
    padding: 30px #{$gutter} 0;
}

@media (min-width: $tablet) {
    .hero-vision {
        padding: 20px 0 70px;
    }
    .hero-vision-container {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .wrapper-title {
        flex: 0 0 auto;
        width: percentage(4/8);
    }
    .wrapper-imgs {
        flex: 0 0 auto;
        width: percentage(3/8);
    }
    .wrapper-hero-img {
        position: relative;
        padding: 0 $gutter;
        &::before {
            content: '';
            display: block;
            padding-bottom: 135%;
        }
    }
    .hero-img {
        position: absolute;
        top: 0;
        right: $gutter;
        bottom: 0;
        left: $gutter;
    }
}
@media (min-width: $desktop) {
    .hero-vision {
        padding: 40px 0 85px;
    }
    .wrapper-title {
        width: percentage(5/12);
    }
    .wrapper-imgs {
        display: flex;
        align-items: flex-end;
        width: percentage(6/12);
    }
    .wrapper-hero-img {
        width: 50%;
        &.left {
            margin-bottom: 115px;
        }
    }
}
</style>
