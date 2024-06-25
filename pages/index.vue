<template>
    <div>
        <HomeHero :data="data" />
        <HomeVitality :data="data" />
        <HomeInvestmentStrategy :data="data" />
        <HomeEcosystem :data="data" />
        <HomePodcast :data="data" />
        <HomeNewsletter :data="data" />
    </div>
</template>

<script>
import { getIso } from '~/api/dato/helpers';
import { homepageQuery } from '~/api/dato';
import handleSeo from '~/assets/js/seo';

export default {
    async asyncData(context) {
        const { $dato, error, route } = context;
        const finalData = {};

        // Getting the right locale iso
        const lang = getIso.call(context);

        try {
            const {
                data: { homepage: homepageData }
            } = await $dato.post('/', { query: homepageQuery, variables: { lang } }).then(({ data }) => data);

            finalData.data = homepageData;

            finalData.seo = handleSeo({ route: route.fullPath, seo: finalData.data.seo, lang });
        } catch (e) {
            return error({ statusCode: 404, message: e });
        }

        return finalData;
    },
    data() {
        return {
            data: {},
            seo: {}
        };
    },

    watch: {},
    beforeCreate() {},
    beforeDestroy() {},
    methods: {},
    head() {
        if (!this.seo.title) this.seo.title = 'Ring Capital • ' + this.data.title;
        return {
            ...this.seo
        };
    }
};
</script>
