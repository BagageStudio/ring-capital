<template>
    <div class="container">
        <home-schema class="schema" :links="data.funds" />
        <h1 class="basic-h1 content-pad" v-html="data.title"></h1>

        <FundCards :content="data.funds" />

        <div class="intro content-pad">
            <h4 v-if="data.introTitle" class="basic-h4">{{ data.introTitle }}</h4>
            <div v-if="data.introText" class="intro-text" v-html="data.introText"></div>
            <nuxt-link
                v-if="data.introAnchorLabel"
                class="enter-orbit"
                :to="{ path: '/', hash: '#collective-intelligence' }"
                >{{ data.introAnchorLabel }}</nuxt-link
            >
        </div>

        <LogosList :content="data.companies" />
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
.container {
    position: relative;
    padding-top: 100px;
}
.basic-h1 {
    background-color: $dark;
}
.schema {
    position: absolute;
    top: -35px;
    left: 0;
    z-index: -1;
}
.intro {
    margin-top: 56px;
    .basic-h4 {
        margin-bottom: 35px;
    }
}
.intro-text {
    color: $neptune;
    margin-bottom: 35px;
}
.enter-orbit {
    display: flex;
    align-items: center;
    font-family: $space;
    color: $saturn;
    text-decoration: none;
    &::before {
        content: '';
        height: 1px;
        width: 85px;
        background-color: $saturn;
        margin-right: 20px;
    }
}
</style>
