<template>
    <div v-if="content" ref="accordion" class="accordion">
        <div ref="title" class="wrapper-accordion-title" @click="toggleAccordion">
            <div class="wrapper-title-icon">
                <div v-if="content.picto" class="wrapper-accordion-picto">
                    <FastImage class="accordion-picto" :image="content.picto" />
                </div>
                <p class="accordion-title">{{ content.title }}</p>
            </div>
            <span class="accordion-btn" :class="{ open }"><span class="bg"></span><span class="path"></span></span>
        </div>
        <div ref="contentwrapper" class="accordion-content-wrapper">
            <div ref="content" class="accordion-content">
                <div v-html="content.content"></div>
                <LinkTo
                    v-if="content.link"
                    :class="{ 'on-white': onWhite }"
                    class="accordion-inside-btn btn-line"
                    :link="content.link"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    props: {
        content: {
            type: Object,
            required: true
        },
        onWhite: {
            type: Boolean,
            default: false
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
            this.contentAccordion = this.$refs.content;
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
.wrapper-accordions {
    &.on-white {
        .accordion-btn {
            .path {
                &::before {
                    border-color: $orbit;
                }
            }
        }
        .wrapper-accordion-title {
            &:hover,
            &:focus {
                .accordion-btn {
                    .path {
                        &::before {
                            border-color: $white;
                        }
                    }
                }
            }
        }
        .accordion-content {
            color: $neptune;
        }
    }
}
.accordion {
    border-bottom: 1px solid rgba($neptune, 0.4);
}
.wrapper-accordion-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    cursor: pointer;
    &:hover,
    &:focus {
        .accordion-btn {
            transition: color 0.2s ease-in-out 0.1s;
            color: $white;
            .path::before {
                transition: border-color 0.1s ease-out 0.1s;
            }
            .bg::before {
                clip-path: ellipse(80% 130% at 50% 100%);
            }
        }
    }
}
.wrapper-title-icon {
    display: flex;
    align-items: center;
}
.wrapper-accordion-picto {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 15px;
}
.accordion-title {
    position: relative;
    top: 0.1em;
    margin: 0;
    padding: 0;
    font-family: $helvetica-neue;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 26px;
}
.accordion-btn {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    margin-left: 20px;
    border: 1px solid rgba($neptune, 0.4);
    border-radius: 50%;
    z-index: 1;
    .path {
        position: relative;
        width: 6px;
        height: 6px;
        transition: transform 0.2s ease-out;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-right: 1px solid $white;
            border-bottom: 1px solid $white;
            transform: rotate(45deg);
            transition: border-color 0.05s ease-out 0.15s;
        }
    }
    .bg {
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        border-radius: 50%;
        overflow: hidden;
        &::before {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: $neptune;
            clip-path: ellipse(50% 0% at 50% 100%);
            transition: clip-path 0.4s cubic-bezier(0.65, 0, 0.35, 1) 0.05s;
        }
    }
    &.open {
        .path {
            transform: scaleY(-1);
        }
    }
}
.accordion-content-wrapper {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}
.accordion-content {
    padding-bottom: 20px;
    ::v-deep p {
        margin: 0;
    }
}
.accordion-inside-btn {
    margin-top: 10px;
}
</style>
