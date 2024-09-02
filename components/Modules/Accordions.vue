<template>
    <div class="accordions-wrapper container">
        <div class="accordions" :class="{ 'has-img': content.image }">
            <div v-if="content.image" class="content-pad image-wrapper">
                <FastImage class="image" :image="content.image" cover />
            </div>
            <div class="accordions-list content-pad">
                <h2 v-if="content.title" class="basic-h2 list-title">{{ content.title }}</h2>
                <h3 v-if="content.subtitle" class="basic-h3 list-subtitle">{{ content.subtitle }}</h3>
                <div v-if="content.text" class="basic-subtitle list-text wysiwyg" v-html="content.text"></div>
                <button
                    v-for="(acc, index) in content.accordions"
                    :key="acc.id"
                    class="acc"
                    :class="{ open: accStates[index] }"
                    @click="changeAccState(index)"
                >
                    <div class="acc-title basic-subtitle">
                        <FastImage v-if="acc.icon" class="acc-icon" :image="acc.icon" contains />
                        <span class="title">
                            {{ acc.title }}
                        </span>
                        <Icon name="chevron" />
                    </div>
                    <div class="acc-text-wrapper">
                        <div class="acc-text wysiwyg" v-html="acc.text"></div>
                    </div>
                </button>
                <LinkTo v-if="content.link.__typename === 'LinkRecord'" class="btn-rounded" :link="content.link" />
                <LinkToFile
                    v-else-if="content.link.__typename === 'LinkFileRecord'"
                    class="btn-rounded"
                    :link="content.link"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            accStates: []
        };
    },
    created() {
        this.accStates = this.content.accordions.map(a => 0);
    },
    methods: {
        changeAccState(i) {
            this.$set(this.accStates, i, !this.accStates[i]);
        }
    }
};
</script>

<style lang="scss" scoped>
.accordions-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.accordions {
    position: relative;
    padding-top: 5rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--gutter);
        right: var(--gutter);
        height: 1px;
        background-color: var(--txt);
    }
}
.image {
    width: 100%;
    aspect-ratio: 360/420;
    margin-bottom: 6rem;
    border: 1px solid var(--txt);
}

.list-title,
.list-subtitle,
.list-text {
    margin-bottom: 4rem;
}

.acc {
    width: 100%;
    text-align: left;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 1px solid #9d9d9d;
    &:last-child {
        border-bottom: 1px solid #9d9d9d;
    }
}

.acc-text-wrapper {
    max-height: 0;
    overflow: hidden;
    .acc.open & {
        max-height: none;
    }
}

.acc-title {
    display: flex;
    align-items: flex-start;
    .title {
        margin-right: auto;
    }
    .icon {
        margin-top: 8px;
        height: 1.6rem;
        width: 1.6rem;
        flex-shrink: 0;
        margin-left: 2rem;
        transition: transform 0.2s ease-in-out;
        transform: rotate(-90deg);
        .acc.open & {
            transform: rotate(0deg);
        }
    }
    .acc-icon {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        margin-right: 2rem;
        & + .title {
            position: relative;
            top: 2px;
        }
    }
}

.acc-text {
    padding-top: 2rem;
    ::v-deep ul {
        margin: 0;
    }
}

.btn-rounded {
    margin-top: 4rem;
}

@media (min-width: $desktop) {
    .accordions-wrapper {
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
    }
    .image {
        aspect-ratio: 515/600;
    }
    .accordions {
        display: flex;
        align-items: flex-start;
        padding-top: 0;
        &::before {
            content: none;
        }
        .image-wrapper {
            flex-shrink: 0;
            flex-grow: 0;
            width: 41.66%;
            margin-left: auto;
        }
        .accordions-list {
            flex-shrink: 0;
            flex-grow: 0;
            width: 83.33%;
            margin-right: auto;
            margin-left: auto;
        }
        &.has-img {
            .accordions-list {
                width: 41.66%;
                margin-left: 0;
            }
        }
    }
}
</style>
