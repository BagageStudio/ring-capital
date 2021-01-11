<template>
    <ul v-if="content" class="funds">
        <li v-for="fundCard in content" :key="fundCard.slug">
            <nuxt-link
                :to="fundCard.slug"
                :aria-label="fundCard.name"
                class="fund-card"
                :class="'theme-' + fundCard.color"
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
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        box-shadow: 0px 100px 80px rgba(19, 27, 37, 0.43), 0px 41.7776px 33.4221px rgba(19, 27, 37, 0.309107),
            0px 22.3363px 17.869px rgba(19, 27, 37, 0.256326), 0px 12.5216px 10.0172px rgba(19, 27, 37, 0.215),
            0px 6.6501px 5.32008px rgba(19, 27, 37, 0.173674), 0px 2.76726px 2.21381px rgba(19, 27, 37, 0.120893);
        opacity: 0;
        z-index: -1;
    }
    &.theme-saturn {
        &::before {
            border-color: $saturn;
        }
        &:hover,
        &:focus {
            .wrapper-fund-logo {
                .icon {
                    fill: $saturn;
                }
            }
        }
    }
    &.theme-titan {
        &::before {
            border-color: $titan;
        }
        &:hover,
        &:focus {
            .wrapper-fund-logo {
                .icon {
                    fill: $titan;
                }
            }
        }
    }
    &.theme-white {
        &::before {
            border-color: $white;
        }
        &:hover,
        &:focus {
            .wrapper-fund-logo {
                .icon {
                    fill: $white;
                }
            }
        }
    }
    &:hover,
    &:focus {
        &::after {
            opacity: 1;
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
        fill: $neptune;
    }
}
.wrapper-fund-txt {
    > span {
        display: block;
    }
}
.fund-name {
    font-size: 2rem;
}
.fund-desc {
    font-size: 1.6rem;
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
            padding: 0 $gutter;
        }
    }
    .fund-card {
        flex-direction: column;
        align-items: flex-start;
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
        padding: 30px 20px;
    }
    .wrapper-fund-logo {
        margin: 0 0 23px;
    }
    .fund-desc {
        font-size: 1.4rem;
    }
}
</style>
