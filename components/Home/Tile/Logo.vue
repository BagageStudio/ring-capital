<template>
    <div ref="tile" class="tile-logo">
        <span class="title">{{ data.title }}</span>
        <div class="wrapper-logos">
            <div class="logos">
                <div v-for="(logo, i) in data.logos" :key="logo.id" class="logo" :class="{ active: i === active }">
                    <FastImage :image="logo" contains />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            active: 0,
            timer: null
        };
    },
    mounted() {
        this.triggerAutoTimer();
        this.$gsap.to(this.$refs.tile, {
            scrollTrigger: {
                trigger: this.$refs.tile,
                scrub: true,
                start: 'top bottom',
                end: 'bottom 80%'
            },
            '--scroll-appear': 0,
            ease: 'linear'
        });
    },
    beforeDestroy() {
        this.killAnim();
    },
    methods: {
        triggerAutoTimer() {
            if (this.timer) this.timer.kill();
            const delay = this.getRandomNumber(3, 6);
            this.timer = this.$gsap.delayedCall(delay, () => {
                const nextIndex = this.active === this.data.logos.length - 1 ? 0 : this.active + 1;
                this.active = nextIndex;
                this.triggerAutoTimer();
            });
        },
        killAnim() {
            this.active = 0;
            if (this.timer) this.timer.kill();
            this.timer = null;
        },
        getRandomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }
    }
};
</script>
<style lang="scss" scoped>
.tile-logo {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    --scroll-appear: 1;
}
.title {
    flex: 0 0 auto;
    display: block;
    font-family: var(--urbanist);
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    text-align: center;
}
.wrapper-logos {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    width: 100%;
}
.logos {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 0.45;
}
.logo {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    transition-property: opacity, transform;
    &.active {
        opacity: 1;
        transform: scale(1);
        transition-delay: 0.3s;
    }
    .fast-image {
        position: absolute;
        inset: 0;
    }
}
</style>
