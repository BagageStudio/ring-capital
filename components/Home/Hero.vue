<template>
    <div class="hero">
        <video class="hero-video" playsinline muted loop autoplay>
            <source :src="data.heroSlides[0].video.url" :type="`video/${data.heroSlides[0].video.format}`" />
        </video>
        <div class="container-hero container">
            <div class="wrapper-txt">
                <h1 class="hero-title" v-html="$options.filters.noPAround(data.title)"></h1>
                <div class="subtitles">
                    <div
                        v-for="slide in data.heroSlides"
                        :key="slide.id"
                        class="subtitle"
                        v-html="$options.filters.noPAround(slide.title)"
                    ></div>
                </div>
            </div>
            <div class="wrapper-arrows">
                <button class="arrow" type="button">
                    <Icon name="prev" />
                </button>
                <button class="arrow" type="button">
                    <Icon name="next" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '../Icon.vue';
export default {
    components: { Icon },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            currentSlide: 0
        };
    }
};
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
}
.hero-video {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.container-hero {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 80svh;
    padding-top: calc(var(--header-height) + 8rem);
    padding-bottom: 8rem;
    color: var(--bg);
    &::before {
        content: '';
    }
}
.wrapper-txt {
    width: 100%;
}
.hero-title {
    font-family: var(--urbanist);
    font-size: 6rem;
    line-height: 6rem;
    font-weight: 600;
    padding: 0 var(--gutter);
}
.subtitles {
    margin-top: 6rem;
    padding: 0 var(--gutter);
}
.subtitle {
    font-family: var(--urbanist);
    font-size: 3.5rem;
    line-height: 3.5rem;
    font-weight: 600;
}
.wrapper-arrows {
    display: flex;
    align-items: center;
    gap: 4.4rem;
    margin-top: 6rem;
    padding: 0 var(--gutter);
}
.arrow {
    display: block;
    width: 2.4rem;
    height: 1.2rem;
    .icon {
        display: block;
        width: 100%;
        height: 100%;
        fill: var(--bg);
    }
}

@media (min-width: $desktop) {
    .container-hero {
        padding-top: 10rem;
        padding-bottom: 10rem;
    }
    .wrapper-txt {
        display: flex;
        align-items: flex-end;
    }
    .hero-title {
        flex: 0 0 auto;
        width: calc(7 / 12 * 100%);
    }
    .subtitles {
        flex: 0 0 auto;
        width: calc(5 / 12 * 100%);
        margin-top: 0;
    }
    .wrapper-arrows {
        justify-content: flex-end;
    }
}
</style>
