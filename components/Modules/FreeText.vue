<template>
    <div class="free-text-wrapper">
        <FastImage v-if="content.backgroundImage" class="bg-img" :image="content.backgroundImage" contains />
        <div class="free-text container content-pad">
            <h2 v-if="content.title" class="basic-h1 free-title">{{ content.title }}</h2>
            <div class="wysiwyg basic-subtitle" v-html="content.text"></div>
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
.free-text-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.free-title {
    padding-bottom: 4rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid var(--txt);
}

.bg-img {
    display: none;
}

@media (min-width: $desktop) {
    .free-text-wrapper {
        position: relative;
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
    }
    .free-title {
        width: 83.33%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 6rem;
    }
    .bg-img {
        position: absolute;
        top: -20rem;
        right: 0;
        bottom: -10rem;
        display: block;
        width: 70%;
        max-width: 50rem;
        z-index: -1;
        ::v-deep .image {
            object-position: 100% 0%;
        }
    }
    .wysiwyg {
        width: 83.33%;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
