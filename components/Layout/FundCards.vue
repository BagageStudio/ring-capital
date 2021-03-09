<template>
    <ul v-if="content" class="funds">
        <li v-for="fundCard in content" :key="fundCard.id">
            <nuxt-link
                :to="fundCard.slug"
                :aria-label="fundCard.name"
                class="fund-card"
                :class="'theme-' + fundCard.color"
                :style="{ '--fundColor': fundCard.color.hex }"
                @mouseover.native="$emit('slowMo', fundCard.id)"
                @mouseleave.native="$emit('resetSpeed', fundCard.id)"
            >
                <span class="wrapper-fund-logo">
                    <Icon class="fund-icon" :name="fundCard.logo" />
                </span>
                <span class="wrapper-fund-txt">
                    <span class="fund-name">{{ fundCard.name }}</span>
                    <span class="fund-desc">{{ fundCard.description }}</span>
                </span>
            </nuxt-link>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        content: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.funds {
    margin: 0;
    padding: 0 $gutter;
    backface-visibility: hidden;
    transform: translateZ(0);
    > li {
        margin: 0 0 10px;
        padding: 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.fund-card {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 90px;
    padding: 15px 30px;
    text-decoration: none;
    background: $orbit;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-top-width: 1px;
        border-top-style: solid;
        border-color: var(--fundColor);
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        box-shadow: 0px 32px 40px rgba(0, 0, 0, 0.1), 16px 16px 24px rgba(0, 0, 0, 0.1),
            -2px -4px 1px rgba(0, 0, 0, 0.04);
        opacity: 0;
        z-index: -1;
        transition: opacity 0.3s ease-out;
    }
    &:hover,
    &:focus {
        &::after {
            opacity: 1;
        }
        .wrapper-fund-logo {
            .icon {
                fill: var(--fundColor);
            }
        }
    }
}
.wrapper-fund-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 53px;
    height: 58px;
    margin-right: 40px;
    .icon {
        display: block;
        max-width: 100%;
        max-height: 100%;
        fill: $white;
        transition: fill 0.3s ease-out;
    }
}
.wrapper-fund-txt {
    > span {
        display: block;
    }
}
.fund-name {
    font-family: $space;
    font-size: 2rem;
}
.fund-desc {
    font-size: 1.6rem;
    line-height: 24px;
    color: $neptune;
}
@media (min-width: $phone) {
    .funds {
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        padding: 0;
        > li {
            width: percentage(1/3);
            margin: 0;
            padding: 0 $gutter;
        }
    }
    .fund-card {
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;
        padding: 10px 15px;
    }
    .wrapper-fund-logo {
        margin: 0 0 15px;
    }
    .fund-name {
        font-size: 1.6rem;
    }
    .fund-desc {
        font-size: 1.3rem;
    }
}
@media (min-width: $tablet) {
    .fund-card {
        padding: 30px 18px;
    }
    .wrapper-fund-logo {
        margin: 0 0 23px;
    }
    .fund-desc {
        font-size: 1.4rem;
    }
}
@media (min-width: $desktop) {
    .funds {
        width: percentage(7/12);
        align-self: flex-start;
    }
    .fund-card {
        padding: 30px 15px;
    }
    .fund-name {
        font-size: 1.4rem;
    }
}
@media (min-width: $desktop-large) {
    .funds {
        width: percentage(6/12);
    }
    .fund-card {
        padding: 30px 18px;
    }
}
@media (min-width: $desktop-xxl) {
    .fund-name {
        font-size: 1.6rem;
    }
}
</style>
