<template>
    <div v-if="data" class="wrapper-team">
        <img src="/img/ring-blue.png" class="bg-img" />
        <div class="container content-pad">
            <div class="team-header">
                <h1 class="basic-h1" v-html="$options.filters.noPAround(data.title)"></h1>
                <p v-if="data.subtitle" class="basic-subtitle">{{ data.subtitle }}</p>
            </div>
        </div>
        <div class="container members">
            <LayoutTeamCard v-for="member in members" :key="member.id" :content="member" />
        </div>
        <Mods v-for="m in data.modules" :key="m.id" :data="m" />
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    data() {
        return {
            members: []
        };
    },
    mounted() {
        this.members = this.shuffle(this.data.members);
    },
    methods: {
        shuffle(array) {
            return [...array]
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-team {
    position: relative;
    padding-top: 14rem;
}
.bg-img {
    position: absolute;
    top: -4rem;
    right: -6rem;
    width: 29rem;
    max-width: none;
    z-index: -1;
}

.team-header {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid currentColor;
    .basic-h1 {
        margin-bottom: 2rem;
    }
}

.members {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10rem;
}

.team-card {
    width: 100%;
}

@media (min-width: $tablet) {
    .team-card {
        width: 50%;
    }
}

@media (min-width: $desktop) {
    .team-card {
        width: 25%;
    }
    .bg-img {
        top: 0rem;
        right: 0rem;
        width: 46rem;
    }
    .team-header {
        margin-bottom: 6rem;
        padding-bottom: 4rem;
        .basic-h1 {
            margin-bottom: 4rem;
        }
        .basic-subtitle {
            width: 58.33%;
        }
    }
}
</style>
