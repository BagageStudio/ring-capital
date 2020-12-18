export default `
    query CrawlerCountEntities($lang: SiteLocale) {
        _allPagesMeta(locale: $lang) {
            count
        }
    }
`;
