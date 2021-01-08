<template>
    <div class="menu-item">
        <button class="label" :class="{ active: open }" @click="toggleSubmenu">{{ data.title }}</button>
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
    methods: {
        toggleSubmenu() {
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
                    if (this.open) gsap.to(submenuWrapper, { duration: 0, maxHeight: 'none' });
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped></style>
