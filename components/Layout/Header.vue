<template>
    <header class="header">
        <div class="header-inner container">
            <div class="wrapper-logo content-pad">
                <Logo />
            </div>
            <div class="wrapper-burger content-pad">
                <button class="burger" aria-label="Menu" @click="toggleMenuMobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <transition name="menu" :duration="2000">
                <div v-show="showMenuMobile" class="menu">
                    <div class="menu-inner">
                        <div class="menu-items">
                            <component
                                :is="menuItemMapping[menuItem._modelApiKey]"
                                v-for="menuItem in data.navigation"
                                :key="menuItem.id"
                                :data="menuItem"
                            />
                        </div>
                        <div class="contact-link">
                            <LinkTo class="btn-block" :link="data.contact" />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';

import layoutData from '~/cms/data/layout-data.json';

import Submenu from '~/components/Layout/Menu/Submenu';
import MegaMenu from '~/components/Layout/Menu/MegaMenu';
import SingleMenuItem from '~/components/Layout/Menu/SingleMenuItem';

if (process.client) gsap.registerPlugin(ScrollToPlugin);

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
        async toggleMenuMobile() {
            if (this.$store.state.scroll.scrollTop > 0) await gsap.to(window, { duration: 0.1, scrollTo: 0 });
            this.showMenuMobile = !this.showMenuMobile;
            if (this.showMenuMobile) {
                document.documentElement.classList.add('no-scroll');
            } else {
                document.documentElement.classList.remove('no-scroll');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    height: 120px;
    padding-top: 40px;
    padding-bottom: 40px;
    z-index: 10;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: $dark;
        z-index: 0;
    }
}
.wrapper-logo {
    position: relative;
    z-index: 1;
}
.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    padding-top: 120px;
    background-color: $dark;
    z-index: -1;
}

.menu-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 30px;
    border-top: 1px solid $neptune;
    overflow-y: auto;
}

.menu-items {
    flex-grow: 0;
}

.contact-link {
    padding: 40px 20px 0;
    a {
        display: block;
    }
}

.menu-enter,
.menu-leave-to {
    transform: translateY(-100%);
    .menu-items,
    .contact-link {
        opacity: 0;
        transform: translateY(-10px);
    }
}

//Open anim
.menu-enter-active {
    transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
    .menu-items {
        transition: opacity 0.3s ease-in-out 0.4s, transform 0.3s ease-in-out 0.4s;
    }
    .contact-link {
        transition: opacity 0.3s ease-in-out 0.6s, transform 0.3s ease-in-out 0.6s;
    }
}

//Close anim
.menu-leave-active {
    transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0.15s;
    .menu-items {
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    .contact-link {
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
}
</style>
