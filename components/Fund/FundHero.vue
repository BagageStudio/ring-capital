<template>
    <div class="fund-hero" :style="{ '--fundColor': data.color.hex }">
        <div class="container">
            <div class="content-pad">
                <FundSchema :color="data.color.hex" :logo="data.logo" />
            </div>
            <div class="hero-text content-pad">
                <h1 class="basic-h1" v-html="$options.filters.nestedTitle(data.title)"></h1>
                <p class="basic-subtitle">{{ data.fullDescription }}</p>
            </div>
            <div class="hero-keyfigures content-pad">
                <KeyFigures :content="data.keyFigures" :color="data.color.hex" />
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
.basic-h1 {
    /deep/ strong {
        color: var(--fundColor);
    }
}
.basic-subtitle {
    margin-bottom: 40px;
}
.hero-keyfigures {
    margin-bottom: 70px;
}
.fund-schema {
    position: relative;
    margin-left: -20px;
    width: 100%;
    max-width: 700px;
    margin-bottom: 10px;
}
@media (min-width: $tablet) {
    .hero-keyfigures {
        width: percentage(6/8);
    }
}
</style>
