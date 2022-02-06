<template>
    <div class="text-logos">
        <div class="container">
            <div class="wrapper-txt">
                <h4 class="basic-h4 text-logos-small-title">{{ data.title }}</h4>
                <div class="text-logos-text" v-html="data.text"></div>
            </div>
            <div class="wrapper-list">
                <div class="list-images" :class="{ 'big-image': data.images.length === 1 }">
                    <div v-for="listimg in data.images" :key="listimg.id" class="list-image">
                        <img :src="listimg.url" :alt="listimg.alt" />
                    </div>
                </div>
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
    }
};
</script>

<style lang="scss" scoped>
.text-logos {
    padding: 70px 0;
    color: $orbit;
    background: $white;
}
.text-logos-text {
    color: $neptune;
}
.wrapper-txt {
    padding: 0 $gutter;
}
.text-logos-small-title {
    margin-bottom: 30px;
}
.wrapper-list {
    margin-top: 55px;
}
.list-images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: calc(100% + 4px);
    margin: 0 0 0 -2px;
    padding: 0 $gutter;
    &.big-image {
        .list-image {
            width: auto;
            height: auto;
        }
    }
}
.list-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(#{percentage(1/2)} - 4px);
    margin: 2px;
    padding: 15px;
    height: 72px;
    background: $grey;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

@media (min-width: $tablet) {
    .list-image {
        width: calc(#{percentage(1/3)} - 4px);
    }
}
@media (min-width: $desktop-small) {
    .text-logos {
        .container {
            display: flex;
            align-items: center;
        }
    }
    .wrapper-txt {
        width: percentage(3/8);
    }
    .wrapper-list {
        width: percentage(5/8);
        margin: 0;
    }
}
@media (min-width: $desktop) {
    .text-logos {
        padding: 140px 0 155px;
    }
    .wrapper-txt {
        width: percentage(6/12);
        padding-right: calc(#{percentage(1/12)} + #{$gutter});
    }
    .wrapper-list {
        width: percentage(6/12);
    }
    .list-image {
        height: 100px;
        padding: 20px 25px;
    }
}
@media (min-width: $desktop-large) {
    .list-image {
        width: calc(#{percentage(1/3)} - 4px);
    }
}
@media (min-width: $desktop-xxl) {
    .wrapper-txt {
        width: percentage(5/12);
        padding: 0 calc(#{percentage(1/12)} + #{$gutter});
    }
    .wrapper-list {
        width: percentage(7/12);
        padding-right: percentage(1/12);
    }
}
</style>
