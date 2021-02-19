<template>
    <div v-if="content" class="wrapper-stories">
        <div class="container">
            <div class="wrapper-title content-pad">
                <h2 class="stories-title basic-h2">{{ content.storiesTitle }}</h2>
                <div class="wrapper-subtitle-all">
                    <h3 v-if="content.storiesSubtitle" class="stories-subtitle neptune">
                        {{ content.storiesSubtitle }}
                    </h3>
                    <!-- <nuxt-link v-if="isL" class="btn-line" :class="{ 'on-white': !dark }" :to="portfolioListLink">
                        <span class="deco"></span>
                        {{ $t('usecases.seeAllSmallLabel') }}
                    </nuxt-link> -->
                </div>
            </div>
            <div class="wrapper-details-stories">
                <DetailList class="on-white small-height no-margin-large" fixed-height :content="content.useCases" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-stories {
    padding: 80px 0;
    color: $orbit;
    background: $white;
}
.stories-title {
    margin-bottom: 15px;
}
.stories-subtitle {
    font-size: 2.2rem;
    line-height: 28px;
    font-weight: 400;
    margin-bottom: 10px;
}

@media (min-width: $phone) {
    .wrapper-stories {
        padding-bottom: 30px;
    }
    .wrapper-details-stories {
        margin-top: 30px;
    }
}
@media (min-width: $desktop-small) {
    .wrapper-stories {
        padding-bottom: 80px;
    }
}
@media (min-width: $desktop) {
    .wrapper-stories {
        padding: 130px 0 100px;
    }
    .wrapper-details-stories {
        margin-top: 60px;
    }
}
</style>
