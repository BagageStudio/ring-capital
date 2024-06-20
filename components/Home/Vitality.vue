<template>
    <div class="wrapper-vitality container">
        <div class="container-small">
            <div class="vitality">
                <h2 class="vitality-title">{{ data.vitalityTitle }}</h2>
                <h3 class="vitality-subtitle" v-html="data.vitalitySubtitle"></h3>
                <div class="bottom-vitality">
                    <div class="vitality-intro" v-html="data.vitalityIntro"></div>
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
    margin-top: 60px;
    margin-bottom: 50px;
}
.vitality {
    container-type: inline-size;
}
.vitality-title {
    display: block;
    margin-bottom: 40px;
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
    line-height: 48px;
    font-weight: 700;
    color: #148668;
}
.bottom-vitality {
    position: relative;
    margin-top: 20px;
    padding-top: 20px;
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
    font-size: 2.5rem;
    line-height: 32px;
}
.vitality-numbers {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}
.vitality-number-content {
    position: relative;
    flex: 0 0 auto;
    width: 50%;
    padding: 10px var(--gutter) 20px;
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
    line-height: 60px;
}
.vitality-content {
    font-family: var(--urbanist);
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.3px;
}

@media (min-width: $desktop) {
    .vitality-title {
        margin-bottom: 60px;
    }
    .vitality-subtitle {
        font-size: 5rem;
        line-height: 60px;
    }
    .bottom-vitality {
        display: flex;
        align-items: flex-start;
        padding-top: 0;
    }
    .vitality-intro {
        flex: 0 0 auto;
        width: 50%;
        padding-top: 30px;
    }
    .vitality-numbers {
        flex: 0 0 auto;
        width: 50%;
        margin-top: 0;
    }
    .vitality-number-content {
        padding: 10px var(--gutter) 40px;
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
