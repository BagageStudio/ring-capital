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
                <span class="content">
                    <div class="img-wrapper"><img :src="logo.logo.url" :alt="logo.logo.alt" /></div>
                    <span v-if="logo.smallText" class="small-txt">{{ logo.smallText }}</span>
                </span>
            </a>
            <nuxt-link v-else-if="hasLink" :to="getFullLink(logo)" :aria-label="logo.name" class="logo-link">
                <span class="content">
                    <div class="img-wrapper"><img :src="logo.logo.url" :alt="logo.logo.alt" /></div>
                </span>
            </nuxt-link>
            <div v-else class="logo-link">
                <span class="content">
                    <div class="img-wrapper"><img :src="logo.logo.url" :alt="logo.logo.alt" /></div>
                </span>
            </div>
        </li>
    </ul>
</template>

<script>
import { routeByApiModels } from '~/app/crawler/routes';

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
    },
    methods: {
        getFullLink(logo) {
            if (!logo.slug) return '';
            return this.localePath({
                name: routeByApiModels[logo._modelApiKey].routerFormat,
                params: { slug: logo.slug }
            });
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
    &.white-mode {
        .logo-link {
            background: $grey;
        }
    }
    > li {
        width: calc(#{percentage(1/2)} - 4px);
        margin: 2px;
    }
    a {
        position: relative;
        text-decoration: none;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            border-top: 1px solid $white;
            transform: scaleX(0);
            opacity: 0;
            transform-origin: 50% 0%;
            transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.2s ease-in-out 0.2s;
        }
        &:hover {
            &::before {
                transform: scaleX(1);
                opacity: 1;
                transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.2s ease-in-out;
            }
            .content {
                opacity: 0.7;
            }
        }
        &.show-label {
            &:hover {
                .label {
                    opacity: 1;
                }
                .content {
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
    img {
        max-width: 100%;
        max-height: 100%;
    }
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    transform: translate3d(0, 0, 0);
    transition: opacity 0.2s ease-out;
    img {
        flex: 1;
        object-fit: contain;
    }
    .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        min-height: 0;
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
.small-txt {
    display: block;
    margin-top: 13px;
    font-family: $helvetica-neue;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: $neptune;
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
        padding: 20px 25px;
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
