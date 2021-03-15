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
                <SchemaVision />
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
    position: relative;
    backface-visibility: hidden;
    transform: translateZ(0);
    will-change: transform;
    transform-style: preserve-3d;
    z-index: -1;
}
.wrapper-section-1 {
    padding-top: 50px;
    padding-bottom: 60px;
}
.content-section-1 {
    padding: 0 $gutter;
}

.schema {
    width: calc(100vw + 200px);
    margin-left: -140px;
    backface-visibility: hidden;
    transform: translateZ(0);
    will-change: transform;
    transform-style: preserve-3d;
}

@media (min-width: $tablet) {
    .schema {
        position: relative;
        margin-top: -100px;
        margin-bottom: -100px;
        z-index: -1;
    }
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
            margin-left: auto;
            .basic-subtitle {
                margin-bottom: 0;
            }
        }
    }
}
@media (min-width: $desktop) {
    .wrapper-section-1 {
        padding-top: 190px;
        padding-bottom: 190px;
    }
    .content-section-1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
    }
    .schema {
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: 2500px;
        width: calc(100vw + 700px);
        margin-left: 0;
        margin-top: 0;
        margin-bottom: 0;
        transform: translate(-50%, -50%);
    }
    .wrapper-col-section {
        width: percentage(5/12);
        &.left {
            order: 1;
            padding-right: calc(#{percentage(1/12)} + #{$gutter});
            margin-top: -110px;
            margin-left: 0;
        }
        &.right {
            order: 3;
            padding-left: calc(#{percentage(1/12)} + #{$gutter});
            margin-top: 110px;
        }
    }
}

@media (min-width: $desktop-large) {
    .schema {
        max-width: 2200px;
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
            margin-top: -190px;
        }
        &.right {
            margin-top: 90px;
            padding-right: calc(#{percentage(1/12)} + #{$gutter});
        }
    }
}
</style>
