<template>
    <div v-if="data">
        <div class="container"></div>
    </div>
</template>

<script>
import { getIso, getSlug, setRouteParams } from '~/api/dato/helpers';
import { companyQuery } from '~/api/dato';
import handleSeo from '~/assets/js/seo';

export default {
    async asyncData(context) {
        const { $dato, error, route } = context;
        const finalData = {};

        // Getting the right locale iso
        const lang = getIso.call(context);

        // Getting the slug
        const slug = getSlug.call(context);

        try {
            const {
                data: { company: data }
            } = await $dato.post('/', { query: companyQuery, variables: { lang, slug } }).then(({ data }) => data);

            finalData.data = data;
            finalData.seo = handleSeo({ route: route.fullPath, seo: finalData.data.seo });
        } catch (e) {
            return error({ statusCode: 404 });
        }

        // Getting raw slugs for the current page from Dato
        const datoLocales = finalData.data._allSlugLocales;
        await setRouteParams.call(context, datoLocales);

        return finalData;
    },
    data() {
        return {
            data: {},
            seo: {}
        };
    },
    head() {
        if (!this.seo.title) this.seo.title = 'Ring - ' + this.data.title;

        return {
            ...this.seo
        };
    }
};
</script>

<style lang="scss" scoped></style>
