<template>
    <img src="/ring-logo.png" class="logo-ring" />
</template>

<script>
export default {
    props: {}
};
</script>

<style lang="scss" scoped>
.logo-ring {
    @media (min-width: 1100px) {
        scale: 1.8;
    }
    scale: 1.2;
}
</style>
