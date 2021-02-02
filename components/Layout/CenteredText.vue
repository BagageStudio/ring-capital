<template>
    <div v-if="content" class="wrapper-centered-text">
        <SchemaCommunity />
        <div class="container">
            <h1 class="basic-h3 underlined orbit content-title">
                <span>{{ content.title }}</span>
            </h1>
            <div v-if="content.text" class="content-text neptune" v-html="content.text"></div>
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
.wrapper-centered-text {
    position: relative;
    padding: 160px 0;
    text-align: center;
    background: $white;
}

.schema {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.content-title {
    margin: 0 0 30px;
    padding: 0 $gutter;
}
.content-text {
    padding: 0 $gutter;
    font-size: 1.6rem;
    line-height: 26px;
}

@media (min-width: $tablet) {
    .content-text {
        width: percentage(6/8);
        margin: 0 auto;
    }
}
@media (min-width: $desktop) {
    .wrapper-centered-text {
        padding: 120px 0;
    }
    .content-text {
        width: percentage(8/12);
    }
}
@media (min-width: $desktop-large) {
    .content-text {
        width: percentage(6/12);
    }
}
</style>
