export default `
    fragment link on LinkRecord {
        label
        title
        externalLink
        internalLink {
            ... on HomeRecord {
                _modelApiKey
                slug
            }
            ... on PageRecord {
                _modelApiKey
                slug
            }
            ... on SolutionRecord {
                _modelApiKey
                slug
            }
            ... on ProductRecord {
                _modelApiKey
                slug
            }
            ... on AboutRecord {
                _modelApiKey
                slug
            }
            ... on DemoPageRecord {
                _modelApiKey
                slug
            }
            ... on CustomersPageRecord {
                _modelApiKey
            }
            ... on CustomerPostRecord {
                _modelApiKey
                slug
            }
            ... on PartnersPageRecord {
                _modelApiKey
                slug
            }
            ... on JoinUsPageRecord {
                _modelApiKey
            }
            ... on ApplyPageRecord {
                _modelApiKey
            }
            ... on BlogListPageRecord {
                _modelApiKey
            }
            ... on BlogPostRecord {
                _modelApiKey
                slug
            }
            ... on EventsListPageRecord {
                _modelApiKey
            }
            ... on WhitepapersListPageRecord {
                _modelApiKey
            }
            ... on WhitepaperPostRecord {
                _modelApiKey
                slug
            }
            ... on PressListPageRecord {
                _modelApiKey
            }
            ... on PressPostRecord {
                _modelApiKey
                slug
            }
            ... on DocumentationListPageRecord {
                _modelApiKey
            }
            ... on DocumentationPostRecord {
                _modelApiKey
                slug
            }
        }
        description
    }
`;
