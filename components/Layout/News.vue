<template>
    <div>
        <h4 v-if="title" class="basic-h4">{{ title }}</h4>
        <ul v-if="content" class="logos-list">
            <li v-for="news in content" :key="news.id">
                <a :href="news.linkUrl" target="_blank" rel="noopener noreferrer">
                    <img :src="news.cover.url" :alt="news.cover.alt" />
                    {{ $options.filters.formatDate(news.date, $store.$i18n) }}{{ news.readingTime }}{{ news.title }}
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },
        content: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped></style>
