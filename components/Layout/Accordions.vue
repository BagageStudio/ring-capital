<template>
    <div v-if="content" class="wrapper-accordions">
        <Accordion v-for="accordion in content" :key="accordion.id" :content="accordion" />
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped></style>
