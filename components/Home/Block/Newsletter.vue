<template>
    <LinkTo class="block-newsletter" :link="data.link" :hide-label="true">
        <div class="wrapper-newsletter-cover">
            <FastImage class="newsletter-cover" :image="data.image" cover />
        </div>
        <div class="wrapper-txt">
            <span class="newsletter-title basic-txt">{{ data.title }}</span>
            <span v-if="data.infos" class="newsletter-date">{{ data.infos }}</span>
        </div>
    </LinkTo>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
};
</script>
<style lang="scss" scoped>
.block-newsletter {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-decoration: none;
}
.newsletter-cover {
    width: 100%;
    aspect-ratio: 1 / 0.7;
    border: 1px solid currentColor;
}
.newsletter-date {
    display: block;
    font-family: var(--urbanist);
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: 400;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    color: #9d9d9d;
}

@media (min-width: $desktop-large) {
    .block-newsletter {
        flex-direction: row;
        align-items: flex-end;
        gap: 0;
    }
    .wrapper-newsletter-cover {
        flex: 0 0 auto;
        width: calc(3 / 5 * 100%);
        padding: 0 var(--gutter);
    }
    .wrapper-txt {
        flex: 0 0 auto;
        width: calc(2 / 5 * 100%);
        padding-right: var(--gutter);
    }
    .newsletter-date {
        margin-top: 2rem;
    }
    .newsletter-cover {
        aspect-ratio: 1 / 1.3333;
    }
}
</style>
