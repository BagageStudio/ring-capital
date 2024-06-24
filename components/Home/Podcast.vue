<template>
    <div class="wrapper-podcast container">
        <div class="container-small">
            <div class="wrapper-intro-episodes">
                <div class="wrapper-txt">
                    <h2 class="podcast-title basic-h2">{{ data.podcastTitle }}</h2>
                    <div class="podcast-intro basic-txt" v-html="data.podcastIntro"></div>
                    <div v-if="isDesktop" class="podcast-btn">
                        <LinkTo class="btn-all-episodes btn-rounded" :link="data.podcastAllEpisodesLink" />
                    </div>
                </div>
                <div class="wrapper-podcasts">
                    <HomeBlockPodcast
                        v-for="podcast in data.podcastSelection"
                        :key="podcast.id"
                        :data="podcast"
                        :link-label="data.podcastLinkLabel"
                    />
                </div>
            </div>
            <div v-if="!isDesktop" class="wrapper-all-episodes content-pad">
                <LinkTo class="btn-all-episodes btn-rounded" :link="data.podcastAllEpisodesLink" />
            </div>
            <div class="wrapper-podcast-platforms content-pad">
                <div class="podcast-platforms">
                    <component
                        :is="platform.link ? 'LinkTo' : 'div'"
                        v-for="platform in data.podcastPlatforms"
                        :key="platform.id"
                        :link="platform.link"
                        :hide-label="true"
                        class="platform"
                    >
                        <FastImage class="platform-logo" :image="platform.logo" contains />
                    </component>
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
    computed: {
        isDesktop() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.xl;
        }
    }
};
</script>
<style lang="scss" scoped>
.wrapper-podcast {
    margin: 10rem 0;
}
.wrapper-txt {
    padding: 0 var(--gutter);
}
.podcast-title {
    margin-bottom: 4rem;
}
.wrapper-podcasts {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 600px;
    margin-top: 4rem;
    padding: 0 var(--gutter);
}
.wrapper-all-episodes {
    margin-top: 4rem;
}
.podcast-platforms {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    padding: 2rem;
    gap: 2rem 3rem;
    border-top: 1px solid var(--txt);
    border-bottom: 1px solid var(--txt);
}
.platform {
    height: 40px;
}
.platform-logo {
    height: 100%;
}

@media (min-width: $desktop) {
    .wrapper-intro-episodes {
        display: flex;
        align-items: center;
    }
    .wrapper-txt,
    .wrapper-podcasts {
        flex: 0 0 auto;
        width: 50%;
    }
    .wrapper-podcasts {
        max-width: 100%;
        margin-top: 0;
    }
    .podcast-btn {
        margin-top: 4rem;
    }
    .podcast-platforms {
        margin-top: 13rem;
        padding: 3rem 0.5rem;
        justify-content: space-evenly;
    }
}
@media (min-width: $desktop-large) {
    .wrapper-txt {
        padding: 0;
    }
    .podcast-title,
    .podcast-intro,
    .podcast-btn {
        padding: 0 var(--gutter);
    }
    .podcast-intro,
    .podcast-btn {
        width: calc(4 / 5 * 100%);
    }
}
</style>
