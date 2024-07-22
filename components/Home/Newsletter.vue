<template>
    <div class="wrapper-newsletter container">
        <div class="container-small">
            <div class="wrapper-intro-newsletters">
                <div class="wrapper-txt">
                    <h2 class="newsletter-title basic-h2">{{ data.newsletterTitle }}</h2>
                    <div class="newsletter-intro basic-txt" v-html="data.newsletterIntro"></div>
                    <LinkTo v-if="isDesktop" class="btn-subscribe btn-rounded" :link="data.newsletterSubscribeLink" />
                </div>
                <div class="wrapper-newsletters">
                    <HomeBlockNewsletter
                        v-for="newsletter in data.articleSelection"
                        :key="newsletter.id"
                        :data="newsletter"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        isDesktop() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.xl;
        }
    }
};
</script>
<style lang="scss" scoped>
.wrapper-newsletter {
    margin: 10rem 0;
}
.wrapper-txt {
    padding: 0 var(--gutter);
}
.newsletter-title {
    margin-bottom: 4rem;
}
.wrapper-newsletters {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 600px;
    margin-top: 4rem;
    padding: 0 var(--gutter);
}

@media (min-width: $desktop) {
    .wrapper-intro-newsletters {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        > .wrapper-txt {
            position: sticky;
            top: 200px;
        }
    }
    .wrapper-txt,
    .wrapper-newsletters {
        flex: 0 0 auto;
        width: 50%;
    }
    .wrapper-newsletters {
        max-width: 100%;
        margin-top: 0;
        padding: 0;
    }
    .btn-subscribe {
        margin-top: 4rem;
    }
}
@media (min-width: $desktop-large) {
    .wrapper-txt {
        width: calc(4 / 10 * 100%);
    }
}
</style>
