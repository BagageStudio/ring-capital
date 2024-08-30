<template>
    <ModulesThreeColumns v-if="data._modelApiKey === 'three_columns_module'" :content="data" class="module" />
    <ModulesTwoColumns v-else-if="data._modelApiKey === 'two_columns_module'" :content="data" class="module" />
    <ModulesAccordions v-else-if="data._modelApiKey === 'accordion_module'" :content="data" class="module" />
    <ModulesImageText v-else-if="data._modelApiKey === 'image_text_module'" :content="data" class="module" />
    <ModulesMosaic v-else-if="data._modelApiKey === 'mosaic_module'" :content="data" class="module" />
    <ModulesExternalContent
        v-else-if="data._modelApiKey === 'external_content_module'"
        :content="data"
        class="module"
    />
    <ModulesBigText v-else-if="data._modelApiKey === 'big_text_module'" :content="data" class="module" />
    <ModulesList v-else-if="data._modelApiKey === 'list_module'" :content="data" class="module" />
    <ModulesImageList v-else-if="data._modelApiKey === 'image_list_module'" :content="data" class="module" />
    <ModulesLogos v-else-if="data._modelApiKey === 'logos_module'" :content="data" class="module" />
    <ModulesFreeText v-else-if="data._modelApiKey === 'free_text_module'" :content="data" class="module" />
    <ModulesHero v-else-if="data._modelApiKey === 'hero_module'" :content="data" class="module" />
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
