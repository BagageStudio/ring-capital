<template>
    <div v-if="content" class="wrapper-fifty-fifty">
        <div class="container">
            <div class="container-fifty-fifty">
                <div v-for="fiftyFifty in content" :key="fiftyFifty.id" class="fifty-fifty">
                    <div class="wrapper-txt-ff">
                        <h3 class="ff-title basic-h3 underlined strong-neptune" v-html="fiftyFifty.title"></h3>
                        <div class="ff-text neptune" v-html="fiftyFifty.text"></div>
                    </div>
                    <div class="wrapper-accordions-ff">
                        <Accordions class="on-white" :content="fiftyFifty.accordions" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Array, required: true }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-fifty-fifty {
    padding: 80px 0 40px;
    color: $orbit;
    background: $grey;
}
.container-fifty-fifty {
    padding: 0 $gutter;
}
.fifty-fifty {
    margin-bottom: 80px;
    &:last-child {
        margin-bottom: 0;
    }
}
.ff-title {
    margin-bottom: 30px;
}
.wrapper-accordions-ff {
    margin-top: 50px;
}

@media (min-width: $tablet) {
    .container-fifty-fifty {
        padding: 0;
    }
    .fifty-fifty {
        display: flex;
        justify-content: space-between;
        &:nth-child(odd) {
            .wrapper-txt-ff {
                padding-right: calc(#{percentage(1/8)} + #{$gutter});
            }
        }
        &:nth-child(even) {
            flex-direction: row-reverse;
            .wrapper-txt-ff {
                padding-left: calc(#{percentage(1/8)} + #{$gutter});
            }
        }
    }
    .wrapper-txt-ff,
    .wrapper-accordions-ff {
        flex: 0 0 auto;
        width: percentage(4/8);
        padding: 0 $gutter;
    }
    .wrapper-accordions-ff {
        margin-top: 0;
    }
}
@media (min-width: $desktop) {
    .wrapper-fifty-fifty {
        padding: 160px 0 80px;
    }
    .fifty-fifty {
        margin-bottom: 160px;
        &:nth-child(odd) {
            .wrapper-txt-ff {
                padding-right: calc(#{percentage(2/12)} + #{$gutter});
            }
        }
        &:nth-child(even) {
            .wrapper-txt-ff {
                padding-left: calc(#{percentage(2/12)} + #{$gutter});
            }
        }
    }
    .wrapper-txt-ff,
    .wrapper-accordions-ff {
        width: percentage(6/12);
    }
}
@media (min-width: $desktop-large) {
    .fifty-fifty {
        margin-bottom: 160px;
        &:nth-child(odd) {
            .wrapper-txt-ff {
                padding: 0 calc(#{percentage(2/12)} + #{$gutter}) 0 calc(#{percentage(1/12)} + #{$gutter});
            }
            .wrapper-accordions-ff {
                padding-right: calc(#{percentage(1/12)} + #{$gutter});
            }
        }
        &:nth-child(even) {
            .wrapper-txt-ff {
                padding: 0 calc(#{percentage(1/12)} + #{$gutter}) 0 calc(#{percentage(2/12)} + #{$gutter});
            }
            .wrapper-accordions-ff {
                padding-left: calc(#{percentage(1/12)} + #{$gutter});
            }
        }
    }
}
</style>
