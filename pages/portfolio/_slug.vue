<template>
    <div>
        <div v-if="data">
            <div class="wrapper-company" itemscope itemtype="http://schema.org/Organization">
                <div class="container">
                    <div class="wrapper-back">
                        <nuxt-link class="btn-line" :to="portfolioListLink">
                            <span class="deco"></span>
                            {{ $t('portfolio.backLabel') }}
                        </nuxt-link>
                    </div>
                    <div class="wrapper-company-content">
                        <div class="company-col col-left">
                            <div v-if="data.image && !isM" class="wrapper-company-img">
                                <FastImage class="company-img" :image="data.image" cover />
                            </div>
                            <h1 class="company-title h1" itemprop="name">{{ data.name }}</h1>
                            <Tags v-if="data.tags" class="company-tags inverted" :content="data.tags" />
                            <div v-if="data.founders" class="wrapper-company-founders">
                                <span class="founders-title">
                                    {{ $t('portfolio.foundersTitle') }}
                                </span>
                                <span clas="founders" itemprop="founders">{{ data.founders }}</span>
                            </div>
                            <div
                                v-if="data.largeDescription"
                                class="company-description"
                                itemprop="description"
                                v-html="data.largeDescription"
                            ></div>
                            <blockquote v-if="data.quote" class="company-quote">{{ data.quote }}</blockquote>
                            <KeyFigures :content="data.keyFigures" class="company-key-figures" />
                            <a
                                v-if="data.recruitmentPageLink"
                                :href="data.recruitmentPageLink"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="company-hiring btn-line"
                            >
                                <span class="deco"></span>
                                {{ $t('portfolio.hireLabel') }}
                            </a>
                        </div>
                        <div class="company-col col-right">
                            <div v-if="data.image && isM" class="wrapper-company-img">
                                <FastImage class="company-img" :image="data.image" cover />
                            </div>
                            <div v-if="data.locations" class="wrapper-company-locations">
                                <span class="location-title h3">{{ $t('portfolio.locationLabel') }}</span>
                                <div class="company-locations" itemprop="contactPoints">
                                    <a
                                        v-for="location in data.locations"
                                        :key="location.id"
                                        :href="location.mapLink"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="location-link"
                                        itemprop="address"
                                        itemscope
                                        itemtype="http://schema.org/PostalAddress"
                                    >
                                        <span class="location-city" itemprop="addressLocality">{{
                                            location.city
                                        }}</span>
                                        <span class="location-address" itemprop="streetAddress">
                                            {{ location.address }}
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div v-if="data.social || data.websiteLink" class="wrapper-social-website">
                                <Social :content="data.social" class="company-social" />
                                <a
                                    v-if="data.websiteLink && data.websiteLinkLabel"
                                    :href="data.websiteLink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="company-website h4"
                                    itemprop="url"
                                >
                                    <span v-if="data.websiteLinkLabel" class="text">
                                        <span class="btn-label">{{ data.websiteLinkLabel }}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LinkedCompanies
                v-if="data.otherCompanies.length"
                :companies="data.otherCompanies"
                :title="data.charity ? $t('portfolio.otherCharitiesTitle') : $t('portfolio.otherRefsTitle')"
            />
        </div>
        <Overlay />
    </div>
</template>

<script>
import { routeByApiModels } from '~/app/crawler/routes';
import { getIso, getSlug, setRouteParams } from '~/api/dato/helpers';
import { companyQuery } from '~/api/dato';
import handleSeo from '~/assets/js/seo';

export default {
    async asyncData(context) {
        const { $dato, error, route } = context;
        const finalData = {};

        // Getting the right locale iso
        const lang = getIso.call(context);

        // Getting the slug
        const slug = getSlug.call(context);

        try {
            const {
                data: { company: data }
            } = await $dato.post('/', { query: companyQuery, variables: { lang, slug } }).then(({ data }) => data);

            finalData.data = data;
            finalData.seo = handleSeo({ route: route.fullPath, seo: finalData.data.seo, lang });
        } catch (e) {
            return error({ statusCode: 404 });
        }

        // Getting raw slugs for the current page from Dato
        const datoLocales = finalData.data._allSlugLocales;
        await setRouteParams.call(context, datoLocales);

        return finalData;
    },
    data() {
        return {
            data: {},
            seo: {},
            portfolioListLink: this.localePath({
                name: routeByApiModels.portfolio.routerFormat
            })
        };
    },
    computed: {
        isM() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.m;
        }
    },
    head() {
        if (!this.seo.title) this.seo.title = 'Ring Capital • ' + this.data.name;

        return {
            ...this.seo
        };
    }
};
</script>

<style lang="scss" scoped>
.wrapper-company {
    padding: 10px 0 75px;
}
.wrapper-back {
    margin-bottom: 30px;
    padding: 0 $gutter;
}
.company-col {
    padding: 0 $gutter;
}
.wrapper-company-img {
    position: relative;
    &::before {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
    .company-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
.company-title {
    margin: 40px 0 0;
}
.company-tags {
    margin: 0;
}
.wrapper-company-founders {
    margin: 20px 0 0;
    font-size: 1.4rem;
    line-height: 24px;
}
.founders-title {
    display: flex;
    align-items: center;
    color: $neptune;
    &::after {
        content: '';
        position: relative;
        top: -2px;
        display: inline-block;
        width: 40px;
        height: 1px;
        margin-left: 10px;
        background-color: currentColor;
    }
    .deco {
        position: relative;
        display: flex;
        align-items: center;
        height: 15px;
        width: 40px;
        margin-left: 10px;
        overflow: hidden;
        &::before {
            content: '';
            height: 1px;
            width: 40px;
            background-color: currentColor;
            transform-origin: 100% 50%;
            transition: 0.2s ease-in;
        }
        &::after {
            position: absolute;
            content: '';
            left: -15px;
            height: 15px;
            width: 15px;
            background-color: $dark;
            border-radius: 50%;
        }
    }
}
.company-description {
    margin: 40px 0;
    color: $neptune;
}
.company-quote {
    position: relative;
    font-size: 2.2rem;
    font-weight: 400;
    font-style: normal;
    line-height: 28px;
    padding: 0 0 0 27px;
    border: none;
    color: $white;
    &::before {
        content: '“';
        position: absolute;
        top: -5px;
        left: 0;
        font-size: 4.4rem;
        font-weight: 300;
        line-height: 50px;
    }
}

.company-hiring {
    margin-top: 40px;
    color: $saturn;
}

.wrapper-company-locations {
    margin-top: 50px;
    padding: 43px 0;
    border-top: 1px solid rgba($neptune, 0.5);
    border-bottom: 1px solid rgba($neptune, 0.5);
}
.location-title {
    display: block;
    margin: 0 0 15px;
}
.company-locations {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    width: calc(100% + #{2 * $gutter});
    margin-left: -$gutter;
}
.location-link {
    width: calc(50% - #{2 * $gutter});
    margin: 0 $gutter;
    text-decoration: none;
    > span {
        display: block;
    }
}
.location-city {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 24px;
    color: $neptune;
}
.location-address {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 21px;
}

.company-social {
    margin-top: 13px;
}

.company-website {
    display: inline-block;
    margin: 20px 0 0;
    text-decoration: none;
    color: $neptune;
    transition: color 0.2s ease-out;
    &:hover {
        color: $white;
    }
}

@media (min-width: $tablet) {
    .wrapper-company {
        padding: 40px 0 100px;
    }
    .wrapper-company-content {
        display: flex;
        align-items: flex-start;
    }
    .wrapper-back {
        margin-bottom: 55px;
    }
    .company-col {
        width: percentage(4/8);
    }
    .company-title {
        margin-top: 0;
    }
    .wrapper-company-locations {
        margin-top: 0;
        padding-top: 30px;
        border-top: none;
    }
}

@media (min-width: $desktop) {
    .company-col {
        width: percentage(6/12);
    }
    .col-right {
        padding-left: calc(#{percentage(1/12)} + #{$gutter});
    }
    .wrapper-social-website {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        padding-top: 10px;
    }
    .company-social {
        margin: 0;
    }
    .company-website {
        margin: 10px 0;
    }
    .wrapper-company-founders {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;
    }
    .founders-title {
        margin-right: 20px;
    }
}
@media (min-width: $desktop-large) {
    .wrapper-back {
        padding-left: calc(#{percentage(1/12)} + #{$gutter});
    }
    .col-left {
        padding-left: calc(#{percentage(1/12)} + #{$gutter});
    }
    .col-right {
        padding: 0 calc(#{percentage(1/12)} + #{$gutter});
    }
}
</style>
