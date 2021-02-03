<template>
    <ul v-if="content" class="detail-list">
        <li v-for="detail in detailList" :key="detail.id">
            <component
                :is="getTagName(detail)"
                :link="detail.link"
                :to="detail.slug ? portfolioLink(detail) : ''"
                :hide-label="true"
                class="detail"
            >
                <span class="detail-img" :class="{ overlay }">
                    <img v-if="detail.image" class="bg-img" :src="detail.image.url" :alt="detail.image.alt" />
                    <span v-if="detail.hasLinkedin" class="linkedin-pin">
                        <Icon name="linkedin" />
                    </span>
                    <span v-if="detail.logo" class="detail-logo">
                        <span class="wrapper-img">
                            <img :src="detail.logo.url" :alt="detail.logo.alt" />
                        </span>
                    </span>
                </span>
                <span class="detail-txt">
                    <span>
                        <span class="basic-h4 detail-title">{{ detail.name }}</span>
                        <span v-if="detail.description">{{ detail.description }}</span>
                    </span>
                    <Tags v-if="detail.tags && !hideTags" :content="detail.tags" />
                </span>
            </component>
        </li>
    </ul>
</template>
<script>
import LinkTo from '~/components/LinkTo';
import { routeByApiModels } from '~/app/crawler/routes';

export default {
    components: {
        LinkTo
    },
    props: {
        content: {
            type: Array,
            required: true
        },
        random: {
            type: Boolean,
            default: false
        },
        overlay: {
            type: Boolean,
            default: false
        },
        hideTags: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            detailList: this.content
        };
    },
    created() {
        if (process.client)
            this.$nextTick(
                () => (this.detailList = this.random ? this.content.sort(() => Math.random() - 0.5) : this.content)
            );
    },
    methods: {
        getTagName(detail) {
            if (detail.link) {
                return 'LinkTo';
            } else if (detail.slug) {
                return 'nuxt-link';
            } else {
                return 'div';
            }
        },
        portfolioLink(detail) {
            if (!detail.slug) return '';
            return this.localePath({
                name: routeByApiModels[detail._modelApiKey].routerFormat,
                params: { slug: detail.slug }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
span {
    display: block;
}
.detail-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 $gutter;
    > li {
        margin: 0 0 70px;
        padding: 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &.no-margin-large {
        > li {
            margin: 0 0 50px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    &.fixed-height {
        .detail-img {
            height: 220px;
            &::before {
                content: none;
            }
        }
    }
}
a {
    &.detail {
        &:hover {
            .detail-img .bg-img {
                transform: scale(1.05);
            }
            .linkedin-pin::before {
                opacity: 1;
            }
        }
    }
}
.detail {
    text-decoration: none;
    .linkedin-pin {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 20px;
        left: 20px;
        width: 46px;
        height: 46px;
        background-color: #eceff4;
        fill: $orbit;
        z-index: 1;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: $white;
            opacity: 0;
            transition: opacity 0.2s ease-out;
        }
        .icon {
            position: relative;
            width: 16px;
            height: 16px;
        }
    }
}
.detail-img {
    position: relative;
    overflow: hidden;
    &::before {
        content: '';
        display: block;
        padding-bottom: 107.5%;
    }
    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.2s ease-out;
    }
    &.overlay {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba($orbit, 0.85);
            transform: translate3d(0, 0, 0);
        }
    }
}
.detail-logo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    .wrapper-img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 263px;
        max-width: 80%;
        height: 130px;
    }
}
.detail-txt {
    padding: 30px 10px 50px;
    border-bottom: 1px solid rgba($neptune, 0.4);
    .detail-title {
        margin-bottom: 20px;
    }
}

@media (min-width: $phone) {
    .detail-list {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0;
        width: calc(100% + #{2 * $gutter});
        margin-left: -$gutter;
        &.no-margin-large {
            > li {
                &:last-child {
                    margin-bottom: 50px;
                }
            }
        }
        &.grid-gutter {
            width: 100%;
            margin-left: 0;
            > li {
                padding: 0 #{$gutter};
            }
        }
        > li {
            position: relative;
            width: percentage(2/4);
            padding: 0 #{2 * $gutter};
            &:last-child {
                margin-bottom: 70px;
            }
        }
        &.shape-one {
            padding-bottom: 75px;
            > li {
                &:nth-child(2n + 2) {
                    top: 75px;
                }
            }
        }
        &.shape-two {
            padding-bottom: 65px;
            > li {
                &:nth-child(2n + 2) {
                    top: 65px;
                }
            }
        }
    }
    .detail {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .detail-img {
        flex: 0 0 auto;
    }
    .detail-txt {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
@media (min-width: $desktop-small) {
    .detail-list {
        > li {
            width: percentage(1/3);
            margin-bottom: 150px;
            &:last-child {
                margin-bottom: 150px;
            }
        }
        &.no-margin-large {
            > li {
                margin: 0;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
        &.shape-one {
            padding-bottom: 165px;
            > li {
                &:nth-child(2n + 2) {
                    top: 0;
                }
                &:nth-child(3n + 2) {
                    top: 165px;
                }
                &:nth-child(3n + 3) {
                    top: 75px;
                }
            }
        }
        &.shape-two {
            > li {
                &:nth-child(2n + 2) {
                    top: 0;
                }
                &:nth-child(3n + 2) {
                    top: 65px;
                }
                &:nth-child(3n + 3) {
                    top: -260px;
                }
            }
        }
    }
}
@media (min-width: $desktop) {
    .detail-list {
        > li {
            width: percentage(4/12);
        }
    }
}
</style>
