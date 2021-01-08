<template>
    <div class="menu-item">
        <button class="label" :class="{ active: open }" @click="toggleSubmenu">{{ data.megaMenu.title }}</button>
        <div ref="submenuWrapper" class="menu-item-content-wrapper">
            <div ref="submenu" class="menu-item-content">
                <div class="submenu-links">
                    <div v-for="link in data.megaMenu.links" :key="link.label" class="submenu-link">
                        {{ link.label }}
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
