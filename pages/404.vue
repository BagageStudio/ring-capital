<template>
    <div class="e404">
        <div class="container">
            <div class="content-pad">
                <h1 class="e404-title">{{ errorData.title }}</h1>
                <h2 v-if="errorData.text" class="h1">{{ errorData.text }}</h2>
                <div class="e404-btn">
                    <LinkTo v-if="errorData.link" class="btn-block" :link="errorData.link" />
                </div>
            </div>
        </div>
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
    beforeCreate() {}
};
</script>

<style lang="scss" scoped>
.e404-title {
    font-size: 6rem;
}
.e404-btn {
    margin-top: 30px;
}
@media (min-width: $tablet) {
    .e404-title {
        font-size: 11rem;
    }
    .e404-btn {
        margin-top: 70px;
    }
}
</style>
