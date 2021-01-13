<template>
    <div>
        <h4 v-if="title" class="basic-h4">{{ title }}</h4>
        <ul v-if="content" class="logos-list">
            <li v-for="news in content" :key="news.id">
                <a class="news-link" :href="news.linkUrl" target="_blank" rel="noopener noreferrer">
                    <div class="news-img">
                        <img :src="news.cover.url" :alt="news.cover.alt" />
                    </div>
                    <div class="news-text">
                        <div class="news-info">
                            <span class="news-date">{{
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(news.date))
                            }}</span>
                            <span>{{ news.readingTime }} min read</span>
                        </div>
                        <p class="news-title">{{ news.title }}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },
        content: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.news-link {
    text-decoration: none;
}
.news-info {
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: $neptune;
    font-size: 1.4rem;
}
.news-date {
    display: flex;
    align-items: center;
    &:after {
        content: '';
        width: 3px;
        height: 3px;
        margin: 0 10px;
        border-radius: 50%;
        background-color: currentColor;
    }
}
.news-title {
    margin: 15px 0 0;
}

@media (min-width: $desktop-small) {
    .news-link {
        display: flex;
        align-items: center;
        max-width: none;
    }
    .news-img,
    .news-text {
        flex: 1 0 auto;
    }
    .news-img {
        width: 240px;
        margin-right: 15px;
    }
    .news-text {
        width: 150px;
    }
    .news-info {
        margin-top: 0;
    }
    .news-title {
        margin-top: 10px;
    }
}
</style>
