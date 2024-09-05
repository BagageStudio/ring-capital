<template>
    <div class="mosaic-wrapper container" :class="{ reversed: content.reverse }">
        <div class="content-pad image-wrapper">
            <FastImage v-for="image in content.images" :key="image.url" class="image" :image="image" cover />
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
.mosaic-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}
.image-wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    margin-bottom: 3rem;
}

.image {
    width: 100%;
    border: 1px solid var(--txt);
    &:nth-child(1) {
        grid-column: 1;
        grid-row: 1 / 3;
        aspect-ratio: 173/273;
    }
    &:nth-child(2) {
        grid-column: 2;
        grid-row: 1;
        aspect-ratio: 173/131;
    }
    &:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
        aspect-ratio: 173/131;
    }
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
    .mosaic-wrapper {
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
        gap: 2rem;
        margin-left: auto;
        margin-bottom: 0;
    }
    .image {
        &:nth-child(1) {
            aspect-ratio: 305/480;
        }
        &:nth-child(2) {
            aspect-ratio: 305/230;
        }
        &:nth-child(3) {
            aspect-ratio: 305/230;
        }
    }

    .text-wrapper {
        width: 41.66%;
        margin-right: auto;
    }
}
</style>
