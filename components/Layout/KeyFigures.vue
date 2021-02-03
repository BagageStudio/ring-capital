<template>
    <div v-if="content" class="key-figures" :style="{ '--borderColor': color }">
        <div v-for="keyFigure in content" :key="keyFigure.id" class="key-figure">
            <span class="key-figure-title">{{ keyFigure.title }}</span>
            <span class="key-figure-number">{{ keyFigure.number }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Array,
            required: true
        },
        color: {
            type: String,
            required: false,
            default: '#657da2'
        }
    }
};
</script>

<style lang="scss" scoped>
.key-figures {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    width: calc(100% + #{2 * $gutter});
    margin-left: -$gutter;
}
.key-figure {
    width: calc(50% - #{2 * $gutter});
    margin: 0 $gutter;
    padding: 30px 20px 10px;
    border-top: 1px solid var(--borderColor);
    background: $orbit;
    > span {
        display: block;
    }
}
.key-figure-title {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 17px;
    color: $neptune;
}
.key-figure-number {
    font-size: 3rem;
    line-height: 50px;
}

@media (min-width: $desktop-large) {
    .key-figures {
        width: calc(#{percentage(4/5)} + #{2 * $gutter});
    }
}
</style>
