export default `
    query Crawler($lang: SiteLocale, $first: IntType, $skip: IntType) {
        allModulars(locale: $lang, first: $first, skip: $skip, filter: {slug: {neq: null}}) {
            slug
            _modelApiKey
        }
        allPortfolioItems(locale: $lang, first: $first, skip: $skip, filter: {slug: {neq: null}}) {
            slug
            _modelApiKey
        }
        allFunds(locale: $lang, first: $first, skip: $skip, filter: {slug: {neq: null}}) {
            slug
            _modelApiKey
        }
        contact(locale: $lang) {
            slug
            _modelApiKey
        }
        team(locale: $lang) {
            slug
            _modelApiKey
        }
        mediaList(locale: $lang) {
            slug
            _modelApiKey
        }
    }
`;
