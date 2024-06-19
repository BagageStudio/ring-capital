<template>
    <ul v-if="content" class="tags">
        <li v-for="(tag, index) in tags" :key="index" class="tag">
            {{ tag }}
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        content: {
            type: String,
            required: true
        }
    },
    data: () => ({
        tags: []
    }),
    mounted() {
        this.tags = this.content.split(',');
    }
};
</script>

<style lang="scss" scoped>
.tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0 0;
    padding: 0;
    &.inverted {
        .tag {
            border: 1px solid rgba($neptune, 0.4);
            color: $white;
            background: transparent;
        }
    }
}
.tag {
    font-family: var(--roboto);
    font-size: 1.6rem;
    line-height: 24px;
    margin: 10px 10px 0 0;
    padding: 3px 10px;
    color: $orbit;
    background: #e9eef5;
    &:last-child {
        margin-right: 0;
    }
}
</style>
