<template>
    <div class="wrapper container">
        <a href="#" class="btn-block">
            <span class="text">
                <span class="btn-label">See companies</span>
            </span>
            <div class="bg"></div>
        </a>
    </div>
</template>
<script>
import { gsap } from 'gsap';

export default {
    methods: {
        enter() {
            gsap.killTweensOf([this.$refs.edge, this.$refs.bg]);
            const tl = gsap.timeline();
            tl.set(this.$refs.edge, {
                backgroundColor: '#657da2'
            })
                .to(
                    this.$refs.edge,
                    {
                        duration: 0.4,
                        ease: 'power2.inOut',
                        scaleY: 1
                    },
                    'start'
                )
                .to(this.$refs.edge, {
                    duration: 0.4,
                    ease: 'power2.inOut',
                    scaleY: 0
                })
                .to(
                    this.$refs.bg,
                    {
                        duration: 0.8,
                        ease: 'power2.inOut',
                        y: '-100%'
                    },
                    'start'
                );
        },
        leave() {
            gsap.killTweensOf([this.$refs.edge, this.$refs.bg]);
            const tl = gsap.timeline();
            tl.set(this.$refs.edge, {
                backgroundColor: '#19232f'
            })
                .to(
                    this.$refs.edge,
                    {
                        duration: 0.2,
                        ease: 'power2.inOut',
                        scaleY: 1
                    },
                    'start'
                )
                .to(this.$refs.edge, {
                    duration: 0.2,
                    ease: 'power2.inOut',
                    scaleY: 0
                })
                .to(
                    this.$refs.bg,
                    {
                        duration: 0.8,
                        ease: 'power2.inOut',
                        y: '0%'
                    },
                    'start'
                );
        }
    },
    head() {
        return {
            htmlAttrs: {
                class: 'lightmode'
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
    padding-top: 420px;
    padding-bottom: 420px;
    a {
        margin-right: 50px;
    }
}

.btn-block2 {
    display: inline-flex;
    position: relative;
    padding: 15px 21px;
    text-align: center;
    border: 1px solid $neptune;
    text-decoration: none;
    color: var(--secondary);
    text-decoration: none;
    transition: color 0.2s ease-in-out 0.2s;
    font-family: $space;
    z-index: 1;

    .bg {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
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
            transition: clip-path 0.4s cubic-bezier(0.65, 0, 0.35, 1) 0.08s;
        }
    }
    &::after,
    &::before {
        content: '';
        position: absolute;
        bottom: -2px;
        left: -2px;
        z-index: -1;
        transition: 0.2s ease-out;
        background-color: var(--secondary);
    }
    &::before {
        width: 2px;
        height: 9px;
        transform-origin: 50% 100%;
    }
    &::after {
        width: 7px;
        height: 2px;
        transform-origin: 0% 50%;
        transition-delay: 0.05s;
    }
    &.primary {
        color: $white;
        &::after,
        &::before {
            background-color: $white;
        }
    }
    &.secondary {
        color: $orbit;
        &::after,
        &::before {
            background-color: $orbit;
        }
    }
    &:hover,
    &:focus {
        transition: color 0.2s ease-in-out 0.1s;
        color: $white;
        .bg::before {
            clip-path: ellipse(80% 130% at 50% 100%);
        }
        &::before {
            opacity: 0;
            transform: scale(0);
        }
        &::after {
            opacity: 0;
            transform: scale(0);
        }
        &.secondary {
            color: $white;
        }
    }
}
</style>
