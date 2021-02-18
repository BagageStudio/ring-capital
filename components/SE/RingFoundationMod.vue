<template>
    <div class="wrapper-foundation-mod">
        <FastImage
            v-if="data.endowmentFundMobileImage && !isM"
            class="mobile-img"
            :image="data.endowmentFundMobileImage"
        />
        <div v-if="data.endowmentFundDesktopImage && isM" class="wrapper-desktop-img">
            <FastImage class="desktop-img" :image="data.endowmentFundDesktopImage" cover />
        </div>
        <div class="container">
            <div class="wrapper-txt">
                <h3
                    v-if="data.endowmentFundTitle"
                    class="basic-h3 underlined strong-neptune"
                    v-html="data.endowmentFundTitle"
                ></h3>
                <div
                    v-if="data.endowmentFundText"
                    class="foundation-mod-text neptune"
                    v-html="data.endowmentFundText"
                ></div>
                <div v-if="data.endowmentFundLineLink" class="foundation-mod-link line">
                    <nuxt-link class="btn-line on-white" :to="data.endowmentFundLineLink">
                        <span class="deco"></span>
                        {{ data.endowmentFundLineLink.label }}
                    </nuxt-link>
                </div>
                <div v-if="data.endowmentFundBlockLink" class="foundation-mod-link">
                    <LinkTo class="btn-block secondary" :link="data.endowmentFundBlockLink" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        isM() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.m;
        }
    }
};
</script>
<style lang="scss" scoped>
.wrapper-foundation-mod {
    padding: 50px 0;
    color: $orbit;
    background: $white;
}
.wrapper-txt {
    padding: 0 $gutter;
}
.foundation-mod-link {
    margin-top: 40px;
    &.line {
        margin-top: 20px;
    }
}

@media (min-width: $tablet) {
    .wrapper-foundation-mod {
        padding: 70px 0;
    }
    .wrapper-txt {
        width: percentage(5/8);
    }
}
@media (min-width: $desktop-small) {
    .wrapper-txt {
        width: percentage(4/8);
    }
}
@media (min-width: $desktop) {
    .wrapper-foundation-mod {
        padding: 95px 0 80px;
    }
    .wrapper-txt {
        width: percentage(6/12);
    }
}
@media (min-width: $desktop-large) {
    .wrapper-txt {
        padding-left: calc(#{percentage(1/12)} + #{$gutter});
    }
}
</style>
