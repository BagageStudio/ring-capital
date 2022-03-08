<template>
    <div class="vision-wrapper">
        <div class="wrapper-double-orbit container">
            <div class="content-double-orbit">
                <div class="wrapper-col-section left">
                    <h3 class="basic-h3 underlined">
                        <span>{{ content.leftOrbitTitle }}</span>
                    </h3>
                    <div class="basic-subtitle neptune" v-html="content.leftOrbitContent"></div>
                </div>
                <SchemaVision />
                <div class="wrapper-col-section right">
                    <h3 class="basic-h3 underlined">
                        <span>{{ content.rightOrbitTitle }}</span>
                    </h3>
                    <div class="basic-subtitle neptune" v-html="content.rightOrbitContent"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="text-under content-pad basic-subtitle" v-html="content.textUnder" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
};
</script>
<style lang="scss" scoped>
.vision-wrapper {
    position: relative;
    padding-top: 50px;
    padding-bottom: 60px;
    backface-visibility: hidden;
    transform: translateZ(0);
    will-change: transform;
    transform-style: preserve-3d;
    z-index: -1;
}
.wrapper-double-orbit {
    position: relative;
}
.content-double-orbit {
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

.text-under {
    margin-top: 40px;
}

@media (min-width: $tablet) {
    .schema {
        position: relative;
        margin-top: -100px;
        margin-bottom: -100px;
        z-index: -1;
    }
    .content-double-orbit {
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
@media (min-width: $desktop-small) {
    .basic-h3 {
        margin-bottom: 30px;
    }
}
@media (min-width: $desktop) {
    .wrapper-double-orbit {
        padding-top: 120px;
        padding-bottom: 120px;
    }
    .content-double-orbit {
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
            margin-top: -140px;
            margin-left: 0;
        }
        &.right {
            order: 3;
            padding-left: calc(#{percentage(1/12)} + #{$gutter});
            margin-top: 140px;
        }
    }
    .basic-subtitle {
        font-size: 2rem;
    }
    .text-under {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }
}

@media (min-width: $desktop-large) {
    .schema {
        max-width: 2200px;
    }
    .basic-subtitle {
        font-size: 2.2rem;
    }
}

@media (min-width: $desktop-xxl) {
    .wrapper-double-orbit {
        padding-top: 185px;
        padding-bottom: 150px;
    }
    .wrapper-col-section {
        &.left {
            padding-left: calc(#{percentage(1/12)} + #{$gutter});
            margin-top: -190px;
        }
        &.right {
            margin-top: 140px;
            padding-right: calc(#{percentage(1/12)} + #{$gutter});
        }
    }
}
</style>
