<template>
    <div v-if="data" class="wrapper-jobs">
        <div class="container">
            <div class="hero-jobs">
                <h1 class="basic-h1 underlined neptune">
                    <span>{{ data.title }}</span>
                </h1>
                <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
                <div v-if="data.text" class="neptune" v-html="data.text"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    // async asyncData({ $axios }) {
    //     const jobs = await $axios.$get('https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k&62gWPDW');
    //     return { jobs };
    // },

    computed: {},
    head() {
        return {
            htmlAttrs: {
                class: 'greymode'
            }
        };
    }
};
</script>

<style lang="scss" scoped></style>
