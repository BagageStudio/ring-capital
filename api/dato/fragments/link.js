export default `
    fragment link on LinkRecord {
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
        }
        description
    }
`;
