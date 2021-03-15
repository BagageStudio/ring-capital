<template>
    <a
        v-if="link"
        :href="link.file.url"
        :aria-label="link.title"
        target="_blank"
        rel="noopener noreferrer"
        @click="$emit('click')"
    >
        <div class="deco"></div>
        <span class="text">
            <span class="btn-label">{{ link.label }}</span>
        </span>
        <slot />
    </a>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    }
};
</script>
