<template>
    <div class="e404">
        <div class="container">
            <div v-if="errorData" class="e404-content">
                <h1 v-if="errorData.title" class="e404-title saturn">{{ errorData.title }}</h1>
                <h2 v-if="errorData.text" class="h1">{{ errorData.text }}</h2>
                <div class="e404-btn">
                    <LinkTo v-if="errorData.link" class="btn-block" :link="errorData.link" />
                </div>
            </div>
        </div>
        <Overlay />
    </div>
</template>

<script>
import { getError404Data } from '~/api/dato/helpers/data';

export default {
    props: {
        error: {
            type: Object,
            required: false,
            default: () => ({})
        }
    },
    async fetch() {
        try {
            this.errorData = await getError404Data.call(this);
        } catch (error) {}
    },
    data() {
        return {
            errorData: null
        };
    },
    layout: 'errorLayout'
};
</script>

<style lang="scss" scoped>
.e404 {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    .container {
        width: 100%;
    }
}
.e404-content {
    padding: 20px $gutter;
}
.e404-title {
    font-size: 6rem;
    line-height: 50px;
    font-weight: 300;
    margin: 0 0 30px;
    color: $saturn;
}
.e404-btn {
    margin-top: 30px;
}
@media (min-width: $tablet) {
    .e404-title {
        font-size: 11rem;
        line-height: 70px;
    }
    .e404-btn {
        margin-top: 70px;
    }
}
@media (min-width: $desktop) {
    .e404-content {
        padding: 70px calc(#{percentage(3/12)} + #{$gutter});
    }
}
</style>
