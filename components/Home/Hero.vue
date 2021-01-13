<template>
    <div class="container">
        <h1 class="basic-h1" v-html="data.title"></h1>

        <FundCards :content="data.funds" />

        <div class="intro">
            <h4 v-if="data.introTitle" class="basic-h4">{{ data.introTitle }}</h4>
            <div v-if="data.introText" v-html="data.introText"></div>
            <nuxt-link v-if="data.introAnchorLabel" :to="{ path: '/', hash: '#' }">{{
                data.introAnchorLabel
            }}</nuxt-link>
        </div>

        <LogosList :content="data.companies" />
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
};
</script>
