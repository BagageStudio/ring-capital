<template>
    <DoubleOrbit
        v-if="data._modelApiKey === 'double_orbit'"
        :key="$route.fullPath"
        :data="data"
        class="module module-double-orbit"
    />
    <TextImage
        v-else-if="data._modelApiKey === 'text_image'"
        :key="$route.fullPath"
        :data="data"
        class="module module-text-image"
    />
    <AccordionsModule
        v-else-if="data._modelApiKey === 'accordions_module'"
        :key="$route.fullPath"
        :data="data"
        class="module module-accordions"
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
