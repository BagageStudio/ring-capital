<template>
    <div class="hero">
        <div class="videos">
            <video
                v-for="slide in data.heroSlides"
                :key="slide.id"
                ref="videos"
                class="hero-video"
                playsinline
                muted
                loop
            >
                <source :src="slide.video.url" :type="`video/${slide.video.format}`" />
            </video>
        </div>
        <div class="container-hero container">
            <div class="wrapper-txt">
                <h1 class="hero-title" v-html="$options.filters.noPAround(data.title)"></h1>
                <div class="subtitles-wrapper">
                    <div class="subtitles">
                        <div v-for="slide in data.heroSlides" :key="slide.id" ref="subtitles" class="subtitle">
                            <p class="first-line-subtitle">
                                <span class="subtitle-part">{{ slide.firstPartTitle }}</span>
                                <span class="subtitle-ring">ring</span>
                            </p>
                            <p class="subtitle-part">{{ slide.secondPartTitle }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper-arrows">
                <button class="arrow" type="button" @click="prevSlide">
                    <Icon name="prev" />
                </button>
                <button class="arrow" type="button" @click="nextSlide">
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
            currentSlide: -1,
            timer: null,
            transitionning: false
        };
    },
    beforeDestroy() {
        this.killAnim();
    },
    mounted() {
        this.changeSlide(0);
    },
    methods: {
        formattedSubtitle(subtitle) {
            const sub = subtitle.replace('<span>', '').replace('</span>', '');
            console.log(sub);
            return sub;
        },
        prevSlide() {
            const prevIndex = this.currentSlide === 0 ? this.data.heroSlides.length - 1 : this.currentSlide - 1;
            this.changeSlide(prevIndex);
        },
        nextSlide() {
            const nextIndex = this.currentSlide === this.data.heroSlides.length - 1 ? 0 : this.currentSlide + 1;
            this.changeSlide(nextIndex);
        },
        triggerAutoTimer() {
            if (this.timer) this.timer.kill();
            this.timer = this.$gsap.delayedCall(4, () => {
                this.nextSlide();
            });
        },
        changeSlide(nextIndex) {
            if (this.transitionning || nextIndex === this.currentSlide) return;

            this.transitionning = true;

            const currentVideo = this.$refs.videos[this.currentSlide];
            const nextVideo = this.$refs.videos[nextIndex];

            const currentSubtitle = this.$refs.subtitles[this.currentSlide];
            const nextSubtitle = this.$refs.subtitles[nextIndex];

            nextVideo.play();

            // Disappear
            this.$gsap.set(currentVideo, {
                zIndex: 1
            });
            if (currentVideo) {
                this.$gsap.to(currentVideo, {
                    duration: 0.7,
                    scale: 1.4,
                    ease: 'power2.inOut',
                    force3D: true,
                    overwrite: true
                });
            }
            if (currentSubtitle) {
                this.$gsap.to(
                    [
                        ...currentSubtitle.getElementsByClassName('subtitle-ring'),
                        ...currentSubtitle.getElementsByClassName('subtitle-part')
                    ].reverse(),
                    {
                        duration: 0.3,
                        stagger: 0.1,
                        autoAlpha: 0,
                        y: 30,
                        ease: 'power2.inOut',
                        overwrite: true
                    }
                );
            }

            // Reappear
            this.$gsap.set(nextVideo, {
                zIndex: 2
            });
            this.$gsap.fromTo(
                nextVideo,
                {
                    autoAlpha: 0,
                    scale: 1.01
                },
                {
                    duration: 0.7,
                    autoAlpha: 1,
                    scale: 1.1,
                    force3D: true,
                    ease: 'power2.inOut',
                    overwrite: true,
                    onComplete: () => {
                        if (currentVideo) {
                            currentVideo.pause();
                            currentVideo.currentTime = 0;
                            this.$gsap.set(currentVideo, {
                                zIndex: 0,
                                autoAlpha: 0
                            });
                        }
                        this.transitionning = false;
                        this.triggerAutoTimer(nextIndex);
                        this.currentSlide = nextIndex;
                    }
                }
            );
            this.$gsap.fromTo(
                [
                    ...nextSubtitle.getElementsByClassName('subtitle-ring'),
                    ...nextSubtitle.getElementsByClassName('subtitle-part')
                ].reverse(),
                {
                    autoAlpha: 0,
                    y: -30
                },
                {
                    stagger: 0.3,
                    duration: 0.7,
                    autoAlpha: 1,
                    y: 0,
                    ease: 'power2.inOut',
                    delay: 0.1,
                    overwrite: true
                }
            );
        },
        killAnim() {
            this.currentSlide = 0;
            if (this.timer) this.timer.kill();
            this.timer = null;
            this.$gsap.set(this.$refs.videos, { clearProps: 'all' });
            this.$gsap.set(this.$refs.subtitles, { clearProps: 'all' });
        }
    }
};
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.15);
        z-index: 2;
    }
}
.videos {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    overflow: hidden;
    z-index: 1;
}
.hero-video {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    will-change: transform;
    z-index: 0;
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
    z-index: 2;
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
.subtitles-wrapper {
    padding: 0 var(--gutter);
    margin-top: 6rem;
}
.subtitles {
    position: relative;
    height: 100%;
}
.subtitle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    > p {
        margin: 0;
        font-family: var(--urbanist);
        font-size: 3.5rem;
        line-height: 3.5rem;
        font-weight: 600;
    }
}
.subtitle-part,
.subtitle-ring {
    transform: translateY(-30px);
    opacity: 0;
}
.first-line-subtitle {
    display: flex;
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
        justify-content: center;
        padding-top: 10rem;
        padding-bottom: 10rem;
    }
    .wrapper-txt {
        display: flex;
    }
    .subtitle {
        top: auto;
        bottom: 0;
    }
    .hero-title {
        flex: 0 0 auto;
        width: calc(7 / 12 * 100%);
    }
    .subtitles-wrapper {
        flex: 0 0 auto;
        width: calc(5 / 12 * 100%);
        margin-top: 0;
    }
    .wrapper-arrows {
        position: absolute;
        right: var(--gutter);
        bottom: 10rem;
        justify-content: flex-end;
    }
}
</style>
