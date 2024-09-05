<template>
    <div class="image-text-wrapper container" :class="{ reversed: content.reverse }">
        <div class="content-pad image-wrapper">
            <div v-if="content.video" class="video">
                <iframe
                    class="embed-video"
                    width="1440"
                    height="762"
                    :src="`https://www.youtube.com/embed/${content.video.providerUid}?modestbranding=1&rel=0&showinfo=0`"
                    frameborder="0"
                    allow="encrypted-media"
                    allowfullscreen
                ></iframe>
            </div>
            <FastImage v-else-if="content.image" class="image" :image="content.image" cover />
        </div>
        <div class="text-wrapper content-pad">
            <h2 v-if="content.title" class="basic-h2 text-title">{{ content.title }}</h2>
            <h3 v-if="content.subtitle" class="basic-h3 text-subtitle">{{ content.subtitle }}</h3>
            <div v-if="content.text" class="basic-subtitle text-text wysiwyg" v-html="content.text"></div>
            <LinkTo
                v-if="content.link && content.link.__typename === 'LinkRecord'"
                class="btn-rounded"
                :link="content.link"
            />
            <LinkToFile
                v-else-if="content.link && content.link.__typename === 'LinkFileRecord'"
                class="btn-rounded"
                :link="content.link"
            />
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
.image-text-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}
.image-wrapper {
    width: 100%;
    margin-bottom: 3rem;
}
.image {
    width: 100%;
    aspect-ratio: 360/420;
    border: 1px solid var(--txt);
}

.video {
    width: 100%;
    position: relative;
    aspect-ratio: 16/9;
}

.embed-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.text-wrapper {
    width: 100%;
}

.text-title,
.text-subtitle,
.text-text {
    margin-bottom: 4rem;
}
.text-wrapper {
    > *:last-child {
        margin-bottom: 0;
    }
}

@media (min-width: $desktop) {
    .image-text-wrapper {
        display: flex;
        align-items: center;
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
        &.reversed {
            flex-direction: row-reverse;
            .image-wrapper {
                margin-left: 0;
                margin-right: auto;
            }
            .text-wrapper {
                margin-right: 0;
                margin-left: auto;
            }
        }
    }
    .image-wrapper {
        width: 41.66%;
        margin-left: auto;
        margin-bottom: 0;
    }
    .image {
        aspect-ratio: 515/600;
    }

    .text-wrapper {
        width: 41.66%;
        margin-right: auto;
    }
}
</style>
