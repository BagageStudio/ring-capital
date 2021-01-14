<template>
    <div class="wrapper-news-list">
        <div class="container">
            <h4 v-if="title" class="basic-h4 news-list-title">{{ title }}</h4>
            <ul v-if="content" class="news-list">
                <li v-for="news in content" :key="news.id">
                    <a class="news-link" :href="news.linkUrl" target="_blank" rel="noopener noreferrer">
                        <span class="news-img">
                            <img :src="news.cover.url" :alt="news.cover.alt" />
                        </span>
                        <span class="news-text">
                            <span class="news-info">
                                <span class="news-date">{{
                                    new Intl.DateTimeFormat('en-US', {
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(news.date))
                                }}</span>
                                <span>{{ news.readingTime }} min read</span>
                            </span>
                            <p class="news-title">{{ news.title }}</p>
                        </span>
                    </a>
                </li>
            </ul>
            <div class="wrapper-buttons">
                <button class="btn-prev" type="button"></button>
                <button class="btn-next" type="button"></button>
            </div>
        </div>
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
.wrapper-news-list {
    padding: 60px 0 50px;
    color: $orbit;
    background: $white;
    overflow: hidden;
}
.news-list-title {
    padding: 0 $gutter;
}
.news-list {
    display: flex;
    justify-content: flex-start;
    margin: 40px 0 0;
    > li {
        flex: 0 0 auto;
        width: percentage(3/4);
        padding: 0 $gutter;
    }
}
.news-link {
    display: block;
    text-decoration: none;
}
.news-img {
    position: relative;
    display: block;
    &::before {
        content: '';
        display: block;
        padding-bottom: 57%;
    }
    > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.news-text {
    display: block;
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
.wrapper-buttons {
    display: flex;
    align-items: center;
    margin-top: 30px;
    padding: 0 $gutter;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 40px;
        border: 1px solid $neptune;
        &::before {
            content: '';
            width: 7px;
            height: 7px;
            border-top: 1px solid $orbit;
            border-right: 1px solid $orbit;
        }
        &.btn-prev {
            margin-right: 10px;
            &::before {
                transform: rotate(225deg);
            }
        }
        &.btn-next {
            &::before {
                transform: rotate(45deg);
            }
        }
    }
}

@media (min-width: $tablet) {
    .news-list {
        > li {
            width: percentage(5/8);
        }
    }
}
@media (min-width: $desktop-small) {
    .wrapper-news-list {
        .container {
            position: relative;
        }
    }
    .news-link {
        display: flex;
        align-items: center;
        max-width: none;
    }
    .news-img,
    .news-text {
        width: 50%;
    }
    .news-img {
        margin-right: 20px;
    }
    .news-info {
        margin-top: 0;
    }
    .wrapper-buttons {
        position: absolute;
        top: 0;
        right: #{$gutter + $grid-gutter-l};
        margin: 0;
        padding: 0;
    }
}
@media (min-width: $desktop) {
    .news-list {
        > li {
            width: percentage(5/12);
        }
    }
    .news-text {
        padding-right: 20px;
    }
}
</style>
