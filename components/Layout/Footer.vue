<template>
    <footer>
        <h1>Footer</h1>
    </footer>
</template>

<script>
import layoutData from '~/cms/data/layout-data.json';

export default {
    data: () => ({}),
    computed: {
        data() {
            return layoutData[this.$store.state.i18n.locale].footer;
        }
    },
    watch: {},
    mounted() {},
    beforeDestroy() {},
    methods: {}
};
</script>

<style lang="scss" scoped></style>
