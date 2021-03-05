<template>
    <div class="wrapper-fund">
        <FundHero :data="data" />
        <FundTargets :data="data" />
        <LinkedCompanies v-if="data.companies.length" :companies="data.companies" :title="data.companiesTitle" dark />
        <Mosaic v-if="data.mosaic" :content="data.mosaic" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    }
};
</script>

<style lang="scss" scoped></style>
