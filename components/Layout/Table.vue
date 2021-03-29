<template>
    <div v-if="content" class="wrapper-table">
        <div class="container">
            <h2 v-if="content.tableTitle" class="basic-h2 underlined strong-saturn" v-html="content.tableTitle"></h2>
            <div v-if="isM" class="title-line">
                <span class="title">{{ content.col2Title }}</span>
                <span class="title">{{ content.col3Title }}</span>
                <span class="title">{{ content.col4Title }}</span>
            </div>
            <ul v-if="content.tableEntries && tableReady" class="table-entries">
                <li v-for="tableEntryNb in currentCompaniesVisible" :key="tableEntryNb" class="table-entry">
                    <nuxt-link :to="portfolioLink(content.tableEntries[tableEntryNb - 1].company)" class="table-link">
                        <span class="company-name basic-h4">
                            {{ content.tableEntries[tableEntryNb - 1].companyName }}
                        </span>
                        <span class="table-line">
                            <span v-if="!isM" class="table-title">{{ content.col2Title }}</span>
                            <span class="table-content">
                                {{ content.tableEntries[tableEntryNb - 1].industrySector }}
                            </span>
                        </span>
                        <span class="table-line">
                            <span v-if="!isM" class="table-title">{{ content.col3Title }}</span>
                            <span class="table-content">{{ content.tableEntries[tableEntryNb - 1].soldTo }}</span>
                        </span>
                        <span class="table-line">
                            <span v-if="!isM" class="table-title">{{ content.col4Title }}</span>
                            <span class="table-content">{{ content.tableEntries[tableEntryNb - 1].soldYear }}</span>
                        </span>
                    </nuxt-link>
                </li>
            </ul>
            <div v-if="currentCompaniesVisible < nbCompanies" class="wrapper-btn">
                <button type="button" class="btn-line" @click="nextCompanies">
                    <span class="deco"></span>See more
                </button>
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
    data: () => ({
        currentCompaniesVisible: 5,
        nbCompanies: 0,
        tableReady: false
    }),
    computed: {
        isM() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.m;
        }
    },
    mounted() {
        this.nbCompanies = this.content.tableEntries.length;
        if (this.currentCompaniesVisible >= this.nbCompanies) {
            this.currentCompaniesVisible = this.nbCompanies;
        }
        this.tableReady = true;
    },
    methods: {
        nextCompanies() {
            if (this.currentCompaniesVisible < this.nbCompanies) {
                this.currentCompaniesVisible =
                    this.currentCompaniesVisible + 5 <= this.nbCompanies
                        ? this.currentCompaniesVisible + 5
                        : this.nbCompanies;
            }
        },
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
.wrapper-table {
    padding: 70px 0 60px;
    color: $white;
    background: $dark;
}
.basic-h2 {
    padding: 0 $gutter;
}

.table-entries {
    margin: 0;
    padding: 0;
}
.table-entry {
    position: relative;
    &::before,
    &::after {
        position: absolute;
        left: 0;
        right: 0;
        border-top: 1px solid $neptune;
    }
    &::before {
        content: '';
        top: 0;
    }
    &::after {
        content: none;
        bottom: 0;
    }
    &:last-child {
        &::after {
            content: '';
        }
    }
}
.table-link {
    display: block;
    padding: 40px $gutter;
    text-decoration: none;
    transition: opacity 0.2s ease-out;
    &:hover {
        opacity: 0.7;
    }
    &:focus {
        outline: none;
    }
}
.company-name {
    display: block;
    margin-bottom: 40px;
}
.table-line {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 10px 0;
    font-family: $helvetica-neue;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 26px;
    > span {
        flex: 0 0 auto;
        width: 50%;
    }
}
.table-title {
    color: $neptune;
    padding-right: $gutter;
}
.table-content {
    text-align: right;
    padding-left: $gutter;
}
.wrapper-btn {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding: 0 $gutter;
}

@media (min-width: $tablet) {
    .wrapper-table {
        padding: 120px 0;
    }
    .title-line {
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
        padding: 20px 0;
        color: $neptune;
        font-family: $helvetica-neue;
        font-weight: 400;
        font-size: 1.4rem;
        .title {
            width: percentage(2/8);
            padding: 0 $gutter;
        }
    }
    .table-entries {
        width: 100%;
    }
    .table-entry {
        &::before,
        &::after {
            left: $gutter;
            right: $gutter;
        }
    }
    .table-link {
        display: flex;
        align-items: baseline;
        padding: 40px 0;
    }
    .company-name {
        width: percentage(2/8);
        margin: 0;
        padding: 0 $gutter;
    }
    .table-line {
        display: block;
        width: percentage(2/8);
        padding: 0 $gutter;
    }
    .table-content {
        text-align: left;
        width: 100%;
        padding: 0;
    }
}
@media (min-width: $desktop) {
    .title-line {
        width: calc(100% + 20px);
        margin-left: -10px;
        .title {
            width: percentage(2/9);
            padding: 0 20px;
        }
    }
    .table-entries {
        width: calc(100% + 20px);
        margin-left: -10px;
    }
    .table-entry {
        &::before,
        &::after {
            left: 20px;
            right: 20px;
        }
    }
    .company-name {
        width: percentage(3/9);
        padding: 0 20px;
    }
    .table-line {
        width: percentage(2/9);
        padding: 0 20px;
    }
}
</style>
