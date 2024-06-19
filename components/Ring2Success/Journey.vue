<template>
    <div v-if="content" ref="journey" class="wrapper-journey">
        <div class="container">
            <div class="wrapper-title content-pad">
                <h3 class="journey-title basic-h3 underlined strong-neptune" v-html="title"></h3>
            </div>
            <div class="journey-steps">
                <div v-for="(step, index) in content" :key="step.id" class="journey-step">
                    <span ref="stepsDotsParents" class="step-dot"><span ref="stepsDots"></span></span>
                    <span class="step-title" v-html="$options.filters.noPAround(step.title)"></span>
                    <span class="step-content" v-html="$options.filters.noPAround(step.text)"></span>
                    <span class="step-line"><span ref="stepsLines"></span></span>
                    <span v-if="index === content.length - 1" class="step-line-out">
                        <span ref="stepsLineOut"></span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    props: {
        title: { type: String, required: true },
        content: { type: Array, required: true }
    },
    data: () => ({
        stepsLines: [],
        stepsLineOut: null,
        stepsDots: [],
        stepsDotsParents: [],
        activeStep: 0,
        stepsDelay: 3,
        nbSteps: 0,
        dotsDuration: 0.2,
        dotsScaleDuration: 0.3,
        nextCounter: null,
        ease: 'power2.inOut',
        watcher: null
    }),
    mounted() {
        this.stepsLines = this.$refs.stepsLines;
        this.stepsLineOut = this.$refs.stepsLineOut;
        this.stepsDots = this.$refs.stepsDots;
        this.stepsDotsParents = this.$refs.stepsDotsParents;
        this.nbSteps = this.content.length;
        this.$nextTick(() => {
            this.watcher = this.$stereorepo.superScroll
                .watch({
                    element: this.$refs.journey
                })
                .on('enter-view', () => {
                    this.incrementSteps(0);
                })
                .on('leave-view', () => {
                    gsap.set([this.stepsDots, this.stepsDotsParents, this.stepsLines, this.stepsLineOut], {
                        clearProps: 'all'
                    });
                    gsap.killTweensOf([
                        this.stepsDots,
                        this.stepsDotsParents,
                        this.stepsLines,
                        this.incrementSteps,
                        this.stepsLineOut
                    ]);
                });
        });
    },
    beforeDestroy() {
        if (this.watcher) this.watcher.forget();
    },
    methods: {
        incrementSteps(counter) {
            const stepsTimeline = gsap.timeline();
            this.nextCounter = counter + 1;
            if (counter > 0) {
                // dot animation
                stepsTimeline.to(
                    this.stepsDotsParents[counter - 1],
                    {
                        scale: 1,
                        duration: this.dotsScaleDuration,
                        ease: this.ease
                    },
                    'dotIn'
                );
                stepsTimeline.to(
                    this.stepsDots[counter - 1],
                    {
                        x: '100%',
                        duration: this.dotsDuration,
                        ease: this.ease
                    },
                    'dotIn'
                );
                stepsTimeline.set(this.stepsDots[counter - 1], {
                    x: '-100%'
                });
            }
            // line animation
            stepsTimeline.to(this.stepsLines[counter], {
                x: '100%',
                duration: 2,
                delay: counter > 0 ? -0.7 : 0,
                ease: this.ease
            });
            stepsTimeline.set(this.stepsLines[counter], { x: '-100%' });
            // dot animation
            stepsTimeline.to(
                this.stepsDots[counter],
                {
                    x: 0,
                    duration: this.dotsDuration,
                    delay: -1,
                    ease: this.ease
                },
                'dot'
            );
            stepsTimeline.to(
                this.stepsDotsParents[counter],
                {
                    scale: 1.2,
                    duration: this.dotsScaleDuration,
                    delay: -1,
                    ease: this.ease
                },
                'dot'
            );
            if (counter === this.nbSteps - 1) {
                // dot animation
                stepsTimeline.to(
                    this.stepsDots[counter],
                    {
                        x: '100%',
                        duration: this.dotsDuration,
                        delay: this.stepsDelay / 2,
                        ease: this.ease
                    },
                    'dotOut'
                );
                stepsTimeline.to(
                    this.stepsDotsParents[counter],
                    {
                        scale: 1,
                        duration: this.dotsScaleDuration,
                        delay: this.stepsDelay / 2,
                        ease: this.ease
                    },
                    'dotOut'
                );
                stepsTimeline.set(this.stepsDots[counter], {
                    x: '-100%'
                });
                stepsTimeline.to(this.stepsLineOut, { x: '100%', duration: 2, delay: -0.7, ease: this.ease });
                stepsTimeline.set(this.stepsLineOut, { x: '-100%' });
                this.nextCounter = 0;
            }
            gsap.delayedCall(this.stepsDelay, this.incrementSteps, [this.nextCounter]);
        }
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
    font-family: var(--roboto);
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
        width: math.percentage(math.div(4, 8));
        padding: 0 $gutter;
    }
}
@media (min-width: $desktop) {
    .wrapper-journey {
        padding: 80px 0;
    }
    .journey-step {
        width: math.percentage(math.div(4, 12));
    }
}
@media (min-width: $desktop-large) {
    .journey-title {
        margin-bottom: 60px;
        padding: 0 #{math.percentage(math.div(1, 12))};
    }
    .journey-steps {
        padding: 0 #{math.percentage(math.div(1, 12))};
    }
    .journey-step {
        position: relative;
        width: math.percentage(math.div(2, 10));
        padding-top: 60px;
        &:first-child {
            .step-line {
                left: calc(250% - 50vw);
            }
        }
    }
    .step-dot {
        position: absolute;
        top: 0;
        left: 13px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: $neptune;
        overflow: hidden;
        z-index: 1;
        > span {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: 50%;
            transform: translate3d(-100%, 0, 0);
            background: $orbit;
        }
    }
    .step-line,
    .step-line-out {
        display: block;
        position: absolute;
        top: 7px;
        height: 1px;
        background: rgba($neptune, 0.4);
        overflow: hidden;
        > span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(270deg, rgba($orbit, 1) 0%, rgba($orbit, 0) 165px, rgba($orbit, 0) 100%);
            transform: translate3d(-100%, 0, 0);
        }
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
