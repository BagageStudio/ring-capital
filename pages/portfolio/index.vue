<template>
    <div v-if="data" class="wrapper-portfolio">
        <img src="/img/ring-blue.png" class="bg-img" />
        <div class="container content-pad">
            <h1 class="basic-h1">{{ data.title }}</h1>
            <p class="portfolio-description">{{ data.description }}</p>
            <div class="filters">
                <div class="filters-title basic-tag">{{ data.filterText }} :</div>
                <div class="filters-mobile">
                    <select v-model="selectedFilter" class="filters-select basic-tag" name="filters">
                        <option v-for="filter in availableFilters" :key="filter.name" :value="filter.name">
                            {{ filter.name }}
                        </option>
                    </select>
                </div>
                <div class="filters-desktop">
                    <button
                        v-for="filter in availableFilters"
                        :key="filter.name"
                        :class="{ active: selectedFilter === filter.name }"
                        class="filters-btn basic-tag"
                        @click="setSelectedFilter(filter.name)"
                    >
                        {{ filter.name }}
                    </button>
                </div>
            </div>
        </div>
        <div class="companies-list container">
            <LayoutCompanyRow v-for="company in shownPortfolioCompanies" :key="company.id" :company="company" />
            <button v-if="showSeeMoreBtn" class="btn-rounded see-more-btn" @click="seeMoreCompanies = true">
                {{ data.seeMoreText }}
            </button>
        </div>
        <div v-if="soldCompanies.length" class="companies-sold container">
            <h2 class="basic-h2 content-pad">{{ data.companiesSoldText }}</h2>
            <LayoutCompanySoldRow v-for="company in soldCompanies" :key="company.id" :company="company" />
        </div>
        <Mods v-for="m in data.modules" :key="m.id" :data="m" />
        <LayoutOverlay />
    </div>
</template>

<script>
import { getIso, getSlug } from '~/api/dato/helpers';

import { portfolioListQuery } from '~/api/dato';
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
            const { data } = await $dato
                .post('/', { query: portfolioListQuery, variables: { lang, slug } })
                .then(({ data }) => data);

            finalData.data = data.portfolioList;
            finalData.portfolioItems = data.allPortfolioItems;
            finalData.seo = handleSeo({ route: route.fullPath, seo: finalData.data.seo, lang });
        } catch (e) {
            return error({ statusCode: 404, message: e });
        }

        return finalData;
    },
    data: () => ({
        data: {},
        seo: {},
        portfolioItems: [],
        selectedFilter: 'All',
        seeMoreCompanies: false
    }),
    computed: {
        showSeeMoreBtn() {
            return this.shownPortfolioCompanies.length < this.portfolioCompanies.length;
        },
        shownPortfolioCompanies() {
            return this.seeMoreCompanies ? this.portfolioCompanies : this.portfolioCompanies.slice(0, 6);
        },
        portfolioCompanies() {
            const currentCompanies = this.portfolioItems.filter(c => !c.sold);
            if (this.selectedFilter === 'All') return currentCompanies;
            return currentCompanies.filter(c => c.fund.find(f => f.name === this.selectedFilter));
        },
        soldCompanies() {
            return this.portfolioItems.filter(c => c.sold);
        },
        availableFilters() {
            const filters = [{ name: 'All', id: 'all' }];
            const availableFilters = this.portfolioItems.reduce((acc, cur) => {
                cur.fund.forEach(fund => {
                    if (!acc.find(f => f.id === fund.id)) acc.push(fund);
                });
                return acc;
            }, []);

            filters.push(...availableFilters);

            return filters;
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
        if (!this.selectedFilter) this.selectedFilter = this.availableFilters[0].name;
    },
    methods: {
        checkFilterInUrl() {
            if (!this.$route.query.filter) return;
            const filterToSelect = this.availableFilters.find(t => t.name === this.$route.query.filter);
            if (filterToSelect) this.selectedFilter = filterToSelect.name;
        },
        setSelectedFilter(sf) {
            this.selectedFilter = sf;
        }
    },
    head() {
        if (!this.seo.title) this.seo.title = 'Ring Capital • ' + this.data.title;

        return {
            ...this.seo
        };
    }
};
</script>

<style lang="scss" scoped>
.wrapper-portfolio {
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

.portfolio-description {
    font-size: 2.5rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
}

.filters {
    display: flex;
    align-items: center;
    border-top: 1px solid currentColor;
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

.companies-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
}

.see-more-btn {
    align-self: center;
    margin-top: 3rem;
}

.companies-sold {
    margin-bottom: 10rem;
    .basic-h2 {
        margin-bottom: 3rem;
    }
}

@media (min-width: $desktop) {
    .portfolio-description {
        margin-bottom: 4rem;
    }
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
    .companies-sold {
        margin-bottom: 15rem;
        .basic-h2 {
            margin-bottom: 4rem;
        }
    }
}
</style>
