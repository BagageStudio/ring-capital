<template>
    <div v-if="data" class="wrapper-contact">
        <div class="container content-pad">
            <h1 class="contact-title basic-h2" v-html="$options.filters.noPAround(data.title)"></h1>
            <div class="contact-content">
                <div v-if="data.locationTitle && data.location" class="contact-cell">
                    <div class="cell-title">{{ data.locationTitle }}</div>
                    <div class="cell-content">{{ data.location }}</div>
                </div>
                <div v-if="data.socialTitle && data.socials.length" class="contact-cell">
                    <div class="cell-title">{{ data.socialTitle }}</div>
                    <div class="cell-content socials">
                        <LinkTo
                            v-for="social in data.socials"
                            :key="social.link.id"
                            class="social"
                            :link="social.link"
                            hide-label
                        >
                            <FastImage :image="social.image" />
                        </LinkTo>
                    </div>
                </div>
            </div>
            <LinkTo v-if="data.contactButton" class="btn-rounded" :link="data.contactButton" />
        </div>
        <img src="/img/header-ring.png" class="bg-img" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-contact {
    position: relative;
    padding-top: 170px;
    min-height: 100dvh;
}

.bg-img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50vw;
    z-index: -1;
}

.contact-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
    border-bottom: 1px solid currentColor;
}

.contact-cell {
    display: flex;
    align-items: center;
    padding: 4rem 2rem;
    border-top: 1px solid currentColor;
}

.cell-title {
    margin-right: 4rem;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    text-transform: uppercase;
}

.socials {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.btn-rounded {
    margin-bottom: 4rem;
}

.social {
    height: 2rem;
    margin: 1rem 3rem 1rem 0;
    .fast-image {
        height: 100%;
    }
    ::v-deep img {
        display: block;
        height: 100%;
        width: auto;
    }
}

@media (min-width: $desktop) {
    .wrapper-contact {
        padding-top: 22rem;
    }
    .bg-img {
        width: 40vw;
    }
    .contact-content {
        position: relative;
        flex-direction: row;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: currentColor;
            left: calc(50% - 20px);
        }
    }
    .contact-cell {
        flex: 1 0 50%;
    }
}

@media (min-width: $desktop-large) {
    .contact-title {
        width: 66.66%;
    }
    .contact-content {
        width: 66.66%;
    }
}
</style>
