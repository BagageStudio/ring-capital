<template>
    <div class="fund-hero" :style="{ '--fundColor': data.color.hex }">
        <div class="container">
            <FundSchemaDesktop :color="data.color.hex" :logo="data.logo" />
            <div class="content-pad">
                <!-- <FundSchemaMobile :color="data.color.hex" :logo="data.logo" /> -->
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
    ::v-deep strong {
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
@media (min-width: $desktop) {
    .fund-hero {
        position: relative;
        padding-top: 90px;
    }
    .hero-text {
        width: percentage(6/12);
    }
    .hero-keyfigures {
        width: percentage(4/12);
        margin-bottom: 160px;
        padding-left: 0;
        padding-right: 0;
        .key-figures {
            width: 100%;
        }
    }
    .fund-schema-desktop {
        position: absolute;
        top: -95px;
        right: -25px;
        width: 60%;
        max-width: 900px;
    }
}
</style>
