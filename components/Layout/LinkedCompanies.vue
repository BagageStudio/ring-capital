<template>
    <div v-if="companies" class="wrapper-other-companies">
        <div class="container">
            <div class="wrapper-title-btn">
                <h2 v-if="title" class="other-refs-title h2">{{ title }}</h2>
                <nuxt-link v-if="isL" class="btn-line" to="/">
                    <span class="deco"></span>
                    {{ $t('portfolio.seeAllLabel') }}
                </nuxt-link>
            </div>
            <DetailList class="no-margin-large grid-gutter fixed-height" :content="companies" hide-tags overlay />
            <div v-if="!isL" class="wrapper-see-all">
                <nuxt-link class="btn-line" to="/">
                    <span class="deco"></span>
                    {{ $t('portfolio.seeAllLabel') }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        companies: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: false,
            default: ''
        }
    },
    computed: {
        isL() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.l;
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-other-companies {
    padding: 60px 0;
    color: $orbit;
    background: $white;
}
.wrapper-title-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 55px;
    padding: 0 $gutter;
}
.other-refs-title {
    margin: 0 20px 0 0;
}
.wrapper-see-all {
    display: flex;
    justify-content: center;
    padding: 50px $gutter 25px;
}

@media (min-width: $desktop-small) {
    .wrapper-other-companies {
        padding: 130px 0 120px;
    }
}
@media (min-width: $desktop) {
    .wrapper-other-companies {
        padding: 100px 0;
    }
}
</style>
