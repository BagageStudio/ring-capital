<template>
    <div class="fund-targets">
        <div class="container">
            <h2 class="basic-h2 underlined">
                <span>{{ data.targetsTitle }}</span>
            </h2>
            <p>{{ data.targetsDescription }}</p>
            <div class="targets-cols">
                <div class="target-col">
                    <span>{{ data.targetsFirstColumnTitle }}</span>
                    <div v-for="item in data.targetsFirstColumnItems" :key="item.id">{{ item.text }}</div>
                </div>
                <div class="target-col">
                    <span>{{ data.targetsSecondColumnTitle }}</span>
                    <div v-for="item in data.targetsSecondColumnItems" :key="item.id">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </div>
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
<style lang="scss" scoped></style>
