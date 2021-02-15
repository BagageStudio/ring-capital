<template>
    <div v-if="data" class="wrapper-sustainableEngagement">
        <div class="container">
            <h1>Sustainable Engagement</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    computed: {}
};
</script>

<style lang="scss" scoped></style>
