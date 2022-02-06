<template>
    <div class="wrapper-text-module">
        <div class="container">
            <div class="container-small wysiwyg content-pad">
                <div class="content-text-module" v-html="content.text" />
            </div>
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
.wrapper-text-module {
    padding: 70px 0;
}
.content-text-module {
    ::v-deep * {
        &:first-child {
            margin-top: 0;
        }
    }
}

@media (min-width: $desktop) {
    .wrapper-text-module {
        padding: 100px 0;
    }
}
</style>
