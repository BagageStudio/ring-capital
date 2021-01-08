<template>
    <div class="menu-item">
        <span class="label">{{ data.label }}</span>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
};
</script>
