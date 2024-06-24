<template>
    <div class="tile-logo">
        <span class="title">{{ data.title }}</span>
        <div class="wrapper-logos">
            <div class="logos">
                <div v-for="(logo, index) in data.logos" :key="logo.id" :class="{ active: index === 0 }" class="logo">
                    <FastImage class="logo" :image="logo" contains />
                </div>
            </div>
        </div>
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
.tile-logo {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
}
.title {
    flex: 0 0 auto;
    display: block;
    font-family: var(--urbanist);
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    text-align: center;
}
.wrapper-logos {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    width: 100%;
}
.logos {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 0.45;
}
.logo {
    position: absolute;
    inset: 0;
    opacity: 0;
    &.active {
        opacity: 1;
    }
}
</style>
