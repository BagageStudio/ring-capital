<template>
    <div v-if="content" class="wrapper-table">
        <div class="container">
            <h2 v-if="content.tableTitle" class="basic-h2 underlined strong-saturn" v-html="content.tableTitle"></h2>
            <div v-if="isM" class="title-line">
                <span class="title">{{ content.col2Title }}</span>
                <span class="title">{{ content.col3Title }}</span>
                <span class="title">{{ content.col4Title }}</span>
            </div>
            <ul v-if="content.tableEntries" class="table-entries">
                <li v-for="tableEntry in content.tableEntries" :key="tableEntry.id" class="table-entry">
                    <span class="company-name basic-h4">{{ tableEntry.companyName }}</span>
                    <span class="table-line">
                        <span v-if="!isM" class="table-title">{{ content.col2Title }}</span>
                        <span class="table-content">{{ tableEntry.industrySector }}</span>
                    </span>
                    <span class="table-line">
                        <span v-if="!isM" class="table-title">{{ content.col3Title }}</span>
                        <span class="table-content">{{ tableEntry.soldTo }}</span>
                    </span>
                    <span class="table-line">
                        <span v-if="!isM" class="table-title">{{ content.col4Title }}</span>
                        <span class="table-content">{{ tableEntry.soldYear }}</span>
                    </span>
                </li>
            </ul>
            <div class="wrapper-btn">
                <button type="button" class="btn-line"><span class="deco"></span>See more</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true }
    },
    computed: {
        isM() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.m;
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-table {
    padding: 70px 0 60px;
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
    padding: 40px $gutter;
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
        display: flex;
        align-items: baseline;
        padding: 40px 0;
        &::before,
        &::after {
            left: $gutter;
            right: $gutter;
        }
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
