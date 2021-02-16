<template>
    <div v-if="content" class="wrapper-accordions">
        <div v-for="accordion in content" :key="accordion.id" ref="accordion" class="accordion">
            <p ref="title" class="accordion-title" @click="toggleAccordion">{{ accordion.title }}</p>
            <div ref="contentwrapper" class="accordion-content-wrapper">
                <div ref="content" class="accordion-content">
                    <div v-html="accordion.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    props: {
        content: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        open: false,
        ease: 'power2.out',
        contentHeight: 500,
        contentWrapper: null
    }),
    mounted() {
        this.initAccordion();
    },
    methods: {
        initAccordion() {
            this.contentWrapper = this.$refs.contentwrapper;
            this.contentAccordion = this.$refs.content[0];
        },
        toggleAccordion() {
            if (!this.open && !gsap.isTweening(this.contentWrapper)) {
                this.setMaxHeight();
                gsap.to(this.contentWrapper, 0.3, {
                    maxHeight: this.contentHeight,
                    opacity: 1,
                    ease: this.ease,
                    onComplete: () => {
                        gsap.set(this.contentWrapper, { maxHeight: 'none' });
                    }
                });
                this.open = true;
            } else if (this.open && !gsap.isTweening(this.contentWrapper)) {
                this.setMaxHeight();
                gsap.set(this.contentWrapper, { clearProps: 'maxHeight' });
                gsap.set(this.contentWrapper, { maxHeight: 50 });
                gsap.to(this.contentWrapper, 0.3, {
                    maxHeight: 0,
                    opacity: 0,
                    ease: this.ease
                });
                this.open = false;
            }
        },
        setMaxHeight() {
            this.contentHeight = this.contentAccordion.getBoundingClientRect().height;
        }
    }
};
</script>

<style lang="scss" scoped>
.accordion {
    border-bottom: 1px solid rgba($neptune, 0.4);
}
.accordion-title {
    margin: 0;
    padding: 20px 0;
    font-family: $helvetica-neue;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 26px;
    cursor: pointer;
}
.accordion-content-wrapper {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}
.accordion-content {
    ::v-deep p {
        margin: 0;
    }
}
</style>
