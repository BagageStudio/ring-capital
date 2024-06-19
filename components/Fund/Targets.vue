<template>
    <div class="fund-targets">
        <div class="container">
            <div class="targets-text content-pad">
                <h2 class="basic-h2 underlined">
                    <span>{{ data.targetsTitle }}</span>
                </h2>
                <div v-html="data.targetsDescription"></div>
            </div>
            <div class="targets-cols">
                <div class="target-col content-pad">
                    <div class="col-title">{{ data.targetsFirstColumnTitle }}</div>
                    <div v-for="item in data.targetsFirstColumnItems" :key="item.id" class="col-item">
                        <Icon name="checkmark" />
                        <span>
                            {{ item.text }}
                        </span>
                    </div>
                </div>
                <div class="target-col content-pad">
                    <div class="col-title">{{ data.targetsSecondColumnTitle }}</div>
                    <div v-for="item in data.targetsSecondColumnItems" :key="item.id" class="col-item">
                        <Icon name="checkmark" />
                        <span>
                            {{ item.text }}
                        </span>
                    </div>
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
<style lang="scss" scoped>
.col-item {
    display: flex;
    align-items: flex-start;
    padding: 20px 0;
    font-size: 1.8rem;
    line-height: 26px;
    border-bottom: 1px solid rgba($neptune, 0.4);
    .icon {
        flex: 0 0 auto;
        width: 18px;
        height: 18px;
        margin-right: 15px;
        fill: $white;
    }
}
.col-title {
    font-size: 2.2rem;
    line-height: 1.18;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba($neptune, 0.4);
}
.target-col {
    margin-bottom: 60px;
}

.targets-text {
    margin-bottom: 50px;
    ::v-deep p {
        font-size: 2.2rem;
        line-height: 1.18;
        color: $neptune;
    }
    ::v-deep a {
        transition: color 0.2s;
        &:hover {
            color: $white;
        }
    }
}
@media (min-width: $desktop-small) {
    .targets-cols {
        display: flex;
    }
    .target-col {
        width: math.percentage(math.div(4, 8));
    }
    .targets-text {
        width: math.percentage(math.div(6, 8));
    }
}
@media (min-width: $desktop) {
    .target-col {
        width: math.percentage(math.div(5, 12));
        margin-right: auto;
        margin-bottom: 100px;
    }
    .targets-text {
        width: math.percentage(math.div(5, 12));
    }
}
</style>
