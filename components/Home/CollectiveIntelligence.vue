<template>
    <div id="collective-intelligence" class="wrapper-section-1">
        <SchemaCollectiveIntelligence
            v-if="isL"
            :links="[data.section1BottomRightLink, data.section1TopRightLink, data.section1TopLeftLink]"
            :selected="selected"
        />
        <div class="container">
            <div class="wrapper-section-txt">
                <FastImage
                    v-if="data.section1MobileImage && !isL"
                    class="section-mobile-image"
                    :image="data.section1MobileImage"
                    cover
                />
                <h2 v-if="data.section1Title" class="basic-h2 underlined">
                    <span>{{ data.section1Title }}</span>
                </h2>
                <p v-if="data.section1Subtitle" class="basic-subtitle">{{ data.section1Subtitle }}</p>
                <div v-if="data.section1Content" class="basic-txt" v-html="data.section1Content"></div>
                <LinkTo v-if="data.section1Link" class="section-btn btn-block secondary" :link="data.section1Link" />
            </div>
            <div class="wrapper-section-links">
                <LinkTo
                    v-if="data.section1TopLeftLink"
                    class="section-link"
                    :link="data.section1TopLeftLink"
                    hide-label
                    @mouseover.native="selected = data.section1TopLeftLink.id"
                    @mouseleave.native="selected = ''"
                >
                    <span class="section-link-img">
                        <FastImage
                            v-if="data.section1TopLeftImage && isL"
                            class="section-img"
                            :image="data.section1TopLeftImage"
                            cover
                        />
                    </span>
                    <span class="section-link-txt">
                        <span class="section-link-label">{{ data.section1TopLeftLink.label }}</span>
                        <span class="section-link-arrow">
                            <span class="arrow-bg"></span>
                        </span>
                    </span>
                </LinkTo>
                <LinkTo
                    v-if="data.section1TopRightLink"
                    class="section-link"
                    :link="data.section1TopRightLink"
                    hide-label
                    @mouseover.native="selected = data.section1TopRightLink.id"
                    @mouseleave.native="selected = ''"
                >
                    <span class="section-link-img">
                        <FastImage
                            v-if="data.section1TopRightImage && isL"
                            class="section-img"
                            :image="data.section1TopRightImage"
                            cover
                        />
                    </span>
                    <span class="section-link-txt">
                        <span class="section-link-label">{{ data.section1TopRightLink.label }}</span>
                        <span class="section-link-arrow">
                            <span class="arrow-bg"></span>
                        </span>
                    </span>
                </LinkTo>
                <LinkTo
                    v-if="data.section1BottomLeftLink"
                    class="section-link"
                    :link="data.section1BottomLeftLink"
                    hide-label
                >
                    <span class="section-link-img">
                        <FastImage
                            v-if="data.section1BottomLeftImage && isL"
                            class="section-img"
                            :image="data.section1BottomLeftImage"
                            cover
                        />
                    </span>
                    <span class="section-link-txt">
                        <span class="section-link-label">{{ data.section1BottomLeftLink.label }}</span>
                        <span class="section-link-arrow">
                            <span class="arrow-bg"></span>
                        </span>
                    </span>
                </LinkTo>
                <LinkTo
                    v-if="data.section1BottomRightLink"
                    class="section-link"
                    :link="data.section1BottomRightLink"
                    hide-label
                    @mouseover.native="selected = data.section1BottomRightLink.id"
                    @mouseleave.native="selected = ''"
                >
                    <span class="section-link-img">
                        <FastImage
                            v-if="data.section1BottomRightImage && isL"
                            class="section-img"
                            :image="data.section1BottomRightImage"
                            cover
                        />
                    </span>
                    <span class="section-link-txt">
                        <span class="section-link-label">{{ data.section1BottomRightLink.label }}</span>
                        <span class="section-link-arrow">
                            <span class="arrow-bg"></span>
                        </span>
                    </span>
                </LinkTo>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        selected: ''
    }),
    computed: {
        isL() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.l;
        }
    }
};
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    z-index: 1;
}
.wrapper-section-1 {
    position: relative;
    padding: 60px 0;
    color: $orbit;
    background: $white;
}
.wrapper-section-txt {
    padding: 0 $gutter;
}
.section-mobile-image {
    margin-bottom: 30px;
    ::v-deep .image {
        max-height: 400px;
    }
}
.section-btn {
    margin-top: 10px;
}
.wrapper-section-links {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 0 $gutter;
}
.section-link {
    position: relative;
    text-decoration: none;
    margin-bottom: 4px;
    color: $white;
    background: $orbit;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: $neptune;
        opacity: 0;
        transition: opacity 0.2s ease-out;
    }
    &:last-child {
        margin-bottom: 0;
    }
    &:hover,
    &:focus {
        &::before {
            opacity: 1;
        }
    }
}
.section-link-txt {
    position: relative;
    display: flex;
    justify-content: space-between;
}
.section-link-label {
    font-family: $space;
    font-size: 1.6rem;
    padding: 25px 0 25px 30px;
}
.section-link-arrow {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    width: 74px;
    padding: 25px 30px;
    background: $orbit;
    &::before {
        content: '';
        display: block;
        width: 7px;
        height: 7px;
        border-top: 1px solid $white;
        border-right: 1px solid $white;
        transform: rotate(45deg);
    }
}

@media (min-width: $phone) {
    .wrapper-section-links {
        width: percentage(3/4);
    }
}

@media (min-width: $desktop-small) {
    .schema {
        position: absolute;
        top: 0;
        right: 0;
        width: calc(100% + 650px);
        height: 100%;
        max-width: 2200px;
        // z-index: -1;
        overflow: hidden;
        ::v-deep svg {
            margin-top: -70px;
        }
    }
    .wrapper-section-1 {
        .container {
            display: flex;
            align-items: center;
        }
    }

    .wrapper-section-txt,
    .wrapper-section-links {
        flex: 0 0 auto;
    }
    .wrapper-section-txt {
        margin-top: 140px;
        width: percentage(3/8);
    }
    .wrapper-section-links {
        width: percentage(5/8);
        display: grid;
        grid-template-columns: #{percentage(1/5)} #{percentage(2/5)} calc(#{percentage(2/5)} + #{$grid-gutter-s});
        grid-template-rows: 94px 199px 188px 233px 83px;
        margin: 0;
        padding: 0;
    }
    .section-link {
        display: flex;
        flex-direction: column;
        margin: 10px;
        &::before {
            content: none;
        }
        .section-link-arrow {
            position: relative;
            &::before {
                z-index: 1;
                transition: border-color 0.2s ease-in-out 0.2s;
            }
        }
        .arrow-bg {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: $orbit;
                clip-path: ellipse(0% 50% at 0% 50%);
                transition: clip-path 0.4s cubic-bezier(0.65, 0, 0.35, 1) 0.05s;
            }
        }
        &:nth-child(1) {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 4;
            background: $dark;
        }
        &:nth-child(2) {
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 3;
            margin-right: 0;
            color: $orbit;
            background: $saturn;
        }
        &:nth-child(3) {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 4;
            grid-row-end: 5;
            color: $orbit;
            background: $white;
        }
        &:nth-child(4) {
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 3;
            grid-row-end: 6;
            margin-right: 0;
            background: $neptune;
        }
        &:hover,
        &:focus {
            .section-img {
                transform: scale(1.05);
            }
            .section-link-arrow {
                &::before {
                    transition: border-color 0.2s ease-in-out 0.1s;
                    border-color: $white;
                }
                .arrow-bg::before {
                    clip-path: ellipse(130% 80% at 0% 50%);
                }
            }
        }
    }
    .section-link-arrow {
        background: none;
        transition: background-color 0.2s ease-out;
        &::before {
            border-color: currentColor;
            transition: border-color 0.2s ease-out;
        }
    }
    .section-link-img {
        flex: 1 1 auto;
        position: relative;
        min-height: 0;
        overflow: hidden;
        .section-img {
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            transform-origin: 50% 50%;
            transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
        }
    }
    .section-link-txt {
        flex: 0 0 auto;
    }
}
@media (min-width: $desktop) {
    .wrapper-section-1 {
        padding: 80px 0;
    }
    .wrapper-section-txt {
        width: percentage(6/12);
        padding: 0 calc(#{percentage(1/12)} + #{$gutter}) 0 #{$gutter};
    }
    .wrapper-section-links {
        width: percentage(6/12);
        grid-template-columns: #{percentage(1/6)} #{percentage(3/6)} calc(#{percentage(2/6)} + #{$grid-gutter-l});
    }
}
@media (min-width: $desktop-large) {
    .schema ::v-deep svg {
        margin-top: 0;
    }
    .wrapper-section-1 {
        padding: 150px 0 75px;
    }
    .wrapper-section-txt {
        margin-top: 0;
        padding: 0 calc(#{percentage(1/12)} + #{$gutter});
    }
    .wrapper-section-links {
        grid-template-rows: 125px 265px 250px 310px 110px;
    }
}
</style>
