<template>
    <div class="block-podcast">
        <header class="header-podcast">
            <div class="podcast-infos">
                <span v-if="data.infos" class="podcast-subtitle">{{ data.infos }}</span>
            </div>
            <Icon name="podcast" />
        </header>
        <span class="podcast-name basic-txt">{{ data.title }}</span>
        <div class="wrapper-podcast-link">
            <LinkTo class="podcast-link btn-arrow" :link="data.link" :hide-label="true">
                <span>{{ linkLabel }}</span>
                <Icon name="arrow-diag" />
            </LinkTo>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
        linkLabel: {
            type: String,
            required: true
        }
    }
};
</script>
<style lang="scss" scoped>
.block-podcast {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    padding: 4rem 5rem;
    color: var(--bg);
    background: var(--txt);
}
.header-podcast {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    width: 100%;
    .icon {
        width: 5.3rem;
        height: 3.5rem;
        fill: var(--bg);
    }
}
.podcast-infos {
    display: flex;
    align-items: baseline;
    font-family: var(--urbanist);
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #9d9d9d;
}
</style>
