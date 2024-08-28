<template>
    <div class="external-content-wrapper container" :class="{ reversed: content.reverse }">
        <!-- <div v-if="content.title || content.text" class="external-content-header content-pad"> -->
        <div class="external-content-header content-pad">
            <h2 v-if="content.title" class="basic-h3 text-title">{{ content.title }}</h2>
            <div v-if="content.text" class="basic-subtitle text-text wysiwyg" v-html="content.text"></div>
        </div>
        <div class="contents">
            <LayoutContentCard v-for="media in content.contents" :key="media.id" :content="media" />
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
.external-content-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.external-content-header {
    position: relative;
    margin-bottom: 4rem;
    padding-top: 6rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--gutter);
        right: var(--gutter);
        height: 1px;
        background-color: var(--txt);
    }
    .text-title + .text-text {
        margin-top: 2rem;
    }
}

.contents {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.content-card {
    width: 100%;
}

@media (min-width: $tablet) {
    .content-card {
        width: 50%;
    }
}

@media (min-width: $desktop) {
    .external-content-wrapper {
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
    }
    .external-content-header {
        margin-bottom: 6rem;
    }
    .content-card {
        width: 33.33%;
    }
}
</style>
