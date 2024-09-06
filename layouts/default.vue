<template>
    <div class="main">
        <LayoutNavigation :class="{ 'white-color': isHome }" />
        <Nuxt />
        <LayoutFooter />
        <Svgs />
        <LayoutGrid v-if="$config.isDevEnv" />
        <LayoutOverlay class="layout-overlay" />
    </div>
</template>

<script>
import { spotFF } from '@stereorepo/sac';

export default {
    computed: {
        isHome() {
            return this.$route.path === '/';
        }
    },
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
