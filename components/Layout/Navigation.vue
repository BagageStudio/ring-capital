<template>
    <header class="header">
        <div class="container header-container" :class="{ scrolled: headerScrolled }">
            <div class="header-inner content-pad">
                <Logo class="header-logo" />
                <div v-if="data.quickMenu.length" class="quick-menu">
                    <LinkTo
                        v-for="quickLink in data.quickMenu"
                        :key="quickLink.id"
                        class="quick-link"
                        :link="quickLink"
                    />
                </div>
                <div class="burgers" :class="{ close: showMenu }">
                    <button class="burger" type="button" @click="toggleMenu">Menu</button>
                    <button class="burger-close" type="button" @click="toggleMenu">Close</button>
                </div>
            </div>
        </div>
        <div class="menu container" :class="{ show: showMenu }">
            <div class="menu-inner">
                <div
                    v-for="(item, index) in data.menu"
                    :key="item.title"
                    class="menu-item content-pad"
                    :class="{ open: itemsState[index] && item.links.length > 1 }"
                >
                    <LinkTo v-if="item.links.length === 1" class="menu-item-label" :link="item.links[0]" hide-label>{{
                        item.title
                    }}</LinkTo>
                    <div v-else class="submenu" @mouseenter="openSubmenu(index)" @mouseleave="closeSubmenu(index)">
                        <button class="menu-item-label">
                            {{ item.title }}
                        </button>
                        <div class="submenu-items">
                            <LinkTo
                                v-for="submenuItem in item.links"
                                :key="submenuItem.id"
                                class="submenu-item"
                                :link="submenuItem"
                            />
                        </div>
                    </div>
                </div>
                <div v-if="data.socials.length" class="socials content-pad">
                    <LinkTo
                        v-for="social in data.socials"
                        :key="social.link.id"
                        class="social"
                        :link="social.link"
                        hide-label
                    >
                        <FastImage :image="social.image" />
                    </LinkTo>
                </div>
            </div>
            <img src="/img/header-ring.png" class="bg-img" />
        </div>
        <div v-if="showMenu" class="menu-overlay" @click="toggleMenu"></div>
    </header>
</template>

<script>
import layoutData from '~/cms/data/layout-data.json';

export default {
    data: () => ({
        showMenu: false,
        scrollOffset: 0,
        itemsState: []
    }),
    computed: {
        data() {
            return layoutData[this.$store.state.i18n.locale].navigation;
        },
        isMobile() {
            return this.ww <= this.$breakpoints.list.xl;
        },
        ww() {
            return this.$store.state.superWindow ? this.$store.state.superWindow.width : 320;
        },
        scrollTop() {
            return this.$store.state.scroll.scrollTop;
        },
        headerScrolled() {
            return this.scrollTop > 300;
        }
    },
    watch: {
        $route(r) {
            if (this.showMenu) this.toggleMenu();
        },
        isMobile() {
            this.headerFixed = false;
            this.headerVisible = false;
            this.showMenu = false;
            document.documentElement.classList.remove('no-scroll');
            window.scrollTo(0, this.scrollOffset);
        }
    },
    mounted() {
        this.itemsState = this.data.menu.map(i => {
            return this.isMobile;
        });
    },
    methods: {
        toggleSubmenu(index) {
            if (this.isMobile) return;
            this.$set(this.itemsState, index, !this.itemsState[index]);
        },
        openSubmenu(index) {
            if (this.isMobile) return;
            this.$set(this.itemsState, index, true);
        },
        closeSubmenu(index) {
            if (this.isMobile) return;
            this.$set(this.itemsState, index, false);
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
            if (!this.isMobile) return;
            if (this.showMenu) {
                this.scrollOffset = this.$store.state.scroll.scrollTop;
                document.documentElement.classList.add('no-scroll');
                document.documentElement.style.setProperty('--scroll-top', this.scrollOffset * -1 + 'px');
            } else {
                document.documentElement.classList.remove('no-scroll');
                window.scrollTo(0, this.scrollOffset);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 30px 0;
    background-color: var(--bg);
    box-shadow: 0px 84px 80px 0px rgba(31, 31, 31, 0.05), 0px 19px 18px 0px rgba(31, 31, 31, 0.03),
        0px 6px 5px 0px rgba(31, 31, 31, 0.02);
    z-index: 10;
}

.header-inner {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.header-logo {
    fill: currentColor;
    height: 50px;
}

.burgers {
    position: relative;
    z-index: 2;
    &.close {
        .burger-close {
            opacity: 1;
            transform: scale(1);
            &::after {
                transform: scaleX(1);
            }
        }
        .burger {
            opacity: 0;
            transform: scale(0.9);
        }
    }
}

.burger-close {
    position: absolute;
    top: 4px;
    left: 20px;
    font-family: var(--urbanist);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0;
    transform: scale(0.9);
    transition: 0.2s ease-in-out;
    transition-property: transform, opacity;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: currentColor;
        transform: scaleX(0);
        transition: transform 0.2s ease-in-out;
    }
}

.burger {
    padding: 10px 25px;
    border-radius: 100px;
    color: currentColor;
    border: 1px solid var(--txt);
    font-family: var(--urbanist);
    font-size: 14px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.2s ease-in-out;
    transition-property: transform, opacity;
}

.quick-menu {
    display: none;
}

.menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100dvh;
    padding-top: 110px;
    background-color: var(--bg);
    z-index: -1;
    pointer-events: none;
    opacity: 0;
    color: var(--txt);
    box-shadow: 0px 84px 80px 0px rgba(31, 31, 31, 0.05), 0px 19px 18px 0px rgba(31, 31, 31, 0.03),
        0px 6px 5px 0px rgba(31, 31, 31, 0.02);
    &.show {
        opacity: 1;
        pointer-events: auto;
    }
    .nuxt-link-exact-active {
        color: #80807b;
    }
}

.menu-overlay {
    display: none;
}

.menu-inner {
    height: 100%;
    overflow: auto;
    padding: 30px 0;
}

.submenu-items {
    display: none;
}

.menu-item {
    &:not(:last-child) {
        margin-bottom: 30px;
    }
    &.open {
        .submenu-items {
            display: block;
        }
        .menu-item-label {
            color: #148668;
            border-bottom: 1px solid currentColor;
        }
    }
}

.menu-item-label {
    width: 100%;
    text-align: left;
    font-family: var(--urbanist);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 25px;
    line-height: 1;
    text-decoration: none;
}

.submenu {
    .menu-item-label {
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
}

.submenu-item {
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1;
    text-decoration: none;
}

.socials {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.social {
    height: 25px;
    margin-bottom: 10px;
    &:not(:last-child) {
        margin-right: 30px;
    }
    .fast-image {
        height: 100%;
    }
    ::v-deep img {
        height: 100%;
        width: auto;
    }
}

.bg-img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 310px;
    z-index: -1;
}

@media (min-width: $desktop) {
    .quick-menu {
        display: flex;
    }
    .quick-link {
        margin: 0 20px;
        font-family: var(--urbanist);
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
    }
    .header {
        position: fixed;
        box-shadow: none;
        background-color: transparent;
        color: var(--bg);
        padding: 0;
    }
    .header-container {
        padding: 40px 0;
        transition: 0.2s ease-out;
        &.scrolled {
            padding: 20px 0;
            box-shadow: 0px 84px 80px 0px rgba(31, 31, 31, 0.05), 0px 19px 18px 0px rgba(31, 31, 31, 0.03),
                0px 6px 5px 0px rgba(31, 31, 31, 0.02);
            background-color: var(--bg);
            color: var(--txt);
            .header-logo {
                height: 40px;
            }
            .burger {
                background-color: transparent;
                border: 1px solid var(--txt);
            }
        }
    }
    .burger {
        border: none;
        background-color: rgba(#fffcf0, 0.2);
    }

    .menu {
        position: fixed;
        left: auto;
        width: 405px;
        margin: 0;
        padding-top: 0;
        z-index: 1;
    }

    .menu-overlay {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }

    .menu-inner {
        display: flex;
        flex-direction: column;
        padding: 60px 0 50px;
    }
    .socials {
        margin-top: auto;
    }
    .menu-item-label {
        font-weight: 700;
    }
    .social {
        height: 20px;
    }
}
</style>
