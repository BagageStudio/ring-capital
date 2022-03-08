<template>
    <DoubleOrbit
        v-if="data._modelApiKey === 'double_orbit'"
        :key="$route.fullPath"
        :content="data"
        class="module module-double-orbit"
    />
    <TextImage
        v-else-if="data._modelApiKey === 'text_image'"
        :key="$route.fullPath"
        :content="data"
        class="module module-text-image"
    />
    <AccordionsModule
        v-else-if="data._modelApiKey === 'accordions_module'"
        :key="$route.fullPath"
        :content="data"
        class="module module-accordions"
    />
    <Mosaic
        v-else-if="data._modelApiKey === 'mosaic'"
        :key="$route.fullPath"
        :content="data"
        class="module module-mosaic"
    />
    <TextModule
        v-else-if="data._modelApiKey === 'text_module'"
        :key="$route.fullPath"
        :content="data"
        class="module module-text"
    />
    <UseCasesModule
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
