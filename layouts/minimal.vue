<template>
    <div class="main">
        <LayoutHeader />
        <div class="wrapper-content-footer">
            <Nuxt />
            <LayoutFooterMinimal />
        </div>
        <Svgs />
        <LayoutGrid v-if="$config.isDevEnv" />
        <LayoutOverlay class="layout-overlay" />
    </div>
</template>

<script>
import { spotFF } from '@stereorepo/sac';

export default {
    beforeMount() {
        spotFF();
    },
    mounted() {
        // Init superWindow
        this.$stereorepo.superWindow.initializeWindow(this.$store);

        // Init superScroll
        this.$stereorepo.superScroll.initializeScroll().then(firstScrollTop => {
            this.$store.commit('scroll/setFirstScrollTop', firstScrollTop);
        });
        this.$stereorepo.superScroll.on('scroll', scrollTop => {
            this.$store.commit('scroll/setScrollTop', scrollTop);
        });
    },
    beforeDestroy() {
        // NOTE: Avoiding memory leaks
        this.$stereorepo.superWindow.destroyWindow(this.$store);
        this.$stereorepo.superScroll.destroyScroll();
    }
};
</script>
<style lang="scss" scoped>
.wrapper-content-footer {
    position: relative;
    min-height: calc(100vh - #{$header-height});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
