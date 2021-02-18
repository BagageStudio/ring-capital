<template>
    <div v-if="content" class="wrapper-journey">
        <div class="container">
            <div class="wrapper-title content-pad">
                <h3 class="journey-title basic-h3 underlined strong-neptune" v-html="title"></h3>
            </div>
            <div class="journey-steps">
                <div v-for="(step, index) in content" :key="step.id" class="journey-step">
                    <span class="step-title">{{ step.title }}</span>
                    <span class="step-content">{{ step.text }}</span>
                    <span class="step-line"></span>
                    <span v-if="index === content.length - 1" class="step-line-out"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        content: { type: Array, required: true }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-journey {
    padding: 40px 0;
    color: $orbit;
    background: $grey;
}
.journey-title {
    margin-bottom: 40px;
}
.journey-steps {
    padding: 0 $gutter;
}
.journey-step {
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
    span {
        display: block;
    }
}
.step-title {
    font-family: $space;
    font-size: 1.6rem;
    line-height: 24px;
    margin-bottom: 10px;
}
.step-content {
    font-size: 1.4rem;
    line-height: 24px;
    color: $neptune;
}
.step-line,
.step-line-out {
    display: none;
}

@media (min-width: $desktop-small) {
    .journey-steps {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 0;
    }
    .journey-step {
        flex: 0 0 auto;
        width: percentage(4/8);
        padding: 0 $gutter;
    }
}
@media (min-width: $desktop) {
    .wrapper-journey {
        padding: 80px 0;
    }
    .journey-step {
        width: percentage(4/12);
    }
}
@media (min-width: $desktop-large) {
    .journey-title {
        margin-bottom: 60px;
    }
    .journey-steps {
        padding: 0 #{percentage(1/12)};
    }
    .journey-step {
        position: relative;
        width: percentage(2/10);
        padding-top: 60px;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 13px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: $neptune;
        }
        &:first-child {
            .step-line {
                left: calc(250% - 50vw);
            }
        }
    }
    .step-line,
    .step-line-out {
        display: block;
        position: absolute;
        top: 7px;
        border-top: 1px solid rgba($neptune, 0.4);
    }
    .step-line {
        right: calc(100% - 20px);
        left: calc(-100% + 20px);
    }
    .step-line-out {
        right: calc(250% - 50vw);
        left: 20px;
    }
}
</style>
