<template>
    <div class="wrapper-video">
        <div class="container">
            <div class="content-pad container-video">
                <div class="video">
                    <iframe
                        class="embed-video"
                        width="1440"
                        height="762"
                        :src="`https://www.youtube.com/embed/${content.videoUrl.providerUid}?modestbranding=1&rel=0&showinfo=0`"
                        frameborder="0"
                        allow="encrypted-media"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>

            <div class="text content-pad">
                <h3 class="basic-h3 underlined strong-neptune" v-html="content.title"></h3>
                <div v-if="content.text" class="neptune" v-html="content.text"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-video {
    background-color: $white;
    color: $orbit;
    padding: 80px 0;
}

.container-video {
    width: 100%;
}

.video {
    width: 100%;
    position: relative;
    &::after {
        content: '';
        display: block;
        padding-bottom: 56.25%;
    }
}

.embed-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.text {
    margin-top: 50px;
}

@media (min-width: $desktop-small) {
    .container {
        display: flex;
        align-items: center;
    }
    .container-video,
    .text {
        width: 50%;
    }

    .container-video {
        padding-left: 0;
        padding-right: 0;
    }

    .text {
        margin-top: 0;
    }
    .wrapper-video {
        padding: 140px 0;
    }
}

@media (min-width: $desktop) {
    .container {
        justify-content: space-between;
    }
    .text {
        width: math.percentage(math.div(5, 12));
    }
}

@media (min-width: $desktop-xxl) {
    .text {
        width: math.percentage(math.div(4, 12));
        margin-right: auto;
    }
    .container-video {
        width: math.percentage(math.div(5, 12));
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
