<template>
    <div class="wrapper-section-2 container">
        <HomeSchemaVisionMasked />
        <div class="content-section-2">
            <div class="wrapper-col-section left">
                <h3 v-if="data.section2LeftTitle" class="basic-h3">{{ data.section2LeftTitle }}</h3>
                <p v-if="data.section2LeftSubtitle" class="basic-subtitle">{{ data.section2LeftSubtitle }}</p>
            </div>
            <div class="wrapper-col-section right">
                <h3 v-if="data.section2RightTitle" class="basic-h3">{{ data.section2RightTitle }}</h3>
                <p v-if="data.section2RightSubtitle" class="basic-subtitle">{{ data.section2RightSubtitle }}</p>
            </div>
            <div class="wrapper-btn-section">
                <img v-if="data.ellipse" :src="data.ellipse.url" :alt="data.ellipse.alt" class="ellipse" />
                <LinkTo v-if="data.centeredLink" class="section-2-btn btn-block" :link="data.centeredLink" />
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
    position: relative;
    padding-top: 50px;
    padding-bottom: 60px;
}
.content-section-2 {
    padding: 0 $gutter;
}
.section-2-btn {
    margin-top: 20px;
}
.ellipse {
    display: none;
}
.schema {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2000px;
    transform: translateX(-50%);
    z-index: -1;
}
@media (min-width: $tablet) {
    .content-section-2 {
        display: flex;
        align-items: center;
        padding: 0;
    }
    .wrapper-col-section {
        width: percentage(3/8);
        padding: 0 $gutter;
        &.left {
            order: 1;
        }
        &.right {
            order: 3;
        }
    }
    .wrapper-btn-section {
        order: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: percentage(2/8);
        padding: 0 $gutter;
    }
    .section-2-btn {
        margin: 0;
    }
}
@media (min-width: $desktop-small) {
    .wrapper-col-section {
        width: percentage(5/12);
        &.left {
            padding-right: calc(#{percentage(1/12)} + #{$gutter});
        }
        &.right {
            padding-left: calc(#{percentage(1/12)} + #{$gutter});
        }
    }
    .wrapper-btn-section {
        width: percentage(2/12);
    }
    .ellipse {
        display: block;
        width: 100px;
        margin: 0 auto 35px;
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
