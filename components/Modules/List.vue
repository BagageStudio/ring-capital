<template>
    <div class="list-wrapper">
        <FastImage v-if="content.backgroundImage" class="bg-img" :image="content.backgroundImage" contains />
        <div class="container">
            <div v-if="content.title" class="content-pad title-wrapper">
                <h2 v-if="content.title" class="basic-h2 text-title">{{ content.title }}</h2>
                <h3 v-if="content.subtitle" class="basic-h3 text-subtitle">{{ content.subtitle }}</h3>
            </div>
            <div class="items content-pad">
                <div v-for="item in content.items" :key="item.id" class="item">
                    <div v-if="item.title" class="basic-h4 item-title">{{ item.title }}</div>
                    <div v-if="item.text" class="basic-subtitle item-text wysiwyg" v-html="item.text"></div>
                </div>
            </div>
            <div v-if="content.link" class="content-pad wrapper-cta">
                <LinkTo v-if="content.link.__typename === 'LinkRecord'" class="btn-rounded" :link="content.link" />
                <LinkToFile
                    v-else-if="content.link.__typename === 'LinkFileRecord'"
                    class="btn-rounded"
                    :link="content.link"
                />
            </div>
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
.list-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.bg-img {
    display: none;
}

.title-wrapper {
    margin-bottom: 4rem;
    .text-title,
    .text-subtitle {
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }
}

.item {
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-top: 1px solid var(--txt);
    &:last-child {
        border-bottom: 1px solid var(--txt);
    }
}

.item-title + .item-text {
    margin-top: 1rem;
}

.wrapper-cta {
    margin-top: 4rem;
}

@media (min-width: $desktop) {
    .list-wrapper {
        position: relative;
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
    }
    .bg-img {
        position: absolute;
        top: -100px;
        right: 0;
        bottom: -100px;
        display: block;
        width: 70%;
        max-width: 500px;
        z-index: -1;
        ::v-deep .image {
            object-position: 100% 0%;
        }
    }
}
</style>
