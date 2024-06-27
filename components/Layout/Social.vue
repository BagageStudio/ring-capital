<template>
    <ul v-if="content" class="social">
        <li v-for="link in content.socialLinks" :key="link.title">
            <a
                class="social-link"
                :class="link.iconName"
                :href="link.link"
                :aria-label="link.title"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon :name="link.iconName" />
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.social {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem 2rem;
    margin: 0;
    padding: 0;
    > li {
        flex: 0 0 auto;
    }
}
.social-link {
    display: block;
    fill: currentColor;
    &.linkedin {
        width: 15px;
        height: 15px;
    }
    &.twitter {
        width: 15px;
        height: 13px;
    }
    &.instagram {
        width: 15px;
        height: 15px;
    }
    &.facebook {
        width: 15px;
        height: 15px;
    }
    &.medium {
        width: 15px;
        height: 15px;
    }
    > svg {
        display: block;
        width: 100%;
        height: 100%;
        transition: fill 0.2s ease-out;
    }
}
</style>
