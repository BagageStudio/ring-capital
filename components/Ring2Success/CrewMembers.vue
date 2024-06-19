<template>
    <ul v-if="content" class="crew-member-list">
        <li v-for="crewMember in content" :key="crewMember.id">
            <Ring2SuccessCrewMember :content="crewMember" />
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        content: { type: Array, required: true }
    },
    data: () => ({
        showModal: false
    })
};
</script>

<style lang="scss" scoped>
.crew-member-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    > li {
        margin: 0 0 20px;
        padding: 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
}

@media (min-width: $phone) {
    .crew-member-list {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        padding: 0;
        width: calc(100% + #{2 * $gutter});
        margin-left: -$gutter;
        > li {
            position: relative;
            width: math.percentage(math.div(2, 4));
            padding: 0 #{$gutter};
            &:last-child {
                margin-bottom: 20px;
            }
        }
    }
}
@media (min-width: $desktop-large) {
    .crew-member-list {
        > li {
            width: math.percentage(math.div(3, 12));
            margin-bottom: 40px;
            &:last-child {
                margin-bottom: 40px;
            }
        }
    }
}
</style>
