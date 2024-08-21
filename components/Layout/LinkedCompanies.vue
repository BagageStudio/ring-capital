<template>
    <div class="wrapper-other-companies">
        <div class="wrapper-title-portfolio">
            <h2 class="other-companies-title">{{ $t('portfolio.otherCompaniesTitle') }}</h2>
            <div class="wrapper-portfolio-link content-pad">
                <nuxt-link :to="portfolioListLink" class="btn-underlined">
                    {{ $t('portfolio.seeAllLabel') }}
                </nuxt-link>
            </div>
        </div>
        <div class="other-companies">
            <LayoutCompanyRow v-for="company in companies" :key="company.id" :company="company" />
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
    margin-bottom: 4rem;
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
        margin-bottom: 0;
    }
}
</style>
