<template>
    <div class="e404">
        <div class="container content-pad">
            <div v-if="errorData" class="e404-content">
                <h1 v-if="errorData.title" class="basic-h1">{{ errorData.title }}</h1>
                <h2 v-if="errorData.text" class="basic-subtitle">{{ errorData.text }}</h2>
                <div class="e404-btn">
                    <LinkTo v-if="errorData.link" class="btn-rounded" :link="errorData.link" />
                </div>
            </div>
        </div>
        <LayoutOverlay class="layout-overlay" />
    </div>
</template>

<script>
import { getError404Data } from '~/api/dato/helpers/data';

export default {
    props: {
        error: {
            type: Object,
            required: true
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
.e404-btn {
    margin-top: 4rem;
}

.basic-subtitle {
    margin-top: 2rem;
}

@media (min-width: $desktop) {
    .e404-content {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
