<template>
    <div v-if="content" class="wrapper-stories">
        <div class="container">
            <div class="wrapper-title">
                <h2 class="stories-title basic-h2">{{ content.storiesTitle }}</h2>
                <div class="wrapper-subtitle-all">
                    <h3 v-if="content.storiesSubtitle" class="stories-subtitle neptune">
                        {{ content.storiesSubtitle }}
                    </h3>
                    <div v-if="isS" class="wrapper-btn-line">
                        <nuxt-link class="btn-line on-white" :to="useCasesLink">
                            <span class="deco"></span>
                            {{ $t('usecases.seeAllSmallLabel') }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="wrapper-details-stories">
                <LayoutDetailList
                    class="on-white small-height no-margin-large"
                    fixed-height
                    :content="content.useCases"
                />
            </div>
            <div v-if="!isS" class="wrapper-btn-line-mobile">
                <nuxt-link class="btn-line on-white" :to="useCasesLink">
                    <span class="deco"></span>
                    {{ $t('usecases.seeAllSmallLabel') }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { routeByApiModels } from '~/app/crawler/routes';

export default {
    props: {
        content: { type: Object, required: true }
    },
    data() {
        return {
            useCasesLink: this.localePath({
                name: routeByApiModels.use_cases_page.routerFormat
            })
        };
    },
    computed: {
        isS() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.s;
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-stories {
    padding: 80px 0;
    color: $orbit;
    background: $white;
}
.wrapper-title {
    padding: 0 #{$gutter};
}
.stories-title {
    margin-bottom: 15px;
}
.wrapper-subtitle-all {
    margin-bottom: 10px;
}
.stories-subtitle {
    font-size: 2.2rem;
    line-height: 28px;
    font-weight: 400;
    margin: 0;
}
.wrapper-btn-line-mobile {
    display: flex;
    justify-content: center;
    padding: 40px #{$gutter} 0;
}

@media (min-width: $phone) {
    .wrapper-stories {
        padding-bottom: 30px;
    }
    .wrapper-details-stories {
        margin-top: 30px;
    }
    .wrapper-title {
        padding: 0;
    }
    .stories-title {
        padding: 0 #{$gutter};
    }
    .wrapper-subtitle-all {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        .wrapper-btn-line {
            flex: 0 0 auto;
            position: relative;
            top: -0.35em;
            padding: 0 #{$gutter};
        }
    }
    .stories-subtitle {
        flex: 0 0 auto;
        width: math.percentage(math.div(3, 4));
        padding: 0 #{$gutter};
    }
}
@media (min-width: $tablet) {
    .stories-subtitle {
        width: math.percentage(math.div(6, 8));
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
    .stories-subtitle {
        width: math.percentage(math.div(9, 12));
    }
}
</style>
