<template>
    <header class="header">
        <Logo />
        <button class="burger" aria-label="Menu" @click="toggleMenuMobile">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div v-show="showMenuMobile" class="menu">
            <div class="menu-items">
                <component
                    :is="menuItemMapping[menuItem._modelApiKey]"
                    v-for="menuItem in data.navigation"
                    :key="menuItem.id"
                    :data="menuItem"
                />
            </div>
        </div>
    </header>
</template>

<script>
import layoutData from '~/cms/data/layout-data.json';

import Submenu from '~/components/Layout/Menu/Submenu';
import MegaMenu from '~/components/Layout/Menu/MegaMenu';
import SingleMenuItem from '~/components/Layout/Menu/SingleMenuItem';

export default {
    components: {
        Submenu,
        MegaMenu,
        SingleMenuItem
    },
    data: () => ({
        showMenuMobile: false,
        menuItemMapping: {
            submenu_group: 'Submenu',
            mega: 'MegaMenu',
            single_link: 'SingleMenuItem'
        }
    }),
    computed: {
        data() {
            return layoutData[this.$store.state.i18n.locale].header;
        }
    },
    watch: {},
    mounted() {},
    beforeDestroy() {},
    methods: {
        toggleMenuMobile() {
            this.showMenuMobile = !this.showMenuMobile;
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    //TODO: put gutter variable here
    padding: 40px 20px;
    z-index: 10;
}
.burger {
    position: relative;
    border: 0;
    width: 30px;
    height: 26px;
    span {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 30px;
        height: 1px;
        background-color: $white;
        &:nth-child(2) {
            top: 50%;
        }
        &:nth-child(3) {
            top: auto;
            bottom: 0;
        }
    }
}
.menu {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100vh;
    padding-top: 120px;
    z-index: -1;
    background-color: $dark;
}
</style>
