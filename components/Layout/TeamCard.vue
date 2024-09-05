<template>
    <div v-if="content" class="team-card content-pad">
        <LinkTo hide-label :link="content.link" class="card-link">
            <div class="card-image-wrapper">
                <component :is="rings[content.ringColor]" />
                <FastImage v-if="content.image" class="card-image" :image="content.image" cover />
            </div>
            <div v-if="content.tags" class="tags">
                <div v-for="tag in content.tags.split(',')" :key="tag" class="tag basic-tag">{{ tag }}</div>
            </div>
            <div class="title basic-txt">{{ content.name }}</div>
            <div v-if="content.description" class="infos">{{ content.description }}</div>
        </LinkTo>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true }
    },
    data() {
        return {
            rings: {
                blue: 'LayoutImpactRingsBlue',
                green: 'LayoutImpactRingsGreen',
                orange: 'LayoutImpactRingsOrange'
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.team-card {
    margin-bottom: 4rem;
}
.card-link {
    text-decoration: none;
    width: 100%;
    &:hover {
        .impact-ring {
            opacity: 1;
            transform: scale(2.5);
        }
    }
}

.card-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    margin-bottom: 2rem;
    overflow: hidden;
    background-color: var(--bg);
    border: 1px solid var(--txt);
}

.impact-ring {
    position: absolute;
    top: 50%;
    left: 20%;
    width: 100%;
    opacity: 0;
    transition: 0.3s ease-out;
    transition-property: opacity, transform;
    backface-visibility: hidden;
    transform: scale(3.5);
}

.card-image {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.infos {
    margin-top: 2rem;
    line-height: normal;
}

.tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    .tag {
        margin-bottom: 1rem;
        padding: 0.6rem 1rem;
        margin-right: 10px;
        border: 1px solid currentColor;
    }
}

@media (min-width: $tablet) {
    .card-image-wrapper {
        aspect-ratio: 285/350;
    }
}
</style>
