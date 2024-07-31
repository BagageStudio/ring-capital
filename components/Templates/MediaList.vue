<template>
    <div v-if="data" class="wrapper-media">
        <img src="/img/ring-blue.png" class="bg-img" />
        <div class="container content-pad">
            <h1 class="basic-h1">{{ data.title }}</h1>
            <div class="filters">
                <div class="filters-title basic-tag">{{ data.filterText }} :</div>
                <div class="filters-mobile">
                    <select v-model="selectedFilter" class="filters-select basic-tag" name="filters">
                        <option
                            v-for="mediaType in availableFilters"
                            :key="mediaType.mediaType"
                            :value="mediaType.mediaType"
                        >
                            {{ mediaType.mediaType }}
                        </option>
                    </select>
                </div>
                <div class="filters-desktop">
                    <button
                        v-for="mediaType in availableFilters"
                        :key="mediaType.mediaType"
                        :class="{ active: selectedFilter === mediaType.mediaType }"
                        class="filters-btn basic-tag"
                        @click="setSelectedFilter(mediaType.mediaType)"
                    >
                        {{ mediaType.mediaType }}
                    </button>
                </div>
            </div>
        </div>
        <div v-if="currentMediaText" class="container">
            <div class="media-text content-pad">
                <div class="media-text-title basic-h3">{{ currentMediaText.title }}</div>
                <div class="media-text-description basic-txt">{{ currentMediaText.description }}</div>
                <div v-if="currentMediaText.extraTitle && currentMediaText.extraLinks.length" class="media-text-extra">
                    <div class="extra-title basic-tag">{{ currentMediaText.extraTitle }}</div>
                    <div class="extra-links">
                        <LinkTo
                            v-for="extraLink in currentMediaText.extraLinks"
                            :key="extraLink.link.id"
                            class="extra-link"
                            :link="extraLink.link"
                            hide-label
                        >
                            <FastImage :image="extraLink.image" />
                        </LinkTo>
                    </div>
                </div>
            </div>
        </div>
        <div class="media-list container">
            <LayoutContentCard v-for="media in featuredMedia" :key="media.id" :content="media" />
        </div>
        <div v-if="moreMedia.length" class="more-list container">
            <h2 class="basic-h2 content-pad">{{ data.moreTitle }}</h2>
            <div class="more-media-list">
                <LinkTo v-for="media in moreMedia" :key="media.id" class="more-media" hide-label :link="media.link">
                    <div class="more-media-content">
                        <div class="more-media-title basic-small-txt content-pad">{{ media.title }}</div>
                        <div v-if="media.infos" class="more-media-infos content-pad basic-tag">{{ media.infos }}</div>
                    </div>
                    <div class="content-pad more-media-icon">
                        <Icon name="arrow-diag-light" />
                    </div>
                </LinkTo>
            </div>
            <button v-if="showSeeMoreBtn" class="btn-rounded see-more-btn" @click="seeMoreMoreMedia = true">
                {{ data.seeMoreText }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    data() {
        return {
            selectedFilter: null,
            seeMoreMoreMedia: false
        };
    },
    computed: {
        currentMediaText() {
            return this.availableFilters.find(f => f.mediaType === this.selectedFilter);
        },
        showSeeMoreBtn() {
            return this.featuredMedia.length + this.moreMedia.length < this.filteredMedia.length;
        },
        moreMedia() {
            return this.filteredMedia.slice(6, this.seeMoreMoreMedia ? this.filteredMedia.length : 10);
        },
        featuredMedia() {
            return this.filteredMedia.slice(0, 6);
        },
        filteredMedia() {
            return this.data.allMediaContents.filter(m => m.mediaType === this.selectedFilter);
        },
        availableFilters() {
            return this.data.mediaTypes.filter(f => {
                return this.data.allMediaContents.find(m => m.mediaType === f.mediaType);
            });
        }
    },
    watch: {
        selectedFilter(val) {
            if (val) {
                this.$router.push({ path: this.$route.path, query: { filter: val } });
            }
        }
    },
    created() {
        this.checkFilterInUrl();
        if (!this.selectedFilter) this.selectedFilter = this.availableFilters[0].mediaType;
    },
    methods: {
        checkFilterInUrl() {
            if (!this.$route.query.filter) return;
            const filterToSelect = this.availableFilters.find(t => t.mediaType === this.$route.query.filter);
            if (filterToSelect) this.selectedFilter = filterToSelect.mediaType;
        },
        setSelectedFilter(sf) {
            this.selectedFilter = sf;
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-media {
    position: relative;
    padding-top: 14rem;
}
.bg-img {
    position: absolute;
    top: -4rem;
    right: -6rem;
    width: 29rem;
    max-width: none;
    z-index: -1;
}
.basic-h1 {
    margin-bottom: 2rem;
}
.filters {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    border-top: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
}

.filters-title {
    flex-shrink: 0;
    margin-right: 1.6rem;
}

.filters-mobile {
    flex: 1 1 auto;
}

.filters-select {
    width: 100%;
    padding: 2rem 0;
    border: 0;
}

.filters-desktop {
    display: none;
}

.media-text {
    margin-bottom: 2rem;
}

.media-text-title {
    margin-bottom: 2rem;
}

.media-text-extra {
    display: flex;
    align-items: center;
    margin-top: 2rem;
}

.extra-links {
    display: flex;
    margin-left: 2rem;
    .extra-link {
        margin-right: 2rem;
    }
}

.media-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 6rem;
}
.content-card {
    width: 100%;
}
.more-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
    .basic-h2 {
        margin-bottom: 4rem;
    }
}

.more-media {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        left: var(--gutter);
        right: var(--gutter);
        bottom: 0;
        height: 1px;
        background-color: #9d9d9d;
    }
    &:first-child {
        &::before {
            content: '';
            position: absolute;
            left: var(--gutter);
            right: var(--gutter);
            top: 0;
            height: 1px;
            background-color: #9d9d9d;
        }
    }
}

.more-media-icon {
    flex-shrink: 0;
    .icon {
        width: 1.8rem;
        height: 1.8rem;
    }
}

.more-media-content {
    display: flex;
    flex-direction: column;
}

.more-media-infos {
    margin-top: 2rem;
    color: #9d9d9d;
}

.see-more-btn {
    align-self: center;
    margin-top: 3rem;
}

@media (min-width: $desktop) {
    .bg-img {
        top: 0rem;
        right: 0rem;
        width: 46rem;
    }
    .filters-mobile {
        display: none;
    }
    .filters-desktop {
        display: block;
    }
    .filters {
        margin-bottom: 6rem;
    }
    .filters-btn {
        position: relative;
        padding: 2rem 0;
        margin-right: 2rem;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 1.8rem;
            height: 1px;
            background-color: var(--txt);
            transform-origin: 0 0;
            transform: scaleX(0);
            opacity: 0;
            transition: 0.2s ease-in-out;
        }
        &.active::after {
            opacity: 1;
            transform: scaleX(1);
        }
    }
    .media-text {
        width: 66.66%;
        margin-bottom: 6rem;
    }

    .content-card {
        width: 33.33%;
    }

    .more-media-content {
        width: 100%;
        flex-direction: row;
        align-items: flex-start;
    }
    .more-media-title {
        width: 58.33%;
        margin-right: calc(25% - var(--gutter));
    }

    .more-media-infos {
        width: 33.33%;
        flex-shrink: 1;
        margin-top: 0;
    }
}
</style>
