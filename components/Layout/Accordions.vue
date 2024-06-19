<template>
    <div v-if="content" :class="{ 'on-white': onWhite }" class="wrapper-accordions">
        <LayoutAccordion
            v-for="accordion in content"
            :key="accordion.id"
            :content="accordion"
            :on-white="onWhite ? true : false"
        />
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Array,
            required: true
        },
        onWhite: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped></style>
