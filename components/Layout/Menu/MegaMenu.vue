<template>
    <div class="menu-item">
        <span class="label">{{ data.megaMenu.title }}</span>
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
