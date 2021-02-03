<template>
    <div class="wrapper-news-list">
        <div class="container">
            <h4 v-if="title" class="basic-h4 news-list-title underlined">
                <span>{{ title }}</span>
            </h4>
            <ul v-if="content" ref="news" class="news-list">
                <li v-for="news in content" :key="news.id">
                    <a class="news-link" :href="news.linkUrl" target="_blank" rel="noopener noreferrer">
                        <span class="news-img">
                            <FastImage class="img" :image="news.cover" cover />
                        </span>
                        <span class="news-text">
                            <span class="news-info">
                                <span class="news-date">{{
                                    new Intl.DateTimeFormat('en-US', {
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(news.date))
                                }}</span>
                                <span>{{ news.readingTime }} {{ $t('news.readingTime') }}</span>
                            </span>
                            <p class="news-title">{{ news.title }}</p>
                        </span>
                    </a>
                </li>
            </ul>
            <div class="wrapper-buttons">
                <button class="btn-prev" type="button" @click="prevNews"></button>
                <button class="btn-next" type="button" @click="nextNews"></button>
            </div>
        </div>
    </div>
</template>
<script>
import { gsap } from 'gsap';

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
    },
    data: () => ({
        currentNews: 1,
        nbNews: 0,
        nbNewsFullyVisible: 1,
        widthPercentage: 75,
        sign: '-'
    }),
    computed: {
        ww() {
            if (!this.$store.state.superWindow) return false;
            return this.$store.state.superWindow.width;
        }
    },
    watch: {
        ww() {
            this.initNews();
        }
    },
    mounted() {
        this.nbNews = this.content.length;
        this.$nextTick(() => {
            this.initNews();
        });
    },
    methods: {
        initNews() {
            this.currentNews = 1;
            gsap.set(this.$refs.news, { x: 0 });
            if (this.ww >= this.$breakpoints.list.xl) {
                this.widthPercentage = 41.6667;
                this.nbNewsFullyVisible = 2;
            } else if (this.ww >= this.$breakpoints.list.m) {
                this.widthPercentage = 62.5;
                this.nbNewsFullyVisible = 1;
            } else {
                this.widthPercentage = 75;
                this.nbNewsFullyVisible = 1;
            }
        },
        moveNews(toNext) {
            if (!gsap.isTweening(this.$refs.news)) {
                if (toNext && this.currentNews + this.nbNewsFullyVisible <= this.nbNews) {
                    this.currentNews++;
                    this.sign = '-';
                    this.animNews();
                } else if (!toNext && this.currentNews - 1 >= 1) {
                    this.currentNews--;
                    this.sign = '+';
                    this.animNews();
                }
            }
        },
        animNews() {
            gsap.to(this.$refs.news, { x: this.sign + '=' + this.widthPercentage + '%', duration: 0.3 });
        },
        nextNews() {
            this.moveNews(true);
        },
        prevNews() {
            this.moveNews(false);
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
    .img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
.news-text {
    display: block;
}
.news-info {
    display: flex;
    align-items: baseline;
    margin-top: 20px;
    color: $neptune;
    font-size: 1.4rem;
    line-height: 17px;
}
.news-date {
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
.news-title {
    margin: 15px 0 0;
    font-size: 1.4rem;
    line-height: 20px;
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
        transition: background-color 0.2s ease-out;
        &::before {
            content: '';
            width: 7px;
            height: 7px;
            border-top: 1px solid $orbit;
            border-right: 1px solid $orbit;
            transition: border-color 0.2s ease-out;
        }
        &:hover {
            background: $neptune;
            &::before {
                border-color: $white;
            }
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
