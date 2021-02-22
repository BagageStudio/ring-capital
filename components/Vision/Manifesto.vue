<template>
    <div v-if="content" class="wrapper-manifesto">
        <div v-for="manifesto in content" :key="manifesto.id" class="manifesto">
            <div class="container-manifesto container">
                <div class="section-title">
                    <h3
                        class="manifesto-title basic-h3 underlined strong-neptune"
                        v-html="manifesto.blockTitleTitle"
                    ></h3>
                    <h4 v-if="manifesto.blockTitleSubtitle" class="manifesto-subtitle basic-h4">
                        <span>{{ manifesto.blockTitleSubtitle }}</span>
                    </h4>
                    <div
                        v-if="manifesto.blockTitleText"
                        class="manifesto-text neptune"
                        v-html="manifesto.blockTitleText"
                    ></div>
                </div>
                <div class="section-content">
                    <h4 v-if="manifesto.blockContentTitle" class="manifesto-subtitle basic-h4">
                        <span>{{ manifesto.blockContentTitle }}</span>
                    </h4>
                    <div
                        v-if="manifesto.blockContentText"
                        class="manifesto-text neptune"
                        v-html="manifesto.blockContentText"
                    ></div>
                    <div v-if="manifesto.blockContentImage" class="manifesto-img">
                        <FastImage class="img" :image="manifesto.blockContentImage" cover />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Array, required: true }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-manifesto {
    padding: 80px 0;
    color: $orbit;
    background: $grey;
}
.manifesto {
    margin-bottom: 250px;
    &:last-child {
        margin-bottom: 0;
    }
}
.section-title,
.section-content {
    padding: 0 #{$gutter};
}
.section-title {
    margin-bottom: 40px;
}
.manifesto-title {
    margin-bottom: 0;
    + .manifesto-subtitle,
    + .manifesto-text {
        margin-top: 30px;
    }
}
.manifesto-subtitle {
    margin-bottom: 0;
    + .manifesto-text {
        margin-top: 20px;
    }
}
.manifesto-img {
    position: relative;
    max-height: 400px;
    &::before {
        content: '';
        display: block;
        padding-bottom: 142.5%;
    }
    .img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
}

@media (min-width: $tablet) {
    .manifesto {
        &:nth-child(even) {
            .container-manifesto {
                flex-direction: row-reverse;
                .section-title {
                    width: percentage(4/8);
                }
                .section-content {
                    width: percentage(3/8);
                }
            }
        }
    }
    .container-manifesto {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .section-title {
        flex: 0 0 auto;
        width: percentage(3/8);
    }
    .section-content {
        flex: 0 0 auto;
        width: percentage(4/8);
    }
    .manifesto-img {
        max-height: none;
    }
}
@media (min-width: $desktop) {
    .wrapper-manifesto {
        padding: 130px 0 160px;
    }
    .manifesto {
        &:nth-child(even) {
            .container-manifesto {
                .section-title {
                    width: percentage(6/12);
                    padding: 0 #{$gutter};
                }
                .section-content {
                    width: percentage(6/12);
                    padding-right: calc(#{percentage(1/12)} + #{$gutter});
                }
            }
        }
    }
    .section-title {
        width: percentage(6/12);
        padding-right: calc(#{percentage(1/12)} + #{$gutter});
    }
    .section-content {
        width: percentage(6/12);
    }
}
@media (min-width: $desktop-large) {
    .manifesto {
        &:nth-child(even) {
            .container-manifesto {
                .section-title {
                    padding: 0 calc(#{percentage(1/12)} + #{$gutter}) 0 #{$gutter};
                }
                .section-content {
                    padding: 0 calc(#{percentage(1/12)} + #{$gutter});
                }
            }
        }
    }
    .section-title {
        padding: 0 calc(#{percentage(1/12)} + #{$gutter});
    }
    .section-content {
        padding: 0 calc(#{percentage(1/12)} + #{$gutter}) 0 #{$gutter};
    }
    .manifesto-img {
        position: relative;
        top: 100px;
    }
}
</style>
