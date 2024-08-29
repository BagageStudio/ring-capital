<template>
    <div v-if="content" class="content-card content-pad" :class="{ 'is-press-room': isPressRoom }">
        <LinkTo hide-label :link="content.link" class="card-link">
            <FastImage
                v-if="content.image"
                class="card-image"
                :image="content.image"
                :cover="!isPressRoom"
                :contains="isPressRoom"
            />
            <div v-if="content.tags" class="tags">
                <div v-for="tag in content.tags" :key="tag" class="tag basic-tag">{{ tag }}</div>
            </div>
            <div class="title basic-txt">{{ content.title }}</div>
            <div v-if="content.infos" class="infos basic-tag">{{ content.infos }}</div>
        </LinkTo>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true }
    },
    computed: {
        isPressRoom() {
            return this.content.mediaType === 'Press room';
        }
    }
};
</script>

<style lang="scss" scoped>
.content-card {
    margin-bottom: 4rem;
    &.is-press-room {
        .card-image {
            padding: 65px;
            background-color: var(--brand-primary-blue);
        }
    }
}
.card-link {
    text-decoration: none;
    width: 100%;
}
.card-image {
    width: 100%;
    aspect-ratio: 360/250;
    margin-bottom: 2rem;
    border: 1px solid var(--txt);
}

.infos {
    color: #9d9d9d;
    margin-top: 2rem;
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
</style>
