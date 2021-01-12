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

        <h2 v-if="data.section1Title" class="basic-h2">{{ data.section1Title }}</h2>
        <p v-if="data.section1Subtitle" class="subtitle">{{ data.section1Subtitle }}</p>
        <div v-if="data.section1Content" v-html="data.section1Content"></div>
        <LinkTo v-if="data.section1Link" class="btn-block" :link="data.section1Link" />

        <h3 v-if="data.section2LeftTitle" class="basic-h3">{{ data.section2LeftTitle }}</h3>
        <p v-if="data.section2LeftSubtitle" class="subtitle">{{ data.section2LeftSubtitle }}</p>
        <h3 v-if="data.section2RightTitle" class="basic-h3">{{ data.section2RightTitle }}</h3>
        <p v-if="data.section2RightSubtitle" class="subtitle">{{ data.section2RightSubtitle }}</p>
        <LinkTo v-if="data.centeredLink" class="btn-block" :link="data.centeredLink" />

        <News :title="data.newsTitle" :content="data.news" />
    </div>
</template>

<script>
import { getIso } from '~/api/dato/helpers';
import { homeQuery } from '~/api/dato';
import handleSeo from '~/assets/js/seo';

export default {
    async asyncData(context) {
        const { $dato, error, route } = context;
        const finalData = {};

        // Getting the right locale iso
        const lang = getIso.call(context);

        try {
            const {
                data: { home: homeData }
            } = await $dato.post('/', { query: homeQuery, variables: { lang } }).then(({ data }) => data);

            finalData.data = homeData;

            finalData.seo = handleSeo({ route: route.fullPath, seo: finalData.data.seo });
            console.log(finalData.seo);
        } catch (e) {
            return error({ statusCode: 404, message: e });
        }

        console.log('finalData : ' + finalData);

        return finalData;
    },
    data() {
        return {
            data: {},
            seo: {}
        };
    },
    computed: {},
    watch: {},
    beforeCreate() {},
    mounted() {},
    beforeDestroy() {},
    methods: {},
    head() {
        if (!this.seo.title) this.seo.title = 'Ring - ' + this.data.title;

        return {
            ...this.seo
        };
    }
};
</script>

<style lang="scss" scoped>
.intro {
    margin-top: 55px;
    padding: 0 $gutter;
}
</style>
