<template>
    <div class="wrapper-fund">
        <FundHero :data="data" />
        <FundTargets :data="data" />
        <Video v-if="data.video" :content="data.video" />
        <LinkedCompanies v-if="data.companies.length" :companies="data.companies" :title="data.companiesTitle" dark />
        <Crew v-if="data.crewSections.length" :content="data" :fund-color="data.color.hex" />
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
