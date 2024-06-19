<template>
    <div>
        <h1>Home</h1>
        {{ data }}
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
                data: { home: homepageData }
            } = await $dato.post('/', { query: homepageQuery, variables: { lang } }).then(({ data }) => data);

            finalData.data = homepageData;

            // finalData.seo = handleSeo({ route: route.fullPath, seo: finalData.data.seo, lang });
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
    mounted() {
        const _hsq = (window._hsq = window._hsq || []);
        _hsq.push(['setPath', this.$route.path]);
        _hsq.push(['trackPageView']);
    },
    beforeDestroy() {},
    methods: {},
    head() {
        // if (!this.seo.title) this.seo.title = 'Ring Capital • ' + this.data.title;
        // return {
        //     ...this.seo
        // };
    }
};
</script>
