<template>
    <ul v-if="content" class="logos-list">
        <li v-for="logo in content" :key="logo.id">
            <nuxt-link :to="logo.slug" :aria-label="logo.name" class="logo-btn">
                <img :src="logo.logo.url" :alt="logo.logo.alt" />
            </nuxt-link>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        content: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped></style>
