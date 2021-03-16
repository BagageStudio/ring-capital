<template>
    <footer class="footer-minimal">
        <div class="container">
            <div class="content-footer-minimal" :class="{ 'small-padding': smallPadding }">
                <span v-if="data.smallText" class="footer-small-txt">{{ data.smallText }}</span>
                <div v-if="data.smallLinks" class="wrapper-small-links">
                    <div v-for="(singleLink, linkIndex) in data.smallLinks" :key="linkIndex">
                        <LinkTo
                            v-if="singleLink.__typename === 'LinkRecord'"
                            class="footer-small-link"
                            :link="singleLink"
                        />
                        <LinkToFile
                            v-else-if="singleLink.__typename === 'LinkFileRecord'"
                            class="footer-small-link"
                            :link="singleLink"
                        />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import layoutData from '~/cms/data/layout-data.json';

export default {
    props: {
        minimal: { type: Boolean, default: false },
        smallPadding: { type: Boolean, default: false }
    },
    data() {
        return {
            emailInput: ''
        };
    },
    computed: {
        data() {
            return layoutData[this.$store.state.i18n.locale].footer;
        }
    },
    watch: {},
    mounted() {},
    beforeDestroy() {},
    methods: {}
};
</script>

<style lang="scss" scoped>
.footer-minimal {
    position: relative;
    padding: 50px 0 30px;
    font-size: 1.3rem;
    color: $neptune;
}
.wrapper-small-links {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    margin-top: 10px;
}
.footer-small-link {
    margin-right: 10px;
    text-decoration: none;
    transition: color 0.2s ease-out;
    &:hover {
        color: $white;
    }
}
.content-footer-minimal {
    padding: 0 $gutter;
}

@media (min-width: $tablet) {
    .content-footer-minimal {
        display: flex;
        align-items: baseline;
        padding: 0;
    }
    .footer-small-txt {
        width: percentage(3/8);
        padding: 0 $gutter;
    }
    .wrapper-small-links {
        width: percentage(5/8);
        padding: 0 $gutter;
    }
}
@media (min-width: $desktop) {
    .content-footer-minimal {
        padding: 0 0 0 #{percentage(5/12)};
        &.small-padding {
            padding: 0 #{percentage(3/12)};
            .footer-small-txt {
                width: percentage(4/6);
            }
            .wrapper-small-links {
                width: percentage(2/6);
            }
        }
    }
    .footer-small-txt {
        width: percentage(4/7);
    }
    .wrapper-small-links {
        width: percentage(3/7);
    }
}
@media (min-width: $desktop-large) {
    content-footer-minimal {
        &.small-padding {
            .footer-small-txt {
                width: percentage(3/6);
            }
            .wrapper-small-links {
                width: percentage(3/6);
            }
        }
    }
    .footer-small-txt {
        width: percentage(3/7);
    }
    .wrapper-small-links {
        width: percentage(4/7);
    }
}
</style>
