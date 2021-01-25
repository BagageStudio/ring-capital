<template>
    <div class="vision-wrapper">
        <div class="wrapper-section-2 container">
            <div class="content-section-2">
                <div class="wrapper-col-section left">
                    <h3 v-if="data.section2LeftTitle" class="basic-h3 underlined">
                        <span>{{ data.section2LeftTitle }}</span>
                    </h3>
                    <p v-if="data.section2LeftSubtitle" class="basic-subtitle">{{ data.section2LeftSubtitle }}</p>
                </div>
                <SchemaVision />
                <div class="wrapper-col-section right">
                    <h3 v-if="data.section2RightTitle" class="basic-h3 underlined">
                        <span>{{ data.section2RightTitle }}</span>
                    </h3>
                    <p v-if="data.section2RightSubtitle" class="basic-subtitle">{{ data.section2RightSubtitle }}</p>
                </div>
                <div class="wrapper-btn-section">
                    <img v-if="data.ellipse" :src="data.ellipse.url" :alt="data.ellipse.alt" class="ellipse" />
                    <LinkTo v-if="data.centeredLink" class="section-2-btn btn-block" :link="data.centeredLink" />
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
.wrapper-section-2 {
    padding-top: 50px;
    padding-bottom: 60px;
}
.content-section-2 {
    padding: 0 $gutter;
}
.section-2-btn {
    margin-top: 20px;
    backface-visibility: hidden;
    transform: translateZ(0);
    will-change: transform;
    transform-style: preserve-3d;
}
.ellipse {
    display: none;
    backface-visibility: hidden;
    transform: translateZ(0);
    will-change: transform;
    transform-style: preserve-3d;
}
.vision-wrapper {
    overflow: hidden;
    position: relative;
    backface-visibility: hidden;
    transform: translateZ(0);
    will-change: transform;
    transform-style: preserve-3d;
}
.left .basic-h3 {
    color: $saturn;
}
.right .basic-h3 {
    color: $titan;
}
// .schema {
//     position: absolute;
//     top: 40%;
//     left: 50%;
//     max-width: 2000px;
//     width: calc(100vw + 400px);
//     transform: translate(-50%, -50%);
//     z-index: -1;
// }
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
    .content-section-2 {
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
    .wrapper-btn-section {
        backface-visibility: hidden;
        transform: translateZ(0);
        will-change: transform;
        transform-style: preserve-3d;
        padding: 0 $gutter;
    }
}
@media (min-width: $desktop) {
    .wrapper-section-2 {
        padding-top: 190px;
        padding-bottom: 190px;
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
            margin-top: -110px;
        }
        &.right {
            order: 3;
            padding-left: calc(#{percentage(1/12)} + #{$gutter});
            margin-top: 110px;
        }
    }
    .wrapper-btn-section {
        order: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: percentage(2/12);
    }
    .section-2-btn {
        margin: 0;
    }
    .ellipse {
        display: block;
        width: 100px;
        margin: 0 auto 35px;
    }
}

@media (min-width: $desktop-large) {
    .schema {
        max-width: 2200px;
    }
}

@media (min-width: $desktop-xxl) {
    .wrapper-section-2 {
        padding-top: 275px;
        padding-bottom: 260px;
    }
    .wrapper-col-section {
        &.left {
            padding-left: calc(#{percentage(1/12)} + #{$gutter});
        }
        &.right {
            margin-top: 90px;
            padding-right: calc(#{percentage(1/12)} + #{$gutter});
        }
    }
}
</style>
