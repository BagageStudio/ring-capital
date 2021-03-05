<template>
    <div>
        <Portfolio :data="data" />
        <Overlay />
    </div>
</template>
<script>
import { camalize, pascalize } from '@stereorepo/sac';
import { getIso, getSlug, setRouteParams } from '~/api/dato/helpers';

import slugToModelApiKey from '~/api/dato/helpers/slugToModelApiKey.json';
import { getQuery } from '~/api/dato';
import handleSeo from '~/assets/js/seo';
import { routeByApiModels } from '~/app/crawler/routes';

export default {
    async asyncData(context) {
        const { $dato, error, route } = context;
        const finalData = {};

        // Getting the right locale iso
        const lang = getIso.call(context);

        // Getting the slug
        const slug = getSlug.call(context);

        // Ici ton _modelApiKey
        finalData.template = slugToModelApiKey[lang][slug];

        try {
            const { data } = await $dato
                .post('/', { query: getQuery(finalData.template), variables: { lang, slug } })
                .then(({ data }) => data);

            finalData.data = data[camalize(finalData.template)];
            finalData.seo = handleSeo({ route: route.fullPath, seo: finalData.data.seo, lang });
            finalData.template = pascalize(finalData.template);
        } catch (e) {
            return error({ statusCode: 404, message: e });
        }

        if (finalData.template === 'Landing') {
            finalData.data.newsCaseStudies = finalData.data.newsCaseStudies.map(
                ({ slug, _modelApiKey, ...postProps }) => ({
                    _modelApiKey,
                    ...postProps,
                    url: context.app.localePath({
                        name: routeByApiModels[_modelApiKey].routerFormat,
                        params: { post: slug }
                    })
                })
            );
        }

        // Getting raw slugs for the current page from Dato
        const datoLocales = finalData.data._allSlugLocales;
        await setRouteParams.call(context, datoLocales);

        return finalData;
    },
    data: () => ({
        data: {},
        seo: {}
    }),
    head() {
        if (!this.seo.title) this.seo.title = 'Ring - ' + this.data.title;

        return {
            ...this.seo
        };
    }
};
</script>
