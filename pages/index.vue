<template>
    <div class="container">
        <h1 class="basic-h1" v-html="data.title"></h1>
        <FundCards :content="data.funds" />
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

<style lang="scss" scoped></style>
