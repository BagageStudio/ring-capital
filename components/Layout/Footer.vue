<template>
    <footer class="footer">
        <FastImage class="background-shape" :image="data.backgroundShape" contains />
        <div class="footer-container container">
            <div v-if="data.topTitle || data.topLink" class="footer-top">
                <div class="content-footer-top container-small content-pad">
                    <div v-if="data.topTitle" class="top-title">{{ data.topTitle }}</div>
                    <LinkTo v-if="data.topLink" class="top-link btn-rounded" :link="data.topLink" />
                </div>
            </div>
            <div v-if="data.linksColumn.length" class="footer-menu">
                <div class="content-footer-menu container-small content-pad">
                    <div v-for="(column, index) in data.linksColumn" :key="index" class="col-footer">
                        <span v-if="column.groupTitle" class="footer-group-title">{{ column.groupTitle }}</span>
                        <div v-if="column.links.length" class="col-footer-links">
                            <LinkTo v-for="link in column.links" :key="link.id" class="col-footer-link" :link="link" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="data.ringLogo || data.bCorporationLogo" class="logo-banner">
                <div class="content-logo-banner container-small content-pad">
                    <FastImage v-if="data.ringLogo" class="wrapper-logo-ring" :image="data.ringLogo" contains />
                    <FastImage
                        v-if="data.bCorporationLogo"
                        class="wrapper-logo-b-corporation"
                        :image="data.bCorporationLogo"
                        contains
                    />
                </div>
            </div>
            <div class="footer-bottom">
                <div class="content-footer-bottom container-small content-pad">
                    <div class="wrapper-bottom-menu-copy">
                        <div v-if="data.bottomLinks" class="bottom-menu">
                            <LinkTo
                                v-for="link in data.bottomLinks.links"
                                :key="link.id"
                                class="footer-menu-link"
                                :link="link"
                            />
                        </div>
                        <span class="copy">
                            {{ data.copyText }}
                        </span>
                    </div>
                    <div class="bottom-socials">
                        <a
                            class="bottom-social linkedin"
                            aria-label="LinkedIn"
                            :href="data.linkedinLink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FastImage :image="data.linkedinLogo" contains />
                        </a>
                        <a
                            class="bottom-social substack"
                            aria-label="Substack"
                            :href="data.substackLink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FastImage :image="data.substackLogo" contains />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import layoutData from '~/cms/data/layout-data.json';

export default {
    props: {
        minimal: { type: Boolean, default: false }
    },
    computed: {
        data() {
            return layoutData[this.$store.state.i18n.locale].footerClassic;
        }
    }
};
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
}
.background-shape {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    max-width: 500px;
    ::v-deep .image {
        object-position: 100% 100%;
    }
}
.footer-container {
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: calc(var(--gutter) * 2);
        right: calc(var(--gutter) * 2);
        border-top: 1px solid currentColor;
    }
}
.footer-top {
    padding-top: 4rem;
    padding-bottom: 4rem;
}
.content-footer-top {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 4rem;
}
.top-title {
    font-family: var(--urbanist);
    font-size: 5rem;
    line-height: 5rem;
    font-weight: 600;
}
.top-link {
    flex: 0 0 auto;
}
.logo-banner {
    position: relative;
    padding-top: 4rem;
    padding-bottom: 4rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--gutter);
        right: var(--gutter);
        border-top: 1px solid currentColor;
    }
}
.content-logo-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    &::after {
        content: '';
        order: 2;
        height: 10rem;
        border-left: 1px solid currentColor;
    }
}
.wrapper-logo-ring {
    order: 1;
    height: 5rem;
}
.wrapper-logo-b-corporation {
    order: 3;
    height: 10rem;
}
.footer-bottom {
    position: relative;
    padding-top: 4rem;
    padding-bottom: 4rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--gutter);
        right: var(--gutter);
        border-top: 1px solid currentColor;
    }
}
.content-footer-bottom {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
}
.wrapper-bottom-menu-copy,
.bottom-menu {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.footer-menu-link,
.copy {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
    text-decoration: none;
}
.bottom-socials {
    display: flex;
    align-items: center;
    gap: 3rem;
}
.bottom-social {
    &.linkedin {
        .fast-image {
            height: 2.5rem;
        }
    }
    &.substack {
        .fast-image {
            height: 1.8rem;
        }
    }
    .fast-image {
        display: block;
        ::v-deep .image {
            display: block;
        }
    }
}
.footer-menu {
    position: relative;
    padding-top: 4rem;
    padding-bottom: 4rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--gutter);
        right: var(--gutter);
        border-top: 1px solid currentColor;
    }
}
.content-footer-menu {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}
.col-footer {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.footer-group-title {
    display: block;
    font-family: var(--urbanist);
    font-size: 1.8rem;
    line-height: 2.2rem;
    font-weight: 700;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
}
.col-footer-links {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
}
.col-footer-link {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.1rem;
    text-decoration: none;
}

@media (min-width: $desktop-small) {
    .content-footer-top {
        flex-direction: row;
        justify-content: space-between;
    }
    .footer-bottom {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
    }
    .content-footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 4rem;
    }
    .wrapper-bottom-menu-copy,
    .bottom-menu {
        flex-direction: row;
        gap: 3rem;
    }
    .content-footer-menu {
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>
