<template>
    <div v-if="content.columns.length" class="three-columns-wrapper container">
        <h2 v-if="content.title" class="basic-h2 text-title content-pad">{{ content.title }}</h2>
        <h3 v-if="content.subtitle" class="basic-h3 text-subtitle content-pad">{{ content.subtitle }}</h3>
        <div class="three-columns">
            <div v-for="col in content.columns" :key="col.id" class="column content-pad">
                <FastImage v-if="col.icon" class="col-icon" :image="col.icon" contains />
                <FastImage v-if="col.image" class="col-image" :image="col.image" cover />
                <div v-if="col.title" class="col-title basic-h4">{{ col.title }}</div>
                <div v-if="col.text" class="col-text basic-subtitle wysiwyg" v-html="col.text"></div>
                <LinkTo
                    v-if="col.link && col.link.__typename === 'LinkRecord'"
                    class="col-cta btn-rounded"
                    :link="col.link"
                />
                <LinkToFile
                    v-else-if="col.link && col.link.__typename === 'LinkFileRecord'"
                    class="col-cta btn-rounded"
                    :link="col.link"
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
.three-columns-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.text-title,
.text-subtitle {
    margin-bottom: 4rem;
}

.three-columns {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-top: 5rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--gutter);
        right: var(--gutter);
        height: 1px;
        background-color: var(--txt);
    }
}

.col-icon {
    width: 100px;
    height: 100px;
    margin-bottom: 4rem;
}

.col-image {
    width: 100%;
    aspect-ratio: 360/400;
    border: 1px solid var(--txt);
    margin-bottom: 4rem;
}

.col-title {
    margin-bottom: 2rem;
}

.col-text {
    margin-bottom: 2rem;
}

.column {
    width: 100%;
    max-width: 600px;
    margin-bottom: 9rem;
    > *:last-child {
        margin-bottom: 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
}

@media (min-width: $desktop) {
    .three-columns-wrapper {
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
    }
    .column {
        width: 33.33%;
        max-width: none;
        margin-bottom: 0;
    }
    .col-image {
        aspect-ratio: 1;
    }
}
</style>
