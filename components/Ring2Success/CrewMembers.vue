<template>
    <ul v-if="content" class="crew-member-list">
        <li v-for="crewMember in content" :key="crewMember.id">
            <component
                :is="crewMember.link ? 'LinkTo' : 'div'"
                :link="crewMember.link"
                :hide-label="true"
                class="crew-member"
            >
                <span class="crew-member-img">
                    <FastImage v-if="crewMember.image" class="bg-img" :image="crewMember.image" cover />
                    <span v-if="crewMember.hasLinkedin" class="linkedin-pin">
                        <Icon name="linkedin" />
                        <span class="bg"></span>
                    </span>
                </span>
                <span class="crew-member-txt">
                    <span class="crew-member-title">{{ crewMember.name }}</span>
                    <span v-if="crewMember.description" class="crew-member-description">
                        {{ crewMember.description }}
                    </span>
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
        content: { type: Array, required: true }
    }
};
</script>

<style lang="scss" scoped>
.crew-member-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    > li {
        margin: 0 0 20px;
        padding: 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.crew-member {
    display: flex;
    align-items: center;
    text-decoration: none;
    .linkedin-pin {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 10px;
        left: 10px;
        width: 28px;
        height: 28px;
        background-color: $orbit;
        fill: $white;
        z-index: 1;
        .bg {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;
            &::before {
                content: '';
                position: absolute;
                z-index: -1;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: $neptune;
                clip-path: ellipse(50% 0% at 50% 100%);
                transition: clip-path 0.4s cubic-bezier(0.65, 0, 0.35, 1) 0.05s;
            }
        }
        .icon {
            position: relative;
            width: 12px;
            height: 12px;
        }
    }
}
a {
    &.crew-member {
        &:hover {
            .crew-member-img .bg-img {
                transform: scale(1.05);
            }
            .linkedin-pin .bg::before {
                clip-path: ellipse(80% 130% at 50% 100%);
            }
        }
    }
}
.crew-member-img {
    flex: 0 0 auto;
    position: relative;
    overflow: hidden;
    width: 100px;
    height: 100px;
    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scale(1.002);
        transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
    }
}
.crew-member-txt {
    position: relative;
    padding: 0 30px;
    > span {
        display: block;
    }
    .crew-member-title {
        line-height: 19px;
    }
    .crew-member-description {
        font-size: 1.4rem;
        line-height: 18px;
        margin-top: 3px;
        color: $neptune;
    }
}

@media (min-width: $phone) {
    .crew-member-list {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        padding: 0;
        width: calc(100% + #{2 * $gutter});
        margin-left: -$gutter;
        > li {
            position: relative;
            width: percentage(2/4);
            padding: 0 #{$gutter};
            &:last-child {
                margin-bottom: 20px;
            }
        }
    }
    .crew-member-txt {
        padding: 0 15px;
    }
}
@media (min-width: $desktop-small) {
    .crew-member-txt {
        padding: 0 30px;
    }
}
@media (min-width: $desktop-large) {
    .crew-member-list {
        > li {
            width: percentage(3/12);
            margin-bottom: 40px;
            &:last-child {
                margin-bottom: 40px;
            }
        }
    }
    .crew-member-txt {
        padding: 0 15px;
    }
}
@media (min-width: $desktop-xxl) {
    .crew-member-txt {
        padding: 0 30px;
    }
}
</style>
