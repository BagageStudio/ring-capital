<template>
    <div v-if="content" class="wrapper-crew">
        <div class="container">
            <div class="content-pad">
                <div class="wrapper-title">
                    <h3 class="crew-title basic-h3 underlined strong-saturn" v-html="content.crewTitle"></h3>
                </div>
                <div v-for="crewSection in content.crewSections" :key="crewSection.id" class="crew-section">
                    <h4 class="crew-section-title basic-h4">{{ crewSection.title }}</h4>
                    <CrewMembers :content="crewSection.crewMembers" />
                </div>
                <div class="crew-section">
                    <h4 class="crew-section-title basic-h4">{{ content.partnersTitle }}</h4>
                    <div class="wrapper-partners">
                        <LogosList :content="content.partners" show-label class="medium-grid big-height" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-crew {
    padding: 80px 0;
}
.crew-title {
    margin-bottom: 60px;
}
.crew-section {
    margin-bottom: 60px;
    &:last-child {
        margin-bottom: 0;
    }
}
.crew-section-title {
    margin-bottom: 30px;
}
.wrapper-partners {
    width: calc(100% + #{2 * $gutter});
    margin-left: -$gutter;
}

@media (min-width: $phone) {
    .crew-section {
        margin-bottom: 40px;
    }
}
@media (min-width: $desktop) {
    .wrapper-crew {
        padding: 120px 0;
    }
}
@media (min-width: $desktop-large) {
    .crew-title {
        margin-bottom: 80px;
    }
    .crew-section {
        margin-bottom: 100px;
    }
    .crew-section-title {
        margin-bottom: 60px;
    }
}
</style>
