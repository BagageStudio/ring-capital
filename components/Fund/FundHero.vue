<template>
    <div class="fund-hero" :style="{ '--fundColor': data.color.hex }">
        <div class="container">
            <h1 class="basic-h1 content-pad" v-html="$options.filters.nestedTitle(data.title)"></h1>
            <p>{{ data.fullDescription }}</p>
            <KeyFigures :content="data.keyFigures" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
};
</script>
<style lang="scss" scoped>
.basic-h1 {
    /deep/ strong {
        color: var(--fundColor);
    }
}
</style>
