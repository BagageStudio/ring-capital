<template>
    <ModulesDoubleOrbit
        v-if="data._modelApiKey === 'double_orbit'"
        :key="$route.fullPath"
        :content="data"
        class="module module-double-orbit"
    />
    <ModulesTextImage
        v-else-if="data._modelApiKey === 'text_image'"
        :key="$route.fullPath"
        :content="data"
        class="module module-text-image"
    />
    <ModulesAccordionsModule
        v-else-if="data._modelApiKey === 'accordions_module'"
        :key="$route.fullPath"
        :content="data"
        class="module module-accordions"
    />
    <LayoutMosaic
        v-else-if="data._modelApiKey === 'mosaic'"
        :key="$route.fullPath"
        :content="data"
        class="module module-mosaic"
    />
    <ModulesTextModule
        v-else-if="data._modelApiKey === 'text_module'"
        :key="$route.fullPath"
        :content="data"
        class="module module-text"
    />
    <ModulesUseCasesModule
        v-else-if="data._modelApiKey === 'use_cases_module'"
        :key="$route.fullPath"
        :content="data"
        class="module module-use-cases"
    />
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
