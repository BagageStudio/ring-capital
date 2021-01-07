<template>
    <footer class="footer">
        <div class="container">
            <div class="wrapper-newsletter-social">
                <h3 v-if="data.newsletter.title">{{ data.newsletter.title }}</h3>
                <form class="newsletter-form">
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
                    <button ref="submit" type="submit" class="btn-block">
                        <span>{{ $t('newsletter.sendButton') }}</span>
                    </button>
                </form>
                <Social :content="data.social" />
            </div>
            <div class="wrapper-menu-legal">
                <Logo class="logo-footer" />
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
                <div class="footer-bottom">
                    <span v-if="data.smallText">{{ data.smallText }}</span>
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
    margin-top: 100px;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-top: 1px solid $neptune;
    }
}
.wrapper-newsletter-social {
    padding: 50px 0 30px;
}
.newsletter-form {
    margin-top: 50px;
    .btn-block {
        width: 100%;
    }
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
.logo-footer {
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
}
.footer-link {
    text-decoration: none;
    margin-bottom: 10px;
}
.footer-bottom {
    margin-top: 10px;
    font-size: 1.3rem;
    color: $neptune;
}
.wrapper-small-links {
    margin-top: 10px;
}
.footer-small-link {
    text-decoration: none;
}
</style>
