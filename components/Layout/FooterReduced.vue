<template>
    <footer class="footer-reduced">
        <FastImage class="background-shape" :image="data.backgroundShape" contains />
        <div class="footer-reduced-container container">
            <div class="footer-reduced-side content-pad">
                <h4 class="footer-reduced-title">{{ data.leftSideTitle }}</h4>
                <div class="footer-reduced-text" v-html="data.leftSideText"></div>
                <div class="footer-reduced-podcasts">
                    <span class="podcast-title">{{ data.podcastTitle }}</span>
                    <div class="podcast-links">
                        <a
                            v-if="data.youtubeLink"
                            :href="data.youtubeLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="podcast-link youtube"
                        >
                            <Icon name="youtube" />
                        </a>
                        <a
                            v-if="data.spotifyLink"
                            :href="data.spotifyLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="podcast-link spotify"
                        >
                            <Icon name="spotify" />
                        </a>
                        <a
                            v-if="data.applePodcastsLink"
                            :href="data.applePodcastsLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="podcast-link apple-podcasts"
                        >
                            <Icon name="apple-podcasts" />
                        </a>
                        <a
                            v-if="data.deezerLink"
                            :href="data.deezerLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="podcast-link deezer"
                        >
                            <Icon name="deezer" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-reduced-side content-pad">
                <h4 class="footer-reduced-title">{{ data.rightSideTitle }}</h4>
                <div class="footer-reduced-text" v-html="data.rightSideText"></div>
                <LinkTo class="right-side-link btn-arrow" :link="data.rightSideLink" :hide-label="true">
                    <span>{{ data.rightSideLink.label }}</span>
                    <Icon name="arrow-diag" />
                </LinkTo>
            </div>
        </div>
    </footer>
</template>

<script>
import layoutData from '~/cms/data/layout-data.json';

export default {
    computed: {
        data() {
            return layoutData[this.$store.state.i18n.locale].footerReduced;
        }
    }
};
</script>

<style lang="scss" scoped>
.footer-reduced {
    position: relative;
    padding: 10rem 0;
}
.background-shape {
    position: absolute;
    inset: 0;
    max-width: 1250px;
    margin: 0 auto;
    ::v-deep .image {
        object-position: 50% 100%;
    }
}
.footer-reduced-container {
    position: relative;
}
.footer-reduced-side {
    &:first-child {
        padding-bottom: 4rem;
    }
    &:last-child {
        position: relative;
        padding-top: 4rem;
        &::before {
            content: '';
            position: absolute;
            left: var(--gutter);
            right: var(--gutter);
            top: 0;
            border-top: 1px solid currentColor;
        }
    }
}
.footer-reduced-title {
    font-family: var(--urbanist);
    font-size: 5rem;
    line-height: 5rem;
    font-weight: 600;
    margin-bottom: 2rem;
}
.footer-reduced-text {
    ::v-deep p {
        font-size: 1.8rem;
        line-height: 2.4rem;
        margin: 0;
    }
    ::v-deep p + p {
        margin-top: 1em;
    }
}
.podcast-title {
    display: block;
    font-family: var(--urbanist);
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: 700;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    margin: 2rem 0;
}
.podcast-links {
    display: flex;
    align-items: center;
    gap: 2rem;
}
.podcast-link {
    display: block;
    &.youtube {
        width: 32px;
        height: 22px;
    }
    &.spotify {
        width: 27px;
        height: 27px;
    }
    &.apple-podcasts {
        width: 26px;
        height: 26px;
    }
    &.deezer {
        width: 27px;
        height: 27px;
    }
    .icon {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.right-side-link {
    margin-top: 2em;
}

@media (min-width: $desktop) {
    .footer-reduced {
        padding: 0;
    }
    .footer-reduced-container {
        display: flex;
    }
    .footer-reduced-side {
        flex: 0 0 auto;
        width: 50%;
    }
    .footer-reduced-side {
        &:first-child {
            padding: 11rem var(--gutter);
        }
        &:last-child {
            padding: 11rem var(--gutter);
            &::before {
                left: 0;
                right: auto;
                bottom: 0;
                border-top: 0;
                border-left: 1px solid currentColor;
            }
        }
    }
    .footer-reduced-podcasts {
        display: flex;
        align-items: center;
        gap: 4.6rem;
        margin-top: 2.8rem;
    }
    .podcast-title {
        margin: 0;
    }
}
@media (min-width: $desktop-xxl) {
    .footer-reduced-side {
        &:first-child {
            padding-left: 100px;
            padding-right: 100px;
        }
        &:last-child {
            padding-left: 100px;
            padding-right: 100px;
        }
    }
}
</style>
