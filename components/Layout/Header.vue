<template>
    <header class="header">
        <div class="header-inner container">
            <div class="wrapper-logo content-pad">
                <Logo />
            </div>
            <div class="wrapper-burger content-pad">
                <button class="burger" aria-label="Menu" :class="{ cross: showMenuMobile }" @click="toggleMenuMobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <transition name="menu" :duration="{ enter: 900, leave: 600 }">
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
        transform-origin: 100% 50%;
        transition: 0.6s cubic-bezier(0.76, 0, 0.24, 1);
        &:nth-child(2) {
            top: 50%;
        }
        &:nth-child(3) {
            top: auto;
            bottom: 0;
        }
    }
    &.cross {
        span {
            &:nth-child(1) {
                transform: rotate(-45deg) scaleX(1.15) scaleY(1.15);
                transition-delay: 0.15s;
            }
            &:nth-child(2) {
                transform: scaleX(0);
                opacity: 0;
            }
            &:nth-child(3) {
                transform: rotate(45deg) scaleX(1.15) scaleY(1.15);
                transition-delay: 0.15s;
            }
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
    z-index: -1;
    &::after {
        content: '';
        position: absolute;
        top: 120px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $dark;
        z-index: -1;
        transform-origin: 50% 0%;
    }
}

.menu-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 30px;
    overflow-y: auto;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: $neptune;
    }
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
    &::after {
        transform: scaleY(0);
    }
    .menu-item,
    .contact-link {
        opacity: 0;
        transform: translateY(-10px);
    }
    .menu-inner::after {
        opacity: 0;
    }
}

//Open anim
.menu-enter-active {
    &::after {
        transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
    }
    .menu-inner::after {
        transition: opacity 0.2s ease-in-out 0.4s;
    }
    .menu-item {
        &:nth-child(1) {
            transition: opacity 0.3s ease-in-out 0.4s, transform 0.3s ease-in-out 0.4s;
        }
        &:nth-child(2) {
            transition: opacity 0.3s ease-in-out 0.45s, transform 0.3s ease-in-out 0.45s;
        }
        &:nth-child(3) {
            transition: opacity 0.3s ease-in-out 0.5s, transform 0.3s ease-in-out 0.5s;
        }
    }
    .contact-link {
        transition: opacity 0.3s ease-in-out 0.6s, transform 0.3s ease-in-out 0.6s;
    }
}

//Close anim
.menu-leave-active {
    &::after {
        transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
    }
    .menu-inner::after {
        transition: opacity 0.2s ease-in-out 0.2s;
    }
    .menu-item {
        &:nth-child(1) {
            transition: opacity 0.2s ease-in-out 0.2s, transform 0.2s ease-in-out 0.2s;
        }
        &:nth-child(2) {
            transition: opacity 0.2s ease-in-out 0.15s, transform 0.2s ease-in-out 0.15s;
        }
        &:nth-child(3) {
            transition: opacity 0.2s ease-in-out 0.1s, transform 0.2s ease-in-out 0.1s;
        }
    }
    .contact-link {
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    }
}
</style>
