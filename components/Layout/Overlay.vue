<template>
    <div class="loading-overlay"></div>
</template>

<style lang="scss" scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #19232f;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    z-index: 11;
    pointer-events: none;
}
</style>
