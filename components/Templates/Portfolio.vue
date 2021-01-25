<template>
    <div v-if="data" class="wrapper-portfolio">
        <div class="container">
            <h1>Portfolio</h1>
        </div>
        <Table :content="data" />
        <Mosaic :content="data.mosaic" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    computed: {},
    head() {
        return {
            htmlAttrs: {
                class: 'lightmode'
            }
        };
    }
};
</script>

<style lang="scss" scoped></style>
