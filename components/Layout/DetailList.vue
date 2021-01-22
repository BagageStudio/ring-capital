<template>
    <ul v-if="content" class="detail-list">
        <li v-for="detail in detailList" :key="detail.id">
            <component :is="detail.link ? 'LinkTo' : 'div'" :link="detail.link" :hide-label="true" class="detail">
                <span class="detail-img">
                    <img :src="detail.image.url" :alt="detail.image.alt" />
                    <span v-if="detail.hasLinkedin" class="linkedin-pin">
                        <Icon name="linkedin" />
                    </span>
                </span>
                <span class="detail-txt">
                    <span>
                        <span class="basic-h4 detail-title">{{ detail.name }}</span>
                        <span v-if="detail.description">{{ detail.description }}</span>
                    </span>
                    <Tags :content="detail.tags" />
                </span>
            </component>
        </li>
    </ul>
</template>
<script>
import LinkTo from '~/components/LinkTo';

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
        background: #eceff4;
        fill: $orbit;
        .icon {
            width: 16px;
            height: 16px;
        }
    }
}
.detail-img {
    position: relative;
    &::before {
        content: '';
        display: block;
        padding-bottom: 107.5%;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
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
        padding: 0 0 75px;
        width: calc(100% + #{2 * $gutter});
        margin-left: -$gutter;
        > li {
            position: relative;
            width: percentage(2/4);
            padding: 0 #{2 * $gutter};
            &:last-child {
                margin-bottom: 70px;
            }
            &:nth-child(2n + 2) {
                top: 75px;
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
        padding-bottom: 165px;
        > li {
            width: percentage(1/3);
            margin-bottom: 150px;
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
}
@media (min-width: $desktop) {
    .detail-list {
        > li {
            width: percentage(4/12);
        }
    }
}
</style>
