<template>
    <div class="container">
        <SchemaHero :links="data.funds" :selected="selected" />
        <h1 class="basic-h1 content-pad" v-html="$options.filters.nestedTitle(data.title)"></h1>
        <div class="hero-content">
            <LayoutFundCards :content="data.funds" @slowMo="setSelected" @resetSpeed="selected = ''" />

            <div class="intro content-pad">
                <span v-if="data.introTitle" class="intro-title basic-h4">{{ data.introTitle }}</span>
                <div v-if="data.introText" class="intro-text" v-html="data.introText"></div>
                <nuxt-link
                    v-if="data.introAnchorLabel"
                    class="enter-orbit"
                    :to="{ path: '/', hash: '#collective-intelligence' }"
                    ><span class="deco"></span>{{ data.introAnchorLabel }}</nuxt-link
                >
            </div>
        </div>
        <div class="wrapper-logos">
            <LayoutLogosList :content="data.companies" />
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
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -50px;
        height: 50px;
        background-color: $dark;
    }
    ::v-deep p {
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
    ::v-deep span {
        position: relative;
        padding-top: 5px;
        box-shadow: 10px 0 0 $dark, -20px 0 0 $dark;
        background-color: $dark;
        background-position: 0% calc(74% + 0.7px);
    }
    ::v-deep strong {
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
    backface-visibility: hidden;
    transform: translateZ(0);
}
.intro {
    margin-top: 56px;
}
.intro-title {
    display: block;
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
    transition: opacity 0.3s ease-in-out;

    .deco {
        position: relative;
        display: flex;
        align-items: center;
        height: 15px;
        width: 85px;
        margin-right: 20px;
        overflow: hidden;
        &::before {
            content: '';
            height: 1px;
            width: 85px;
            background-color: currentColor;
            transform-origin: 100% 50%;
            transition: 0.2s ease-in;
        }
        &::after {
            position: absolute;
            content: '';
            left: -15px;
            height: 15px;
            width: 15px;
            background-color: $dark;
            border-radius: 50%;
        }
    }

    &:hover,
    &:focus {
        opacity: 0.8;
        .deco::before {
            transform: scaleX(0.8);
            transition: transform 0.4s ease-in-out;
        }
        .deco::after {
            transform: translateX(100px);
            transition: transform 0.6s ease-out 0.1s;
        }
    }
}

.wrapper-logos {
    padding: 55px 0 35px;
}
@media (min-width: 450px) {
    .container {
        padding-top: 100px;
    }
}
@media (min-width: $tablet) {
    .basic-h1 {
        width: math.percentage(math.div(6, 8));
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
        width: math.percentage(math.div(8, 12));
    }
    .wrapper-logos {
        padding: 100px 0 50px;
    }
}

@media (min-width: $desktop) {
    .container {
        padding-top: 170px;
    }
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
        ::v-deep span {
            box-shadow: 10px 0 0 $dark, -10px 0 0 $dark;
            &::before {
                left: -10px;
            }
        }
    }
    .intro {
        margin-top: 0;
        width: math.percentage(math.div(4, 12));
    }
}

@media (min-width: $desktop-xxl) {
    .schema {
        top: -45px;
    }
}
</style>
