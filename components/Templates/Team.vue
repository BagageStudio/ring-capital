<template>
    <div v-if="data">
        <div class="container">
            <h1 class="basic-h1" v-html="data.title"></h1>
            <DetailList :content="data.members" />
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
