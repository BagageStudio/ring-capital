<template>
    <div v-if="list" class="text-logos" :class="{ 'white-mode': whiteMode }">
        <div class="container">
            <div class="wrapper-txt">
                <h2 v-if="bigTitle" class="basic-h2 text-logos-title underlined saturn" v-html="bigTitle"></h2>
                <h4 v-if="smallTitle" class="basic-h4 text-logos-small-title" v-html="smallTitle"></h4>
                <p v-if="subtitle" class="basic-subtitle">{{ subtitle }}</p>
                <div v-if="text" class="text-logos-text" v-html="text"></div>
                <LinkTo v-if="link" class="btn-block primary text-logos-btn" :link="link" />
            </div>
            <div class="wrapper-list">
                <LogosList :content="list" class="large-grid" :has-link="false" :class="{ 'white-mode': whiteMode }" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        bigTitle: { type: String, default: '' },
        smallTitle: { type: String, default: '' },
        subtitle: { type: String, default: '' },
        text: { type: String, default: '' },
        list: {
            type: Array,
            required: true
        },
        link: {
            type: Object,
            default() {
                return {};
            }
        },
        whiteMode: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.text-logos {
    padding: 70px 0;
    color: $white;
    background: $dark;
    &.white-mode {
        color: $orbit;
        background: $white;
        .text-logos-text {
            color: $neptune;
        }
    }
}
.wrapper-txt {
    padding: 0 $gutter;
}
.text-logos-title {
    margin-bottom: 40px;
}
.text-logos-small-title {
    margin-bottom: 30px;
}
.text-logos-btn {
    margin-top: 20px;
}
.wrapper-list {
    margin-top: 55px;
}

@media (min-width: $desktop-small) {
    .text-logos {
        .container {
            display: flex;
            align-items: center;
        }
    }
    .wrapper-txt {
        width: percentage(3/8);
    }
    .wrapper-list {
        width: percentage(5/8);
        margin: 0;
    }
}
@media (min-width: $desktop) {
    .text-logos {
        padding: 140px 0 155px;
    }
    .wrapper-txt {
        width: percentage(6/12);
        padding-right: calc(#{percentage(1/12)} + #{$gutter});
    }
    .wrapper-list {
        width: percentage(6/12);
    }
}
@media (min-width: $desktop-xxl) {
    .wrapper-txt {
        width: percentage(5/12);
        padding: 0 calc(#{percentage(1/12)} + #{$gutter});
    }
    .wrapper-list {
        width: percentage(7/12);
        padding-right: percentage(1/12);
    }
}
</style>
