export default `
    query Crawler($lang: SiteLocale, $first: IntType, $skip: IntType) {
        allPages(locale: $lang, first: $first, skip: $skip) {
            slug
            _modelApiKey
        }
    }
`;
