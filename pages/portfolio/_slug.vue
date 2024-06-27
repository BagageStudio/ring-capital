<template>
    <div>
        <div v-if="data">
            <div class="container" itemscope itemtype="http://schema.org/Organization">
                <header class="company-header">
                    <h1 class="company-name">{{ data.name }}</h1>
                    <nuxt-link :to="portfolioListLink" class="company-close">
                        <Icon name="cross" />
                    </nuxt-link>
                </header>
                <div class="wrapper-intro-infos">
                    <div class="wrapper-intro">
                        <FastImage v-if="!isDesktop" class="company-image" :image="data.image" cover />
                        <h2 class="company-title">{{ data.title }}</h2>
                        <div
                            class="company-description basic-txt"
                            itemprop="description"
                            v-html="data.description"
                        ></div>
                    </div>
                    <div class="wrapper-infos">
                        <div class="wrapper-company-logo">
                            <FastImage class="company-logo" :image="data.logo" contains />
                        </div>
                        <div class="company-infos">
                            <div v-if="data.founders" class="company-info">
                                <div class="info-title">{{ $t('portfolio.foundersTitle') }}</div>
                                <div class="info-content" itemprop="founders">{{ data.founders }}</div>
                            </div>
                            <div v-if="data.location" class="company-info">
                                <div class="info-title">{{ $t('portfolio.locationTitle') }}</div>
                                <div class="info-content">{{ data.location }}</div>
                            </div>
                            <div v-if="data.websiteLink && data.websiteLinkLabel" class="company-info">
                                <div class="info-title">{{ $t('portfolio.websiteTitle') }}</div>
                                <div class="info-content">
                                    <a
                                        :href="data.websiteLink"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="company-website"
                                        itemprop="url"
                                    >
                                        {{ data.websiteLinkLabel }}
                                    </a>
                                </div>
                            </div>
                            <div v-if="data.fund" class="company-info">
                                <div class="info-title">{{ $t('portfolio.fundTitle') }}</div>
                                <div class="info-content">{{ data.fund.name }}</div>
                            </div>
                            <div v-if="data.social" class="company-info">
                                <div class="info-title">{{ $t('portfolio.socialsTitle') }}</div>
                                <div class="info-content">
                                    <LayoutSocial :content="data.social" class="company-social" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrapper-image-key-infos">
                    <div v-if="isDesktop" class="wrapper-image">
                        <FastImage class="company-image" :image="data.image" cover />
                    </div>
                    <div class="wrapper-key-infos">
                        <div class="key-info">
                            <h3 class="key-info-title">
                                <span>{{ $t('portfolio.challengeFirstLine') }}</span>
                                <span>{{ $t('portfolio.challengeSecondLine') }}</span>
                            </h3>
                            <div class="key-info-content" v-html="data.challenge"></div>
                        </div>
                        <div class="key-info">
                            <h3 class="key-info-title">
                                <span>{{ $t('portfolio.impactFirstLine') }}</span>
                                <span>{{ $t('portfolio.impactSecondLine') }}</span>
                            </h3>
                            <div class="key-info-content" v-html="data.impact"></div>
                        </div>
                        <div class="key-info">
                            <h3 class="key-info-title">
                                <span>{{ $t('portfolio.wayFirstLine') }}</span>
                                <span>{{ $t('portfolio.waySecondLine') }}</span>
                            </h3>
                            <div class="key-info-content" v-html="data.way"></div>
                        </div>
                    </div>
                </div>
                <LayoutLinkedCompanies :companies="data.otherCompanies" />
            </div>
        </div>
    </div>
</template>

<script>
import { routeByApiModels } from '~/app/crawler/routes';
import { getIso, getSlug, setRouteParams } from '~/api/dato/helpers';
import { portfolioItemQuery } from '~/api/dato';
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
                data: { portfolioItem: data }
            } = await $dato
                .post('/', { query: portfolioItemQuery, variables: { lang, slug } })
                .then(({ data }) => data);

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
        isDesktop() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.l;
        }
    },
    head() {
        if (!this.seo.title) this.seo.title = 'Ring Capital • ' + this.data.name;

        return {
            ...this.seo
        };
    },
    layout: 'popupLike'
};
</script>

<style lang="scss" scoped>
.company-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 4rem var(--gutter);
}
.company-name {
    font-family: var(--urbanist);
    font-size: 5rem;
    line-height: 5rem;
    font-weight: 600;
}
.company-close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.3rem;
    height: 6.3rem;
    border-radius: 50%;
    border: 1px solid currentColor;
    .icon {
        width: 1.4rem;
        height: 1.4rem;
    }
}
.wrapper-intro-infos {
    position: relative;
    &::before,
    &::after {
        content: '';
        position: absolute;
        left: var(--gutter);
        right: var(--gutter);
    }
    &::before {
        top: 0;
        border-top: 1px solid currentColor;
    }
    &::after {
        bottom: 0;
        border-bottom: 1px solid currentColor;
    }
}
.wrapper-intro {
    padding: 4rem var(--gutter);
}
.company-image {
    aspect-ratio: 1 / 0.9305;
    margin-bottom: 3rem;
}
.company-title {
    font-family: var(--urbanist);
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 600;
}
.company-description {
    margin-top: 3rem;
    ::v-deep p {
        margin: 0;
    }
    ::v-deep p + p {
        margin-top: 1em;
    }
}
.wrapper-infos {
    position: relative;
    padding: 4rem var(--gutter);
    &::before {
        content: '';
        position: absolute;
        left: var(--gutter);
        right: var(--gutter);
        top: 0;
        border-top: 1px solid currentColor;
    }
}
.wrapper-company-logo {
    width: 23rem;
    height: 8.3rem;
    margin-bottom: 4rem;
    padding: 2.4rem;
    background: var(--brand-primary-blue);
}
.company-logo {
    display: block;
    width: 100%;
    height: 100%;
}
.company-infos {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.company-info {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
}
.info-title {
    font-family: var(--urbanist);
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: 600;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    min-width: 10rem;
}
.info-content {
    font-size: 1.8rem;
    line-height: 2.4rem;
    a {
        text-underline-offset: 2px;
    }
}
.wrapper-key-infos {
    padding: 0 var(--gutter);
}
.key-info {
    padding: 4rem 0;
    border-bottom: 1px solid currentColor;
}
.key-info-title {
    display: block;
    font-family: var(--urbanist);
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 700;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    > span {
        display: block;
        &:nth-child(2) {
            color: #80807b;
        }
    }
}
.key-info-content {
    ::v-deep p {
        font-size: 1.8rem;
        line-height: 2.4rem;
        margin: 0;
    }
    ::v-deep p + p {
        margin-top: 1em;
    }
}

@media (min-width: $desktop-small) {
    .company-name {
        font-size: 8rem;
        line-height: 8rem;
    }
    .wrapper-intro-infos {
        display: flex;
    }
    .wrapper-intro {
        flex: 0 0 auto;
        width: calc(8 / 12 * 100%);
    }
    .wrapper-infos {
        flex: 0 0 auto;
        width: calc(4 / 12 * 100%);
        padding-left: calc(var(--gutter) * 3);
        &::before {
            left: var(--gutter);
            right: auto;
            bottom: 0;
            border-top: 0;
            border-left: 1px solid currentColor;
        }
    }
    .company-title {
        font-size: 5rem;
        line-height: 5rem;
    }
    .wrapper-image-key-infos {
        position: relative;
        display: flex;
        align-items: center;
        padding: 6rem 0;
        &::after {
            content: '';
            position: absolute;
            left: var(--gutter);
            right: var(--gutter);
            bottom: 0;
            border-bottom: 1px solid currentColor;
        }
    }
    .wrapper-image {
        flex: 0 0 auto;
        width: calc(8 / 12 * 100%);
        padding: 0 var(--gutter);
    }
    .wrapper-key-infos {
        flex: 0 0 auto;
        width: calc(4 / 12 * 100%);
    }
    .key-info {
        &:first-child {
            padding-top: 0;
        }
        &:last-child {
            padding-bottom: 0;
            border-bottom: 0;
        }
    }
}
</style>
