<template>
    <div class="big-text-wrapper container">
        <div class="big-text">
            <h2 v-if="content.title" class="basic-h2 big-title content-pad">{{ content.title }}</h2>
            <div class="text-wrapper content-pad">
                <div v-if="content.subtitle" class="basic-h3 text-subtitle">{{ content.subtitle }}</div>
                <div v-if="content.text" class="basic-subtitle text-text wysiwyg" v-html="content.text"></div>
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
.big-text-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.big-text {
    position: relative;
    padding-top: 4rem;
    padding-bottom: 4rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--gutter);
        right: var(--gutter);
        height: 1px;
        background-color: var(--txt);
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: var(--gutter);
        right: var(--gutter);
        height: 1px;
        background-color: var(--txt);
    }
}

.big-title {
    margin-bottom: 6rem;
    line-height: 6rem;
}

.text-subtitle {
    line-height: 4.2rem;
}

.text-subtitle + .text-text {
    margin-top: 2rem;
}

@media (min-width: $desktop) {
    .big-text-wrapper {
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
    }
    .big-text {
        display: flex;
    }
    .big-title {
        width: 50%;
        flex-shrink: 0;
        margin-bottom: 0;
    }
    .text-wrapper {
        width: 50%;
        flex-shrink: 0;
    }
}

@media (min-width: $desktop-xxl) {
    .big-title {
        width: 33.33%;
        margin-left: auto;
    }
    .text-wrapper {
        margin-right: auto;
    }
}
</style>
