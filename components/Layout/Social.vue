<template>
    <ul v-if="content" class="social">
        <li v-for="link in content.socialLinks" :key="link.title">
            <a class="social-link" :class="link.iconName" :href="link.link" :aria-label="link.title"
                ><Icon :name="link.iconName"
            /></a>
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
    margin: 0;
    padding: 0;
    > li {
        flex: 0 0 auto;
        margin: 7px 40px 0 0;
    }
    &.white {
        .social-link {
            fill: $white;
        }
    }
}
.social-link {
    display: block;
    fill: $neptune;
    &.linkedin {
        width: 24px;
        height: 27px;
    }
    &.twitter {
        width: 28px;
        height: 24px;
    }
    &.instagram {
        width: 27px;
        height: 27px;
    }
    &.facebook {
        width: 27px;
        height: 27px;
    }
    &.medium {
        width: 32px;
        height: 18px;
    }
    > svg {
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>
