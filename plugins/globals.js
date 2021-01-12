import Vue from 'vue';

Vue.filter('formatDate', (date, i18n) => {
    const [{ iso }] = i18n.locales.filter(({ code }) => {
        return code === i18n.locale;
    });
    const localeIso = iso.replace('_', '-');
    return new Date(date).toLocaleDateString(localeIso, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});
