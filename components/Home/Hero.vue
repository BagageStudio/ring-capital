<template>
    <div class="container">
        <home-schema :links="data.funds" :selected="selected" />
        <h1 class="basic-h1 content-pad" v-html="$options.filters.nestedTitle(data.title)"></h1>
        <div class="hero-content">
            <FundCards :content="data.funds" @slowMo="setSelected" @resetSpeed="selected = ''" />

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
    },
    data: () => ({
        selected: ''
    }),
    methods: {
        setSelected(selected) {
            this.selected = selected;
        }
    }
};
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    padding-top: 70px;
}
.basic-h1 {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    font-weight: 300;
    line-height: 50px;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -50px;
        height: 50px;
        background-color: $dark;
    }
    /deep/ p {
        position: relative;
        display: inline;
        margin: 0;
        &:nth-child(1) {
            z-index: 2;
        }
        &:nth-child(2) {
            z-index: 1;
        }
    }
    /deep/ span {
        position: relative;
        padding: 2px 0 6px;
        box-shadow: 10px 0 0 $dark, -20px 0 0 $dark;
        background-color: $dark;
        &::before {
            // content: '';
            position: absolute;
            top: -7px;
            left: -20px;
            right: -10px;
            bottom: -10px;
            background-color: $dark;
            z-index: -1;
        }
    }
    /deep/ strong {
        color: $saturn;
        font-weight: 300;
    }
}
.schema {
    position: absolute;
    width: 100%;
    min-width: 450px;
    top: -4vw;
    right: 0;
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
@media (min-width: 450px) {
    .container {
        padding-top: 100px;
    }
}
@media (min-width: $tablet) {
    .basic-h1 {
        width: percentage(6/8);
        &::after {
            content: none;
        }
    }
    .container {
        padding-top: 130px;
    }
}
@media (min-width: $desktop-small) {
    .basic-h1 {
        font-size: 6.8rem;
        line-height: 70px;
        width: percentage(8/12);
    }
}

@media (min-width: $desktop) {
    .hero-content {
        display: flex;
        justify-content: space-between;
    }
    .schema {
        padding: 0 50px;
        top: -3vw;
    }
    .basic-h1 {
        margin-bottom: 90px;
        /deep/ span {
            box-shadow: 10px 0 0 $dark, -10px 0 0 $dark;
            &::before {
                left: -10px;
            }
        }
    }
    .intro {
        margin-top: 0;
        width: percentage(4/12);
    }
}

@media (min-width: $desktop-xxl) {
    .schema {
        top: -45px;
    }
}
</style>
