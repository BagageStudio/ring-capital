<template>
    <div :class="{ 'on-white': onWhite }" class="wrapper-accordions-module">
        <div class="container-accordions-module container">
            <div v-if="isM" class="wrapper-img">
                <div class="accordions-module-img">
                    <FastImage class="img" :image="data.image" cover />
                </div>
            </div>
            <div class="wrapper-txt">
                <h3 class="accordions-module-title basic-h3 underlined neptune">
                    <span>{{ data.title }}</span>
                </h3>
                <Accordions on-white :content="data.accordions" />
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
        },
        onWhite: {
            type: Boolean,
            default: false
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
.wrapper-accordions-module {
    padding: 80px 0;
    color: $orbit;
    background: $white;
}
.wrapper-txt {
    padding: 0 #{$gutter};
}
.accordions-module-title {
    margin-bottom: 30px;
}

@media (min-width: $tablet) {
    .container-accordions-module {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .wrapper-img {
        flex: 0 0 auto;
        width: percentage(3/8);
        padding: 0 #{$gutter};
    }
    .accordions-module-img {
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
        width: percentage(4/8);
    }
}
@media (min-width: $desktop) {
    .wrapper-believe {
        padding: 130px 0 55px;
    }
    .wrapper-img {
        width: percentage(5/12);
    }
    .wrapper-txt {
        width: percentage(6/12);
    }
}
@media (min-width: $desktop-large) {
    .wrapper-img {
        width: percentage(6/12);
        padding: 0 calc(#{percentage(1/12)} + #{$gutter});
    }
    .wrapper-txt {
        margin-top: 40px;
        padding-right: calc(#{percentage(1/12)} + #{$gutter});
    }
}
</style>
