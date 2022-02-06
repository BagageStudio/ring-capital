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
