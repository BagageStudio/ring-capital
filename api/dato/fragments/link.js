export default `
    fragment link on LinkRecord {
        id
        label
        title
        externalLink
        internalLink {
            ... on HomeRecord {
                _modelApiKey
            }
            ... on PageRecord {
                _modelApiKey
                slug
            }
            ... on TeamRecord {
                _modelApiKey
                slug
            }
            ... on PortfolioRecord {
                _modelApiKey
                slug
            }
            ... on InvestorsPageRecord {
                _modelApiKey
                slug
            }
            ... on ContactRecord {
                _modelApiKey
                slug
            }
        }
        description
    }
`;
