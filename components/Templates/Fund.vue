<template>
    <div class="wrapper-fund">
        <FundHero :data="data" />
        <FundTargets :data="data" />
        <LinkedCompanies :companies="data.companies" :title="data.companiesTitle" />
        <Mosaic :content="data.mosaic" />
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
