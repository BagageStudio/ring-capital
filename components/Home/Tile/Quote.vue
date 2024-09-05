<template>
    <div ref="tile" class="tile-quote">
        <blockquote>
            <Icon name="quote" />
            <div class="quote" v-html="data.quote"></div>
            <footer class="quote-author">
                {{ data.quoteAuthor }}
            </footer>
        </blockquote>
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
.tile-quote {
    padding: 4rem;
    background: #22d3df;
    --scroll-appear: 1;
}
blockquote {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.8rem;
    font-style: normal;
    line-height: 2.4rem;
    color: var(--txt);
}
.icon-quote {
    display: block;
    width: 2.5rem;
    height: 1.8rem;
    margin-bottom: 2rem;
}
.quote-author {
    display: block;
    margin-top: 3rem;
    font-family: var(--urbanist);
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
}

@media (min-width: $desktop-small) {
    .tile-quote {
        padding: 2rem;
    }
}
@media (min-width: $desktop) {
    .tile-quote {
        padding: 4rem;
    }
}
</style>
