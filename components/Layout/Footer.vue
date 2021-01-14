<template>
    <footer class="footer">
        <div class="container">
            <div class="wrapper-newsletter-social">
                <div class="content-sub">
                    <h3 v-if="data.newsletter.title" class="footer-title basic-h3">{{ data.newsletter.title }}</h3>
                    <form class="newsletter-form">
                        <div class="content-newsletter-form">
                            <div class="wrapper-field">
                                <input
                                    v-model="emailInput"
                                    class="newsletter-email"
                                    type="email"
                                    name="newsletter"
                                    :class="{ on: emailInput !== '' }"
                                    required
                                />
                                <label class="label" for="newsletter-email">{{ $t('newsletter.label') }}</label>
                            </div>
                            <div class="wrapper-btn-newsletter">
                                <button ref="submit" type="submit" class="btn-block">
                                    <span>{{ $t('newsletter.sendButton') }}</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <Social class="social-footer" :content="data.social" />
            </div>
            <div class="wrapper-menu-legal">
                <div class="content-sub">
                    <div class="wrapper-logo-footer">
                        <Logo class="logo-footer" />
                    </div>
                    <div class="wrapper-cols-footer">
                        <div v-for="(column, index) in data.linksColumn" :key="index" class="col-footer">
                            <LinkTo
                                v-for="(singleLink, linkIndex) in column.links"
                                :key="linkIndex"
                                class="footer-link"
                                :link="singleLink"
                            />
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span v-if="data.smallText" class="footer-small-txt">{{ data.smallText }}</span>
                    <div v-if="data.smallLinks" class="wrapper-small-links">
                        <LinkTo
                            v-for="(singleLink, linkIndex) in data.smallLinks"
                            :key="linkIndex"
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
        minimal: { type: Boolean, default: false }
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
.footer {
    position: relative;
    background: $black;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-top: 1px solid $neptune;
    }
    .social-footer {
        margin: 30px 0 0;
    }
}
.wrapper-newsletter-social {
    padding: 50px $gutter 40px;
}
.newsletter-form {
    margin-top: 35px;
    .btn-block {
        width: 100%;
    }
}
.content-newsletter-form {
    width: 100%;
}
.wrapper-menu-legal {
    position: relative;
    padding: 50px 0 40px;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: -$gutter;
        bottom: 0;
        left: -$gutter;
        background: $orbit;
        z-index: -1;
    }
}
.wrapper-logo-footer {
    padding: 0 $gutter;
}
.logo-footer {
    width: 163px;
    margin-bottom: 50px;
}
.wrapper-cols-footer {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
.col-footer {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-bottom: 30px;
    padding: 0 $gutter;
}
.footer-link {
    text-decoration: none;
    margin-bottom: 10px;
}
.footer-bottom {
    margin-top: 10px;
    padding: 0 $gutter;
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
}

@media (min-width: $tablet) {
    .footer {
        z-index: 1;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 50%;
            background: $orbit;
            z-index: -1;
        }
        &::after {
            left: auto;
            width: 50%;
        }
        .container {
            display: flex;
            align-items: stretch;
            > * {
                flex: 0 0 auto;
            }
        }
    }
    .wrapper-menu-legal {
        order: 1;
        width: 50%;
        &::before {
            content: none;
        }
    }
    .wrapper-newsletter-social {
        order: 2;
        width: 50%;
    }
}
@media (min-width: $desktop-small) {
    .col-footer {
        width: percentage(1/3);
    }
    .wrapper-newsletter-social {
        padding: 50px 0 30px;
    }
    .newsletter-form {
        .btn-block {
            width: auto;
        }
    }
    .content-newsletter-form {
        display: flex;
        align-items: flex-start;
        .wrapper-field {
            width: percentage(4/6);
            padding: 0 $gutter;
            .label {
                padding-left: $gutter;
                padding-right: $gutter;
            }
        }
    }
    .wrapper-btn-newsletter {
        display: flex;
        align-items: center;
        justify-content: center;
        width: percentage(2/6);
        padding: 0 $gutter;
    }
    .footer-title {
        padding-left: $gutter;
        padding-right: $gutter;
    }
    .social.social-footer {
        padding-left: $gutter;
        padding-right: $gutter;
    }
}
@media (min-width: $desktop-large) {
    .footer {
        &::before,
        &::after {
            width: calc(50vw - #{$desktop-large/2} + #{$grid-gutter-l});
        }
    }
    .wrapper-menu-legal,
    .wrapper-newsletter-social {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .wrapper-menu-legal {
        width: percentage(5/12);
        padding: 90px 0 80px;
        background: $orbit;
    }
    .wrapper-newsletter-social {
        width: percentage(7/12);
        padding: 100px 0 80px #{percentage(1/12)};
        border-top: 1px solid $neptune;
    }
    .footer-bottom {
        display: flex;
        align-items: baseline;
        margin-top: 20px;
        padding: 0;
    }
    .footer-small-txt {
        width: percentage(3/5);
        padding: 0 $gutter;
    }
    .wrapper-small-links {
        width: percentage(2/5);
        margin: 0;
        padding: 0 $gutter;
    }
    .newsletter-form {
        margin-top: 50px;
    }
}
@media (min-width: $desktop-xxl) {
    .footer {
        &::before,
        &::after {
            width: calc(50vw - #{$desktop-xxl/2} + #{$grid-gutter-l});
        }
    }
}
</style>
