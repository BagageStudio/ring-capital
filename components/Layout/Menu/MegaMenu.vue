<template>
    <div class="menu-item">
        <button class="label" :class="{ active: open }" @click="toggleSubmenu">{{ data.megaMenu.title }}</button>
        <div ref="submenuWrapper" class="menu-item-content-wrapper">
            <div ref="submenu" class="menu-item-content">
                <div class="submenu-links">
                    <LinkTo v-for="link in data.megaMenu.links" :key="link.label" class="submenu-link" :link="link" />
                </div>
                <span class="submenu-title">{{ data.megaMenu.socialTitle }}</span>
                <ul v-if="data.megaMenu.social" class="socials">
                    <li v-for="link in data.megaMenu.social.socialLinks" :key="link.title" class="social">
                        <a class="social-link" :class="link.iconName" :href="link.link" :aria-label="link.title"
                            ><Icon :name="link.iconName"
                        /></a>
                    </li>
                </ul>
                <div class="menu-news">
                    <span v-if="data.megaMenu.newsTitle" class="submenu-title">{{ data.megaMenu.newsTitle }}</span>
                    <a :href="data.megaMenu.news.linkUrl" class="news-link">
                        <img :src="data.megaMenu.news.cover.url" :alt="data.megaMenu.news.cover.alt" />
                        <div class="news-info">
                            <span class="news-date">{{
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(data.megaMenu.news.date))
                            }}</span>
                            <span>{{ data.megaMenu.news.readingTime }} min read</span>
                        </div>
                        <p class="news-title">{{ data.megaMenu.news.title }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        open: false
    }),
    methods: {
        toggleSubmenu() {
            this.open = !this.open;
            this.toggleAccordion();
        },
        toggleAccordion() {
            const submenu = this.$refs.submenu;
            const submenuWrapper = this.$refs.submenuWrapper;

            if (!submenu || !submenuWrapper) return;

            const submenuHeight = submenu.getBoundingClientRect().height;

            const maxHeight = this.open ? submenuHeight : 0;

            if (submenuWrapper.style.maxHeight === 'none') {
                gsap.set(submenuWrapper, { clearProps: 'maxHeight' });
                gsap.set(submenuWrapper, { maxHeight: submenuHeight });
            }

            gsap.to(submenuWrapper, {
                duration: 0.6,
                maxHeight,
                opacity: Number(this.open),
                ease: 'power4.inOut',
                onComplete: () => {
                    if (this.open) gsap.to(submenuWrapper, { duration: 0, maxHeight: 'none' });
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.submenu-links {
    margin-bottom: 10px;
}
.socials {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 0 48px;
    > li {
        flex: 0 0 auto;
        margin-right: 40px;
        &:last-child {
            margin-right: 0;
        }
    }
}

.social-link {
    display: block;
    fill: $neptune;
    &.linkedin {
        width: 24px;
        height: 27px;
    }
    &.twitter {
        width: 28px;
        height: 24px;
    }
    &.instagram {
        width: 27px;
        height: 27px;
    }
    &.medium {
        width: 32px;
        height: 18px;
    }
    > svg {
        display: block;
        width: 100%;
        height: 100%;
    }
}

.menu-news {
    margin-bottom: 60px;
}

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
</style>
