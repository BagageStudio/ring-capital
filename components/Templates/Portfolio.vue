<template>
    <div v-if="data" class="wrapper-portfolio">
        <div class="container">
            <div class="hero-portfolio">
                <h1 class="basic-h1 underlined neptune">
                    <span>{{ data.title }}</span>
                </h1>
                <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
            </div>
            <LayoutDetailList class="shape-two" :content="data.companies" random overlay />
        </div>
        <LayoutTable :content="data" />
        <LayoutMosaic :content="data.mosaic" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    computed: {},
    head() {
        return {
            htmlAttrs: {
                class: 'lightmode'
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.wrapper-portfolio {
    color: $orbit;
}

.hero-portfolio {
    padding: 20px $gutter 40px;
}

@media (min-width: $desktop-small) {
    .hero-portfolio {
        width: math.percentage(math.div(6, 9));
        min-height: 350px;
        padding: 90px #{2 * $gutter} 80px #{$gutter};
    }
}
@media (min-width: $desktop-large) {
    .hero-portfolio {
        width: math.percentage(math.div(4, 9));
    }
}
</style>
