<template>
    <div class="vision-wrapper">
        <div class="wrapper-section-1 container">
            <div class="content-section-1">
                <div class="wrapper-col-section left">
                    <h3 v-if="data.section1LeftTitle" class="basic-h3 underlined">
                        <span>{{ data.section1LeftTitle }}</span>
                    </h3>
                    <div
                        v-if="data.section1LeftContent"
                        class="basic-subtitle neptune"
                        v-html="data.section1LeftContent"
                    ></div>
                </div>
                <div class="wrapper-col-section right">
                    <h3 v-if="data.section1RightTitle" class="basic-h3 underlined">
                        <span>{{ data.section1RightTitle }}</span>
                    </h3>
                    <div
                        v-if="data.section1RightContent"
                        class="basic-subtitle neptune"
                        v-html="data.section1RightContent"
                    ></div>
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
    }
};
</script>
<style lang="scss" scoped>
.vision-wrapper {
    overflow: hidden;
    position: relative;
    backface-visibility: hidden;
    transform: translateZ(0);
    will-change: transform;
    transform-style: preserve-3d;
}
.wrapper-section-1 {
    padding-top: 50px;
    padding-bottom: 60px;
}
.content-section-1 {
    padding: 0 $gutter;
}

@media (min-width: $tablet) {
    .content-section-1 {
        padding: 0;
    }
    .wrapper-col-section {
        width: percentage(4/8);
        padding: 0 $gutter;
        backface-visibility: hidden;
        transform: translateZ(0);
        will-change: transform;
        transform-style: preserve-3d;
        &.left {
            .basic-subtitle {
                margin-bottom: 0;
            }
        }
        &.right {
            margin-left: auto;
        }
    }
}
@media (min-width: $desktop) {
    .wrapper-section-1 {
        padding-top: 190px;
        padding-bottom: 190px;
    }
    .content-section-2 {
        display: flex;
        align-items: center;
        padding: 0;
    }
    .wrapper-col-section {
        width: percentage(5/12);
        &.left {
            order: 1;
            padding-right: calc(#{percentage(1/12)} + #{$gutter});
            margin-top: 110px;
        }
        &.right {
            order: 3;
            padding-left: calc(#{percentage(1/12)} + #{$gutter});
            margin-top: -110px;
        }
    }
}

@media (min-width: $desktop-xxl) {
    .wrapper-section-1 {
        padding-top: 275px;
        padding-bottom: 260px;
    }
    .wrapper-col-section {
        &.left {
            padding-left: calc(#{percentage(1/12)} + #{$gutter});
            margin-top: 90px;
        }
        &.right {
            padding-right: calc(#{percentage(1/12)} + #{$gutter});
        }
    }
}
</style>
