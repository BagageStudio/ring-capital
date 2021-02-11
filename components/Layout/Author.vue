<template>
    <div v-if="content" class="author">
        <div class="author-photo">
            <FastImage class="author-img" :image="content.author.image" cover />
        </div>
        <div class="author-txt">
            <span class="author-name">{{ content.author.name }}</span>
            <span class="author-info">
                <span class="author-date">{{
                    new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(content.date))
                }}</span>
                <span>{{ content.readingTime }} {{ $t('news.readingTime') }}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.author {
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.author-photo {
    flex: 0 0 auto;
    position: relative;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    .author-img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
}
.author-name {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 21px;
    color: $orbit;
}
.author-info {
    display: flex;
    align-items: baseline;
    color: $neptune;
    font-size: 1.4rem;
    line-height: 17px;
}
.author-date {
    display: flex;
    align-items: center;
    &:after {
        content: '';
        width: 3px;
        height: 3px;
        margin: -6px 10px 0;
        border-radius: 50%;
        background-color: currentColor;
    }
}
</style>
