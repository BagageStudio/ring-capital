<template>
    <div v-if="data" class="wrapper-contact">
        <div v-if="data.image && isXL" class="wrapper-image">
            <div class="container">
                <div class="content-image">
                    <FastImage class="img" :image="data.image" cover />
                </div>
            </div>
        </div>
        <div class="container">
            <div class="content-contact">
                <h1 class="basic-h1 contact-title underlined strong-saturn" v-html="data.title"></h1>
                <div class="contact-group">
                    <div v-if="data.mailTitle && data.mail" class="contact-single">
                        <div class="single-title">
                            {{ data.mailTitle }}
                        </div>
                        <div class="single-content">
                            <a :href="'mailto:' + data.mail" class="contact-link-single">{{ data.mail }}</a>
                        </div>
                    </div>
                    <div v-if="data.socialTitle && data.social" class="contact-single">
                        <div class="single-title">
                            {{ data.socialTitle }}
                        </div>
                        <div class="single-content">
                            <LayoutSocial class="contact-social white" :content="data.social" />
                        </div>
                    </div>
                    <div v-if="data.locationTitle && data.location && data.locationLink" class="contact-single">
                        <div class="single-title">
                            {{ data.locationTitle }}
                        </div>
                        <div class="single-content">
                            <a :href="data.locationLink" class="contact-link-single">{{ data.location }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    computed: {
        isXL() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.xl;
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-contact {
    padding: 10px 0 0;
}
.content-contact {
    padding: 0 $gutter;
}
.contact-group {
    margin: 20px 0 0;
}
.contact-single {
    position: relative;
    padding: 30px 0;
    &::before,
    &::after {
        position: absolute;
        left: 0;
        right: 0;
    }
    &::before {
        content: none;
        top: 0;
        border-bottom: 1px solid $neptune;
    }
    &::after {
        content: '';
        bottom: 0;
        border-top: 1px solid $neptune;
    }
    &:first-child {
        &::before {
            content: '';
        }
    }
}
.single-title {
    font-family: $space;
    margin: 0 0 10px;
    color: $saturn;
}
.contact-link-single {
    font-size: 2.6rem;
    line-height: 30px;
    text-decoration: none;
    color: $white;
    transition: color 0.2s ease-out;
    &:hover {
        color: $saturn;
    }
}
.contact-social {
    position: relative;
    top: 3px;
    margin-top: -10px;
}

@media (min-width: $tablet) {
    .wrapper-contact {
        padding-top: 50px;
    }
    .content-contact {
        padding: 0;
    }
    .contact-title {
        padding: 0 $gutter;
    }
    .contact-group {
        padding: 0;
    }
    .contact-single {
        display: flex;
        align-items: baseline;
        &::before,
        &::after {
            left: $gutter;
            right: $gutter;
        }
    }
    .single-title {
        width: math.percentage(math.div(2, 8));
        margin: 0;
        padding: 0 $gutter;
    }
    .single-content {
        width: math.percentage(math.div(6, 8));
        padding: 0 $gutter;
    }
}
@media (min-width: $desktop) {
    .wrapper-contact {
        padding-top: 75px;
        .container {
            position: relative;
        }
    }
    .content-contact {
        padding: 0 0 0 #{math.percentage(math.div(5, 12))};
    }
    .contact-group {
        margin-top: 100px;
    }
    .single-title {
        width: math.percentage(math.div(2, 7));
    }
    .single-content {
        width: math.percentage(math.div(5, 7));
    }
    .wrapper-image {
        position: absolute;
        top: 75px;
        right: 0;
        bottom: 0;
        left: 0;
        .container {
            height: 100%;
        }
    }
    .content-image {
        width: calc(#{math.percentage(math.div(4, 12))} + #{$grid-gutter-l - $gutter});
        height: 100%;
        margin-left: -#{$grid-gutter-l};
        .img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
