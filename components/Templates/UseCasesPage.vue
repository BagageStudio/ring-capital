<template>
    <div v-if="data" class="wrapper-use-cases">
        <div class="container">
            <h1>Use cases</h1>
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
