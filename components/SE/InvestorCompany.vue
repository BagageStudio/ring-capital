<template>
    <div class="wrapper-invest-co">
        <div class="container">
            <div class="content-invest-co">
                <div class="wrapper-col left">
                    <h3 v-if="data.section2LeftTitle" class="basic-h3 underlined">
                        <span>{{ data.section2LeftTitle }}</span>
                    </h3>
                    <p v-if="data.section2LeftSubtitle" class="basic-subtitle">
                        {{ data.section2LeftSubtitle }}
                    </p>
                    <Accordions class="invest-co-accordions" :content="data.section2LeftAccordions" />
                </div>
                <div class="wrapper-col right">
                    <h3 v-if="data.section2RightTitle" class="basic-h3 underlined">
                        <span>{{ data.section2RightTitle }}</span>
                    </h3>
                    <p v-if="data.section2RightSubtitle" class="basic-subtitle">
                        {{ data.section2RightSubtitle }}
                    </p>
                    <Accordions class="invest-co-accordions" :content="data.section2RightAccordions" />
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
.wrapper-invest-co {
    padding: 80px 0 90px;
}
.wrapper-col {
    padding: 0 $gutter;
    &.left {
        margin-bottom: 90px;
    }
}
.invest-co-accordions {
    margin-top: 50px;
}

@media (min-width: $desktop-small) {
    .content-invest-co {
        display: flex;
        align-items: flex-start;
    }
    .wrapper-col {
        width: percentage(4/8);
        &.left {
            margin-bottom: 0;
        }
    }
}
@media (min-width: $desktop) {
    .wrapper-invest-co {
        padding: 160px 0;
    }
    .wrapper-col {
        width: percentage(6/12);
    }
}
@media (min-width: $desktop-large) {
    .wrapper-col {
        width: percentage(6/12);
        padding: 0 calc(#{percentage(1/12)} + #{$gutter});
    }
    .invest-co-accordions {
        margin-top: 75px;
    }
}
</style>
