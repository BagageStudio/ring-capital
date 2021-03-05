<template>
    <div class="menu-item notransi" @mouseover="showPopover" @mouseleave="hidePopover">
        <button class="label" :class="{ active: open }" @click="toggleMobileSubmenu">
            {{ data.title }}
        </button>
        <div ref="submenuWrapper" class="menu-item-content-wrapper">
            <div ref="submenu" class="menu-item-content">
                <div
                    v-for="(submenu, i) in data.submenus"
                    :key="submenu.id"
                    class="menu-submenu"
                    :class="{ 'portfolio-submenu': i === 1 }"
                >
                    <span v-if="submenu.title" class="submenu-title">{{ submenu.title }}</span>
                    <div class="submenu-links">
                        <LinkTo
                            v-for="(link, j) in submenu.links"
                            :key="link.label"
                            class="submenu-link"
                            :link="link"
                            :class="{ 'see-all-link': i === 1 && j === submenu.links.length - 1 }"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        open: false
    }),
    computed: {
        isMobile() {
            return this.ww <= this.$breakpoints.list.l;
        },
        ww() {
            return this.$store.state.superWindow ? this.$store.state.superWindow.width : 320;
        }
    },
    watch: {
        $route() {
            if (this.open) {
                if (this.isMobile) {
                    this.toggleMobileSubmenu();
                } else {
                    this.hidePopover();
                }
            }
        }
    },
    methods: {
        toggleMobileSubmenu() {
            if (!this.isMobile) return;
            this.open = !this.open;
            this.toggleAccordion();
        },
        toggleAccordion() {
            const submenu = this.$refs.submenu;
            const submenuWrapper = this.$refs.submenuWrapper;

            if (!submenu || !submenuWrapper) return;

            const submenuHeight = submenu.getBoundingClientRect().height;

            const maxHeight = this.open ? submenuHeight : 0;

            if (submenuWrapper.style.maxHeight === 'none') {
                gsap.set(submenuWrapper, { clearProps: 'maxHeight' });
                gsap.set(submenuWrapper, { maxHeight: submenuHeight });
            }

            gsap.to(submenuWrapper, {
                duration: 0.6,
                maxHeight,
                opacity: Number(this.open),
                ease: 'power4.inOut',
                onComplete: () => {
                    if (this.open) {
                        gsap.to(submenuWrapper, { duration: 0, maxHeight: 'none' });
                    } else {
                        gsap.set(submenuWrapper, { clearProps: 'maxHeight,opacity' });
                    }
                }
            });
        },
        showPopover() {
            if (this.isMobile) return;
            this.open = true;
            const submenuWrapper = this.$refs.submenuWrapper;
            if (!submenuWrapper) return;

            gsap.set(submenuWrapper, {
                visibility: 'visible',
                pointerEvents: 'all'
            });
            gsap.killTweensOf(submenuWrapper);

            gsap.to(submenuWrapper, {
                duration: 0.4,
                opacity: 1,
                y: 0,
                ease: 'power4.inOut'
            });
        },
        hidePopover() {
            if (this.isMobile) return;
            this.open = false;
            const submenuWrapper = this.$refs.submenuWrapper;
            if (!submenuWrapper) return;

            gsap.killTweensOf(submenuWrapper);

            gsap.to(submenuWrapper, {
                duration: 0.4,
                opacity: 0,
                y: -10,
                ease: 'power4.inOut',
                onComplete: () => {
                    gsap.set(submenuWrapper, {
                        clearProps: 'all'
                    });
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
@media (min-width: $desktop-small) {
    .our-funds-portfolio {
        .menu-item-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .menu-submenu {
            flex: 1 0 auto;
        }
        .submenu-link,
        .submenu-title {
            white-space: nowrap;
        }
    }
}
</style>
