<template>
    <div class="wrapper-other-companies">
        <div class="wrapper-title-portfolio">
            <h2 class="other-companies-title">{{ $t('portfolio.otherCompaniesTitle') }}</h2>
            <div v-if="isDesktop" class="wrapper-portfolio-link content-pad">
                <nuxt-link v-if="isDesktop" :to="portfolioListLink" class="btn-underlined">
                    {{ $t('portfolio.seeAllLabel') }}
                </nuxt-link>
            </div>
        </div>
        <div class="other-companies">
            <nuxt-link
                v-for="company in companies"
                :key="company.id"
                :to="portfolioLink(company)"
                class="other-company"
            >
                <h3 class="other-company-name">{{ company.name }}</h3>
                <div class="other-company-arrow"><Icon name="arrow-diag" /></div>
                <div class="other-company-title">{{ company.title }}</div>
                <div class="other-company-sector">
                    <span class="sector-title">{{ $t('portfolio.sectorTitle') }}</span>
                    <span class="sector-content">{{ company.sector }}</span>
                </div>
            </nuxt-link>
        </div>
        <div v-if="!isDesktop" class="wrapper-portfolio-link content-pad">
            <nuxt-link :to="portfolioListLink" class="btn-underlined">
                {{ $t('portfolio.seeAllLabel') }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { routeByApiModels } from '~/app/crawler/routes';

export default {
    props: {
        companies: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
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
    methods: {
        portfolioLink(detail) {
            if (!detail.slug) return '';
            return this.localePath({
                name: routeByApiModels[detail._modelApiKey].routerFormat,
                params: { slug: detail.slug }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-other-companies {
    margin-top: 10rem;
}
.other-companies-title {
    font-family: var(--urbanist);
    font-size: 5rem;
    line-height: 5rem;
    font-weight: 600;
    margin: 0 0 4rem;
    padding: 0 var(--gutter);
}
.wrapper-portfolio-link {
    margin-top: 4rem;
}
.other-company {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 4rem var(--gutter);
    text-decoration: none;
    &::before {
        content: '';
        position: absolute;
        left: var(--gutter);
        right: var(--gutter);
        top: 0;
        border-top: 1px solid currentColor;
    }
    &:last-child {
        &::after {
            content: '';
            position: absolute;
            left: var(--gutter);
            right: var(--gutter);
            bottom: 0;
            border-bottom: 1px solid currentColor;
        }
    }
}
.other-company-name {
    flex: 1 1 auto;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3.2rem;
}
.other-company-arrow {
    .icon {
        width: 1.2rem;
        height: 1.2rem;
    }
}
.other-company-title {
    flex: 0 0 auto;
    width: 100%;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.1rem;
}
.other-company-sector {
    display: flex;
    align-items: baseline;
    gap: 2rem;
}
.sector-title {
    font-family: var(--urbanist);
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: 700;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
}
.sector-content {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.1rem;
}

@media (min-width: $desktop-small) {
    .wrapper-other-companies {
        margin-top: 9rem;
    }
    .wrapper-title-portfolio {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 2rem;
    }
    .wrapper-portfolio-link {
        margin-top: 0;
    }
    .other-company {
        padding: 4.5rem 0;
        gap: 0;
    }
    .other-company-name {
        order: 1;
        flex: 0 0 auto;
        width: calc(2 / 12 * 100%);
        padding: 0 var(--gutter);
    }
    .other-company-title {
        order: 2;
        flex: 0 0 auto;
        width: calc(6 / 12 * 100%);
        padding: 0 var(--gutter);
    }
    .other-company-sector {
        order: 3;
        flex: 0 0 auto;
        width: calc(3 / 12 * 100%);
        padding: 0 var(--gutter);
    }
    .other-company-arrow {
        order: 4;
        flex: 0 0 auto;
        width: calc(1 / 12 * 100%);
        padding: 0 var(--gutter);
        display: flex;
        justify-content: flex-start;
    }
}
</style>
