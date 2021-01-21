<template>
    <div class="menu-item notransi" @mouseover="showPopover" @mouseleave="hidePopover">
        <button class="label" :class="{ active: open }" @click="toggleMobileSubmenu">
            {{ data.megaMenu.title }}
        </button>
        <div ref="submenuWrapper" class="menu-item-content-wrapper">
            <div ref="submenu" class="menu-item-content">
                <div class="menu-ressource">
                    <div class="submenu-links">
                        <LinkTo
                            v-for="link in data.megaMenu.links"
                            :key="link.label"
                            class="submenu-link"
                            :link="link"
                        />
                    </div>
                    <span class="submenu-title">{{ data.megaMenu.socialTitle }}</span>
                    <ul v-if="data.megaMenu.social" class="socials">
                        <li v-for="link in data.megaMenu.social.socialLinks" :key="link.title" class="social">
                            <a class="social-link" :class="link.iconName" :href="link.link" :aria-label="link.title"
                                ><Icon :name="link.iconName"
                            /></a>
                        </li>
                    </ul>
                </div>
                <div class="menu-news">
                    <span v-if="data.megaMenu.newsTitle" class="submenu-title">{{ data.megaMenu.newsTitle }}</span>
                    <a :href="data.megaMenu.news.linkUrl" class="news-link">
                        <div class="news-img">
                            <img :src="data.megaMenu.news.cover.url" :alt="data.megaMenu.news.cover.alt" />
                        </div>
                        <div class="news-text">
                            <div class="news-info">
                                <span class="news-date">{{
                                    new Intl.DateTimeFormat('en-US', {
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(data.megaMenu.news.date))
                                }}</span>
                                <span>{{ data.megaMenu.news.readingTime }} {{ $t('news.readingTime') }}</span>
                            </div>
                            <p class="news-title">{{ data.megaMenu.news.title }}</p>
                        </div>
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
    computed: {
        isMobile() {
            return this.ww <= this.$breakpoints.list.l;
        },
        ww() {
            return this.$store.state.superWindow ? this.$store.state.superWindow.width : 320;
        }
    },
    methods: {
        toggleMobileSubmenu() {
            if (!this.isMobile) return;
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
                    if (this.open) {
                        gsap.to(submenuWrapper, { duration: 0, maxHeight: 'none' });
                    } else {
                        gsap.set(submenuWrapper, { clearProps: 'maxHeight,opacity' });
                    }
                }
            });
        },
        showPopover() {
            if (this.isMobile) return;
            this.open = true;
            const submenuWrapper = this.$refs.submenuWrapper;
            if (!submenuWrapper) return;

            gsap.set(submenuWrapper, {
                visibility: 'visible',
                pointerEvents: 'all'
            });

            gsap.to(submenuWrapper, {
                duration: 0.4,
                opacity: 1,
                y: 0,
                ease: 'power4.inOut'
            });
        },
        hidePopover() {
            if (this.isMobile) return;
            this.open = false;
            const submenuWrapper = this.$refs.submenuWrapper;
            if (!submenuWrapper) return;

            gsap.to(submenuWrapper, {
                duration: 0.4,
                opacity: 0,
                y: -10,
                ease: 'power4.inOut',
                onComplete: () => {
                    gsap.set(submenuWrapper, {
                        visibility: 'hidden',
                        pointerEvents: 'none'
                    });
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
    display: block;
    max-width: 380px;
    text-decoration: none;
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

@media (min-width: $desktop-small) {
    .menu-item-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .menu-ressource {
        position: relative;
        padding: 30px 35px 30px 50px;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background-color: $saturn;
        }
    }
    .socials {
        margin-bottom: 0;
        flex-wrap: nowrap;
        > li {
            margin-right: 15px;
        }
    }
    .menu-news {
        padding: 20px 30px 25px 30px;
        background-color: $white;
        color: $orbit;
        margin-bottom: 0;
        .submenu-title {
            color: $neptune;
            padding-bottom: 10px;
            margin-bottom: 24px;
            border-bottom: 1px solid #e6e6e6;
        }
    }
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
