<template>
    <div ref="tile" class="tile-image">
        <FastImage class="image" :image="data.image" cover />
        <span class="title">{{ data.title }}</span>
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
    mounted() {
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
    }
};
</script>
<style lang="scss" scoped>
.tile-image {
    position: relative;
    padding: 2rem;
    --scroll-appear: 1;
}
.image {
    position: absolute;
    inset: 0;
}
.title {
    position: relative;
    display: block;
    font-family: var(--urbanist);
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
}
</style>
