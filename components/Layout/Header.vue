<template>
    <header
        id="header"
        class="header"
        :class="{
            fixed: scrolledUp,
            'before-back': transitionQuitScrolledUp,
            'on-top-before-back': transitionQuitScrolledUpOnTop
        }"
    >
        <div class="header-inner container">
            <div class="wrapper-logo content-pad">
                <nuxt-link to="/">
                    <span class="visually-hidden">Ring Capital</span>
                    <Logo class="header-logo" />
                </nuxt-link>
            </div>
            <div v-show="isMobile" class="wrapper-burger content-pad">
                <button class="burger" aria-label="Menu" :class="{ cross: showMenuMobile }" @click="toggleMenuMobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <transition
                name="menu"
                :duration="{ enter: shouldIAnimateMenu ? 900 : 0, leave: shouldIAnimateMenu ? 600 : 0 }"
            >
                <div v-show="showMenuMobile || ww > $breakpoints.list.l" ref="menu" class="menu notransi">
                    <div class="menu-inner">
                        <div class="menu-items">
                            <component
                                :is="menuItemMapping[menuItem._modelApiKey]"
                                v-for="(menuItem, index) in data.navigation"
                                :key="menuItem.id"
                                :data="menuItem"
                                :class="menuCSSClasses[index]"
                            />
                        </div>
                        <div class="contact-link notransi">
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
import { requestTimeout, clearRequestTimeout } from '@stereorepo/sac';

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
        },
        scrolledUp: false,
        transitionQuitScrolledUp: false,
        transitionQuitScrolledUpOnTop: false,
        timeoutScrolledUp: null,
        menuCSSClasses: ['our-funds-portfolio', 'about-us', 'news-ressources']
    }),
    computed: {
        scrollDirection() {
            return this.$store.state.scroll.scrollDirection;
        },
        scrollTop() {
            return this.$store.state.scroll.scrollTop;
        },
        isMobile() {
            return this.ww <= this.$breakpoints.list.l;
        },
        shouldIAnimateMenu() {
            return this.$store.state.superWindow ? this.isMobile && !this.$store.state.superWindow.resizing : true;
        },
        data() {
            return layoutData[this.$store.state.i18n.locale].header;
        },
        ww() {
            return this.$store.state.superWindow ? this.$store.state.superWindow.width : 320;
        }
    },
    watch: {
        $route() {
            if (this.isMobile && this.showMenuMobile) {
                this.toggleMenuMobile();
            }
        },
        scrollTop(st) {
            if (st === 0 && this.scrollDirection === -1) {
                this.transitionQuitScrolledUpOnTop = true;
                this.timeoutScrolledUp = requestTimeout(() => {
                    this.scrolledUp = false;
                    this.transitionQuitScrolledUpOnTop = false;
                }, 200);
            }
        },
        scrollDirection(dir, oldDir) {
            if (this.isMobile || this.scrollTop === 0 || dir + oldDir !== 0) return;
            this.transitionQuitScrolledUp = false;
            this.transitionQuitScrolledUpOnTop = false;
            if (this.timeoutScrolledUp) clearRequestTimeout(this.timeoutScrolledUp);

            if (dir === -1) {
                this.scrolledUp = true;
            } else {
                this.transitionQuitScrolledUp = true;
                this.timeoutScrolledUp = requestTimeout(() => {
                    this.scrolledUp = false;
                    this.transitionQuitScrolledUp = false;
                }, 200);
            }
        }
    },
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
        background-color: var(--bg);
        z-index: 0;
    }
}
.wrapper-logo {
    position: relative;
    z-index: 1;
}

.header-logo {
    width: 159px;
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
        background-color: var(--secondary);
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
        background-color: var(--bg);
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

@media (max-width: $desktop-small) {
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
}

@media (min-width: $desktop-small) {
    .header {
        &.fixed {
            position: fixed;
            animation: scrollUpMenu 0.4s ease-out;
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.04), -10px -2px 25px rgba(0, 0, 0, 0.02);
                animation: scrollUpShadow 0.4s ease-out;
                z-index: -1;
            }
            &.before-back {
                animation: scrollDownMenu 0.2s ease-out;
                &::after {
                    animation: scrollDownShadow 0.2s ease-out;
                }
            }
            &.on-top-before-back {
                &::after {
                    animation: scrollDownShadow 0.2s ease-out;
                }
            }
        }
    }
    @keyframes scrollUpMenu {
        0% {
            transform: translateY(-120px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    @keyframes scrollUpShadow {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes scrollDownMenu {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-120px);
        }
    }
    @keyframes scrollDownShadow {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .menu {
        position: static;
        width: 80%;
        padding-top: 0;
        z-index: 0;
        padding: 0 10px;
    }
    .menu-inner {
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 0;
        overflow-y: visible;
        &::after {
            content: none;
        }
    }
    .menu-items {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 78%;
    }
    .contact-link {
        padding: 0;
    }
}
@media (min-width: $desktop-large) {
    .menu {
        width: percentage(9/12);
        padding: 0;
    }
    .menu-items {
        width: percentage(6/9);
        padding: 0 10px;
    }
    .contact-link {
        margin-right: 10px;
    }
}
</style>
