<template>
    <div class="logos-wrapper container content-pad">
        <h2 v-if="content.title" class="basic-h2 logos-title">{{ content.title }}</h2>
        <h3 v-if="content.subtitle" class="basic-h3 logos-subtitle">{{ content.subtitle }}</h3>
        <div class="logos">
            <div v-for="logo in content.logos" :key="logo.id" class="logo">
                <LinkTo v-if="logo.link" class="inner-logo" :link="logo.link" hide-label>
                    <FastImage :image="logo.image" contains />
                </LinkTo>
                <div v-else class="inner-logo">
                    <FastImage :image="logo.image" contains />
                </div>
            </div>
        </div>
        <div v-if="content.link" class="link-wrapper">
            <LinkTo v-if="content.link.__typename === 'LinkRecord'" class="col-cta btn-rounded" :link="content.link" />
            <LinkToFile
                v-else-if="content.link.__typename === 'LinkFileRecord'"
                class="col-cta btn-rounded"
                :link="content.link"
            />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.logos-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.logos-title,
.logos-subtitle {
    width: 100%;
    margin-bottom: 4rem;
    text-align: center;
}

.logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 1px solid var(--txt);
    border-bottom: 1px solid var(--txt);
}

.logo {
    width: 50%;
    height: calc(5.5rem + 4rem);
}

.inner-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
    .fast-image {
        width: 100%;
        height: 100%;
    }
}

.link-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
}

@media (min-width: $tablet) {
    .logo {
        width: 33.33%;
    }
}

@media (min-width: $desktop) {
    .logo {
        width: auto;
    }
    .logos-wrapper {
        padding-top: 7.5rem;
        padding-bottom: 7.5rem;
    }
    .logos-title,
    .logos-subtitle {
        width: 66.66%;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
