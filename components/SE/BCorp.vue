<template>
    <div class="wrapper-foundation-mod">
        <div v-if="data.bcorpMobileImage && !isM" class="wrapper-mobile-img">
            <FastImage class="mobile-img" :image="data.bcorpMobileImage" cover />
        </div>
        <div v-if="data.bcorpDesktopImage && isM" class="wrapper-desktop-img">
            <FastImage class="desktop-img" :image="data.bcorpDesktopImage" cover />
        </div>
        <div class="container">
            <div class="wrapper-txt">
                <h3
                    v-if="data.bcorpTitle"
                    class="basic-h3 underlined neptune strong-white"
                    v-html="data.bcorpTitle"
                ></h3>
                <div v-if="data.bcorpText" class="foundation-mod-text white" v-html="data.bcorpText"></div>
                <div v-if="data.bcorpLineLink" class="foundation-mod-link line">
                    <LinkTo class="btn-line on-white" :link="data.bcorpLineLink" />
                </div>
                <div v-if="data.bcorpBlockLink" class="foundation-mod-link">
                    <LinkTo class="btn-block primary" :link="data.bcorpBlockLink" />
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
    padding: 0 0 50px;
    color: $orbit;
    background: $dark;
}
.wrapper-mobile-img {
    margin: 0 0 50px;
    padding-left: 15px;
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
.foundation-mod-text {
    color: $white;
}

@media (min-width: $tablet) {
    .wrapper-foundation-mod {
        position: relative;
        padding: 70px 0;
    }
    .wrapper-txt {
        width: percentage(5/8);
    }
    .wrapper-desktop-img {
        position: absolute;
        right: -20vw;
        bottom: 0;
        height: 100%;
    }
    .desktop-img {
        height: 100%;
        ::v-deep .image {
            object-position: 0 50%;
        }
    }
}
@media (min-width: $desktop-small) {
    .wrapper-desktop-img {
        right: -10vw;
    }
    .wrapper-txt {
        width: percentage(4/8);
    }
}
@media (min-width: $desktop) {
    .wrapper-foundation-mod {
        padding: 95px 0 80px;
    }
    .wrapper-desktop-img {
        right: 0;
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
