<template>
    <div v-if="content" class="wrapper-believe">
        <div class="container-believe container">
            <div v-if="isM" class="wrapper-img">
                <div class="believe-img">
                    <FastImage class="img" :image="content.believeImage" cover />
                </div>
            </div>
            <div class="wrapper-txt">
                <h3 class="believe-title basic-h3 underlined neptune">
                    <span>{{ content.believeTitle }}</span>
                </h3>
                <LayoutAccordions on-white :content="content.believeAccordions" />
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
        isM() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.m;
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-believe {
    padding: 80px 0;
    color: $orbit;
    background: $white;
}
.wrapper-txt {
    padding: 0 #{$gutter};
}
.believe-title {
    margin-bottom: 30px;
}

@media (min-width: $tablet) {
    .container-believe {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .wrapper-img {
        flex: 0 0 auto;
        width: math.percentage(math.div(3, 8));
        padding: 0 #{$gutter};
    }
    .believe-img {
        position: relative;
        &::before {
            content: '';
            display: block;
            padding-bottom: 125%;
        }
    }
    .img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .wrapper-txt {
        flex: 0 0 auto;
        width: math.percentage(math.div(4, 8));
    }
}
@media (min-width: $desktop) {
    .wrapper-believe {
        padding: 130px 0 55px;
    }
    .wrapper-img {
        width: math.percentage(math.div(5, 12));
    }
    .wrapper-txt {
        width: math.percentage(math.div(6, 12));
    }
}
@media (min-width: $desktop-large) {
    .wrapper-img {
        width: math.percentage(math.div(6, 12));
        padding: 0 calc(#{math.percentage(math.div(1, 12))} + #{$gutter});
    }
    .wrapper-txt {
        margin-top: 40px;
        padding-right: calc(#{math.percentage(math.div(1, 12))} + #{$gutter});
    }
}
</style>
