<template>
    <div class="block-podcast">
        <header class="header-podcast">
            <div class="podcast-infos">
                <span v-if="data.subtitle" class="podcast-subtitle">{{ data.subtitle }}</span
                >{{ data.readingTime }}&nbsp;MN
            </div>
            <Icon name="podcast" />
        </header>
        <span class="podcast-name basic-txt">{{ data.name }}</span>
        <div class="wrapper-podcast-link">
            <LinkTo class="podcast-link btn-underlined" :link="data.link" :hide-label="true">
                {{ linkLabel }}
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
.podcast-subtitle {
    display: flex;
    align-items: center;
    &::after {
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        margin: 0 6px;
        border-radius: 50%;
        background: currentColor;
    }
}
</style>
