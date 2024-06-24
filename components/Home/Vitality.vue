<template>
    <div class="wrapper-vitality container">
        <div class="container-small">
            <div class="vitality">
                <h2 class="vitality-title">{{ data.vitalityTitle }}</h2>
                <h3 class="vitality-subtitle" v-html="data.vitalitySubtitle"></h3>
                <div class="bottom-vitality">
                    <div class="vitality-intro basic-txt" v-html="data.vitalityIntro"></div>
                    <div class="vitality-numbers">
                        <div
                            v-for="vitalityNumber in data.vitalityNumbers"
                            :key="vitalityNumber.id"
                            class="vitality-number-content"
                        >
                            <span class="vitality-number">{{ vitalityNumber.number }}</span>
                            <span class="vitality-content">{{ vitalityNumber.content }}</span>
                        </div>
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
.wrapper-vitality {
    margin-top: 6rem;
    margin-bottom: 10rem;
}
.vitality {
    container-type: inline-size;
}
.vitality-title {
    display: block;
    margin-bottom: 4rem;
    padding: 0 var(--gutter);
    font-family: var(--urbanist);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 22cqw;
    line-height: 0.7;
    background-image: linear-gradient(#148668, #bfe593);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.vitality-subtitle {
    padding: 0 var(--gutter);
    font-family: var(--urbanist);
    font-size: 4rem;
    line-height: 4.8rem;
    font-weight: 700;
    color: #148668;
}
.bottom-vitality {
    position: relative;
    margin-top: 2rem;
    padding-top: 2rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--gutter);
        right: var(--gutter);
        border-top: 1px solid currentColor;
    }
}
.vitality-intro {
    padding: 0 var(--gutter);
}
.vitality-numbers {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
}
.vitality-number-content {
    position: relative;
    flex: 0 0 auto;
    width: 50%;
    padding: 1rem var(--gutter) 2rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        border-top: 1px solid currentColor;
    }
    > span {
        display: block;
    }
    &:nth-child(odd) {
        &::before {
            left: var(--gutter);
            right: 0;
        }
    }
    &:nth-child(even) {
        &::before {
            left: 0;
            right: var(--gutter);
        }
    }
}
.vitality-number {
    font-family: var(--urbanist);
    font-size: 5rem;
    font-weight: 600;
    line-height: 6rem;
}
.vitality-content {
    font-family: var(--urbanist);
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.7rem;
    letter-spacing: 0.03rem;
}

@media (min-width: $desktop) {
    .vitality-title {
        margin-bottom: 6rem;
    }
    .vitality-subtitle {
        font-size: 5rem;
        line-height: 6rem;
    }
    .bottom-vitality {
        display: flex;
        align-items: flex-start;
        padding-top: 0;
    }
    .vitality-intro {
        flex: 0 0 auto;
        width: 50%;
        padding-top: 3rem;
    }
    .vitality-numbers {
        flex: 0 0 auto;
        width: 50%;
        margin-top: 0;
    }
    .vitality-number-content {
        padding: 1rem var(--gutter) 4rem;
        &:nth-child(-n + 2) {
            &::before {
                content: none;
            }
        }
        &:nth-last-child(-n + 2) {
            padding-bottom: 0;
        }
        &:nth-child(odd) {
            &::before {
                left: var(--gutter);
                right: 0;
            }
        }
        &:nth-child(even) {
            &::before {
                left: 0;
                right: var(--gutter);
            }
        }
    }
}
</style>
