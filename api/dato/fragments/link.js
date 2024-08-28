export default `
    fragment link on LinkRecord {
        id
        label
        title
        externalLink
        hash
        internalLink {
            ... on ModularRecord {
                _modelApiKey
                slug
            }
            ... on TeamRecord {
                _modelApiKey
                slug
            }
            ... on ContactRecord {
                _modelApiKey
                slug
            }
            ... on FundRecord {
                _modelApiKey
                slug
            }
            ... on HomepageRecord {
                _modelApiKey
            }
            ... on PortfolioItemRecord {
                _modelApiKey
                slug
            }
            ... on PortfolioListRecord {
                _modelApiKey
                slug
            }
            ... on MediaListRecord {
                _modelApiKey
                slug
            }
            ... on HomeRecord {
                _modelApiKey
            }
            ... on PageRecord {
                _modelApiKey
                slug
            }
            ... on PortfolioRecord {
                _modelApiKey
                slug
            }
			... on PortfolioTechRecord {
                _modelApiKey
                slug
            }
            ... on InvestorsPageRecord {
                _modelApiKey
                slug
            }
            ... on CompanyRecord {
                _modelApiKey
                slug
            }
            ... on UseCasesPageRecord {
                _modelApiKey
                slug
            }
            ... on PodcastsPageRecord {
                _modelApiKey
                slug
            }
            ... on PressRoomRecord {
                _modelApiKey
                slug
            }
            ... on SustainableEngagementRecord {
                _modelApiKey
                slug
            }
            ... on Ring2successRecord {
                _modelApiKey
                slug
            }
            ... on JobsPageRecord {
                _modelApiKey
                slug
            }
        }
        description
    }
`;
