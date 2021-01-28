<template>
    <ul v-if="content" class="logos-list">
        <li v-for="logo in content" :key="logo.id">
            <a
                v-if="hasLink && logo.link"
                :href="logo.link"
                :aria-label="logo.name"
                target="_blank"
                rel="noopener noreferrer"
                class="logo-link"
                :class="{ 'show-label': showLabel }"
            >
                <span v-if="showLabel" class="label">
                    <span>{{ $t('logo.hoverLabel') }}</span>
                </span>
                <img :src="logo.logo.url" :alt="logo.logo.alt" />
            </a>
            <nuxt-link v-else-if="hasLink" :to="logo.slug" :aria-label="logo.name" class="logo-link">
                <img :src="logo.logo.url" :alt="logo.logo.alt" />
            </nuxt-link>
            <div v-else class="logo-link">
                <img :src="logo.logo.url" :alt="logo.logo.alt" />
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        content: {
            type: Array,
            required: true
        },
        hasLink: {
            type: Boolean,
            required: false,
            default: true
        },
        showLabel: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.logos-list {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 4px);
    margin: 0 0 0 -2px;
    padding: 0 $gutter;
    > li {
        width: calc(#{percentage(1/2)} - 4px);
        margin: 2px;
    }
    a {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            border-top: 1px solid $white;
            opacity: 0;
            transition: opacity 0.2s ease-out;
        }
        &:hover {
            &::before {
                opacity: 1;
            }
            > img {
                opacity: 0.7;
            }
        }
        &.show-label {
            &:hover {
                .label {
                    opacity: 1;
                }
                > img {
                    opacity: 0;
                }
            }
        }
    }
    &.medium-grid {
        width: calc(100% + 20px);
        margin-left: -10px;
        > li {
            width: calc(100% - 20px);
            margin: 10px;
        }
    }
    &.big-height {
        .logo-link {
            height: 147px;
        }
    }
}
.logo-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    padding: 15px;
    background: $orbit;
    > img {
        max-width: 100%;
        max-height: 100%;
        transition: opacity 0.2s ease-out;
    }
}
.label {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $space;
    font-size: 1.6rem;
    line-height: 24px;
    opacity: 0;
    transition: opacity 0.2s ease-out;
}

@media (min-width: $tablet) {
    .logos-list {
        > li {
            width: calc(#{percentage(1/3)} - 4px);
        }
        &.medium-grid {
            > li {
                width: calc(50% - 20px);
            }
        }
    }
}
@media (min-width: $desktop) {
    .logo-link {
        height: 100px;
        padding: 35px 25px;
    }
    .logos-list {
        &.big-height {
            .logo-link {
                height: 147px;
            }
        }
    }
}
@media (min-width: $desktop-large) {
    .logos-list {
        > li {
            width: calc(#{percentage(1/6)} - 4px);
        }
        &.medium-grid {
            > li {
                width: calc(#{percentage(1/4)} - 20px);
            }
        }
        &.large-grid {
            > li {
                width: calc(#{percentage(1/3)} - 4px);
            }
        }
    }
}
</style>
