<template>
    <div v-if="content" class="mod-investors">
        <div class="container">
            <div class="wrapper-txt">
                <h2
                    v-if="content.investorsTitle"
                    class="basic-h2 mod-investors-title underlined saturn"
                    v-html="content.investorsTitle"
                ></h2>
                <p v-if="content.investorsSubtitle" class="basic-subtitle">{{ content.investorsSubtitle }}</p>
                <LinkTo
                    v-if="content.investorsLink"
                    class="btn-block primary mod-investors-btn"
                    :link="content.investorsLink"
                />
            </div>
            <div class="wrapper-list">
                <LogosList :content="content.investors" :size="'medium'" :has-link="false" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: { type: Object, required: true }
    }
};
</script>

<style lang="scss" scoped>
.mod-investors {
    padding: 70px 0;
    color: $white;
    background: $dark;
}
.wrapper-txt {
    padding: 0 $gutter;
}
.mod-investors-title {
    margin-bottom: 40px;
}
.mod-investors-btn {
    margin-top: 20px;
}
.wrapper-list {
    margin-top: 55px;
}

@media (min-width: $desktop-small) {
    .mod-investors {
        .container {
            display: flex;
            align-items: center;
        }
    }
    .wrapper-txt {
        width: percentage(3/8);
    }
    .wrapper-list {
        width: percentage(5/8);
        margin: 0;
    }
}
@media (min-width: $desktop) {
    .mod-investors {
        padding: 140px 0 155px;
    }
    .wrapper-txt {
        width: percentage(6/12);
        padding-right: calc(#{percentage(1/12)} + #{$gutter});
    }
    .wrapper-list {
        width: percentage(6/12);
    }
}
@media (min-width: $desktop-xxl) {
    .wrapper-txt {
        width: percentage(5/12);
        padding: 0 calc(#{percentage(1/12)} + #{$gutter});
    }
    .wrapper-list {
        width: percentage(7/12);
        padding-right: percentage(1/12);
    }
}
</style>
