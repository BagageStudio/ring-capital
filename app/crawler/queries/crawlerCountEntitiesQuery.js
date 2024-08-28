export default `
    query CrawlerCountEntities($lang: SiteLocale) {
        _allModularsMeta(locale: $lang) {
            count
        }
        _allFundsMeta(locale: $lang, filter: {slug: {neq: null}}) {
            count
        }
        _allPortfolioItemsMeta(locale: $lang, filter: {slug: {neq: null}}) {
            count
        }
    }
`;
