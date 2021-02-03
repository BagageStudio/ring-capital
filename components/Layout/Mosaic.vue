<template>
    <div v-if="content" class="wrapper-mosaic">
        <div class="container">
            <div class="wrapper-img">
                <div v-if="content.topLeftImage && isL">
                    <FastImage class="img" :image="content.topLeftImage" cover />
                </div>
                <div v-if="content.bottomLeftImage && isL">
                    <FastImage class="img" :image="content.bottomLeftImage" cover />
                </div>
                <div v-if="content.rightMobileImage">
                    <FastImage class="img" :image="content.rightMobileImage" cover />
                </div>
            </div>
            <div class="wrapper-txt">
                <h3 class="basic-h3 underlined strong-neptune" v-html="content.title"></h3>
                <div v-if="content.text" class="mosaic-text" v-html="content.text"></div>
                <LinkTo v-if="content.link" class="btn-block mosaic-btn secondary" :link="content.link" />
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
.wrapper-mosaic {
    padding: 60px 0;
    color: $orbit;
    background: $white;
}
.wrapper-img {
    margin: 0 0 30px;
    padding: 0 $gutter;
}
.wrapper-txt {
    padding: 0 $gutter;
}
.mosaic-text {
    color: $neptune;
}
.mosaic-btn {
    margin-top: 20px;
}

@media (min-width: $desktop-small) {
    .wrapper-mosaic {
        padding: 120px 0 130px;
        .container {
            display: flex;
            align-items: center;
        }
    }
    .wrapper-img {
        width: percentage(5/8);
        display: grid;
        grid-template-columns: #{percentage(1/5)} #{percentage(2/5)} #{percentage(2/5)};
        grid-template-rows: 105px 190px 190px 110px;
        margin: 0;
        > div {
            &:nth-child(1) {
                grid-column-start: 1;
                grid-column-end: 3;
                grid-row-start: 1;
                grid-row-end: 3;
                padding-bottom: $gutter;
                padding-right: $gutter;
            }
            &:nth-child(2) {
                grid-column-start: 2;
                grid-column-end: 3;
                grid-row-start: 3;
                grid-row-end: 5;
                padding-top: $gutter;
                padding-right: $gutter;
            }
            &:nth-child(3) {
                grid-column-start: 3;
                grid-column-end: 4;
                grid-row-start: 2;
                grid-row-end: 4;
                padding-left: $gutter;
            }
            .img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .wrapper-txt {
        width: percentage(3/8);
    }
}
@media (min-width: $desktop) {
    .wrapper-img {
        width: percentage(7/12);
        grid-template-columns: #{percentage(1/7)} #{percentage(3/7)} #{percentage(3/7)};
    }
    .wrapper-txt {
        width: percentage(5/12);
    }
}
@media (min-width: $desktop-xxl) {
    .wrapper-txt {
        padding-left: calc(#{percentage(1/12)} + #{$gutter});
    }
}
</style>
