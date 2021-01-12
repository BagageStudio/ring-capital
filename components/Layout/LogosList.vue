<template>
    <ul v-if="content" class="logos-list">
        <li v-for="logo in content" :key="logo.id">
            <nuxt-link :to="logo.slug" :aria-label="logo.name" class="logo-link">
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

<style lang="scss" scoped>
.logos-list {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 3px);
    padding: 0 $gutter;
    > li {
        width: calc(#{percentage(1/2)} - 3px);
        margin: 0 3px 3px 0;
    }
}
.logo-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding: 20px 15px;
    background: $orbit;
    &:hover,
    &:focus {
        > img {
            opacity: 0.7;
        }
    }
    > img {
        max-width: 100%;
        max-height: 100%;
        transition: opacity 0.2s ease-out;
    }
}

@media (min-width: $tablet) {
    .logos-list {
        > li {
            width: calc(#{percentage(1/3)} - 3px);
        }
    }
}
@media (min-width: $desktop) {
    .logo-link {
        height: 100px;
        padding: 35px 25px;
    }
}
@media (min-width: $desktop-large) {
    .logos-list {
        > li {
            width: calc(#{percentage(1/6)} - 3px);
        }
    }
}
</style>
