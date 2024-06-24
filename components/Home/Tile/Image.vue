<template>
    <div class="tile-image">
        <FastImage class="image" :image="data.image" cover />
        <span class="title">{{ data.title }}</span>
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
<style lang="scss" scoped>
.tile-image {
    position: relative;
    padding: 2rem;
}
.image {
    position: absolute;
    inset: 0;
}
.title {
    position: relative;
    display: block;
    font-family: var(--urbanist);
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
}
</style>
