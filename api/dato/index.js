import linkFragment from './fragments/link';

import seo from './fields/seo';
import img from './fields/img';
import locales from './fields/locales';

export const layoutQuery = `
    ${linkFragment}
    query Layout($lang: SiteLocale) {
        header(locale: $lang) {
            navigation {
                ... on MegaRecord {
                    _modelApiKey
                    id
                    megaMenu {
                        title
                        links {
                            ...link
                        }
                        social {
                            socialLinks {
                            title
                            iconName
                            link
                            }
                        }
                        newsTitle
                        socialTitle
                        news {
                            title
                            cover {
                                ${img}
                            }
                            readingTime
                            date
                            linkUrl
                        }
                    }
                }
                ... on SingleLinkRecord {
                    _modelApiKey
                    id
                    link {
                        ...link
                    }
                }
                ... on SubmenuGroupRecord {
                    _modelApiKey
                    id
                    title
                    submenus {
                        id
                        title
                        links {
                            ...link
                        }
                    }
                }
            }
            contact {
                ...link
            }
        }
        footer(locale: $lang) {
            linksColumn {
                links {
                    label
                    title
                    ...link
                }
            }
            smallText
            smallLinks {
                ...link
            }
            newsletter {
                title
            }
            social {
                socialLinks {
                    title
                    iconName
                    link
                }
            }
        }
    }
`;

export const errorQuery = `
    ${linkFragment}
    query Error($lang: SiteLocale) {
        error(locale: $lang) {
            title
            text
            link {
                ...link
            }
        }
    }`;

export const homeQuery = `
    ${linkFragment}
    query Home($lang: SiteLocale) {
        home(locale: $lang) {
            ${seo}
            title
            introTitle
            introText
            introAnchorLabel
            funds {
                id
                name
                description
                logo
                color {
                    hex
                }
                slug
                ${seo}
            }
            companies {
                _modelApiKey
                id
                name
                logo {
                    ${img}
                }
                slug
            }
            section1Title
            section1Subtitle
            section1Content
            section1Link {
                ...link
            }
            section1MobileImage {
                ${img}
            }
            section1TopLeftImage {
                ${img}
            }
            section1TopLeftLink {
                ...link
            }
            section1TopRightImage {
                ${img}
            }
            section1TopRightLink {
                ...link
            }
            section1BottomLeftImage {
                ${img}
            }
            section1BottomLeftLink {
                ...link
            }
            section1BottomRightImage {
                ${img}
            }
            section1BottomRightLink {
                ...link
            }
            section2LeftTitle
            section2LeftSubtitle
            section2RightTitle
            section2RightSubtitle
            centeredLink {
                ...link
            }
            ellipse {
                ${img}
            }
            newsTitle
            news {
                title
                cover {
                    ${img}
                }
                date
                readingTime
                linkUrl
            }
        }
    }
`;

export const pageQuery = `
    query Page($lang: SiteLocale, $slug: String) {
        page(locale: $lang, filter: { slug: { eq: $slug } }) {
            ${seo}
            ${locales}
            title
            content
            whiteBackground
        }
    }`;

export const contactQuery = `
    query Contact($lang: SiteLocale) {
        contact(locale: $lang) {
            ${seo}
            ${locales}
            title
            mailTitle
            mail
            socialTitle
            social {
                socialLinks {
                title
                iconName
                link
                }
            }
            locationTitle
            location
            locationLink
            image {
                ${img}
            }
        }
    }`;

export const teamQuery = `
    ${linkFragment}
    query Team($lang: SiteLocale) {
        team(locale: $lang) {
            ${seo}
            ${locales}
            title
            subtitle
            members {
                id
                name
                description
                tags
                hasLinkedin
                link {
                    ...link
                }
                image {
                    ${img}
                }
            }
            investorsTitle
            investorsSubtitle
            investorsLink {
                ...link
            }
            investors {
                id
                name
                logo {
                    ${img}
                }
                link
            }
            mosaic {
                title
                text
                link {
                    ...link
                }
                topLeftImage {
                    ${img}
                }
                bottomLeftImage {
                    ${img}
                }
                rightMobileImage {
                    ${img}
                }
            }
        }
    }`;

export const portfolioQuery = `
    ${linkFragment}
    query Portfolio($lang: SiteLocale) {
        portfolio(locale: $lang) {
            ${seo}
            ${locales}
            title
            subtitle
            companies {
                _modelApiKey
                id
                name
                description
                tags
                logo {
                    ${img}
                }
                image {
                    ${img}
                }
                slug
            }
            tableTitle
            col2Title
            col3Title
            col4Title
            tableEntries {
                id
                companyName
                industrySector
                soldTo
                soldYear
            }
            mosaic {
                title
                text
                link {
                    ...link
                }
                topLeftImage {
                    ${img}
                }
                bottomLeftImage {
                    ${img}
                }
                rightMobileImage {
                    ${img}
                }
            }
        }
    }`;

export const investorsPageQuery = `
    query InvestorsPage($lang: SiteLocale) {
        investorsPage(locale: $lang) {
            ${seo}
            ${locales}
            title
            subtitle
            investors {
                id
                name
                logo {
                    ${img}
                }
                link
                smallText
            }
            moduleText {
                title
                text
            }
        }
    }`;

export const companyQuery = `
    query Company($lang: SiteLocale, $slug: String) {
        company(locale: $lang, filter: { slug: { eq: $slug } }) {
            ${seo}
            ${locales}
            name
            description
            tags
            logo {
                ${img}
            }
            image {
                ${img}
            }
            founders
            largeDescription
            quote
            keyFigures {
                id
                title
                number
            }
            recruitmentPageLink
            locations {
                id
                city
                address
                mapLink
            }
            social {
                socialLinks {
                title
                iconName
                link
                }
            }
            websiteLink
            websiteLinkLabel
            otherCompanies {
                _modelApiKey
                id
                name
                description
                tags
                logo {
                    ${img}
                }
                image {
                    ${img}
                }
                slug
            }
        }
    }`;

export const fundQuery = `
    ${linkFragment}
    query Fund($lang: SiteLocale, $slug: String) {
        fund(locale: $lang, filter: { slug: { eq: $slug } }) {
            ${seo}
            ${locales}
            name
            title
            fullDescription
            logo
            color {
                hex
            }
            keyFigures {
                id
                title
                number
            }
            targetsTitle
            targetsDescription
            targetsFirstColumnTitle
            targetsFirstColumnItems {
                id
                text
            }
            targetsSecondColumnTitle
            targetsSecondColumnItems {
                id
                text
            }
            companiesTitle
            companies {
                _modelApiKey
                id
                name
                description
                tags
                logo {
                    ${img}
                }
                image {
                    ${img}
                }
                slug
            }
            mosaic {
                title
                text
                link {
                    ...link
                }
                topLeftImage {
                    ${img}
                }
                bottomLeftImage {
                    ${img}
                }
                rightMobileImage {
                    ${img}
                }
            }

        }
    }`;

export const useCasesPageQuery = `
    ${linkFragment}
    query UseCasesPage($lang: SiteLocale) {
        useCasesPage(locale: $lang) {
            ${seo}
            ${locales}
            title
            subtitle
            useCases {
                id
                title
                image {
                    ${img}
                }
                description
                date
                readingTime
                author {
                    name
                    image {
                        ${img}
                    }
                }
                linkUrl
            }
            mosaic {
                title
                text
                link {
                    ...link
                }
                topLeftImage {
                    ${img}
                }
                bottomLeftImage {
                    ${img}
                }
                rightMobileImage {
                    ${img}
                }
            }
        }
    }`;

// This is use by the `~/pages/_slug.vue` file to get the right query given a _modelApiKey
// When adding a new model, we need to link its query and its _modelApiKey
export const getQuery = _modelApiKey => {
    const mapping = {
        page: pageQuery,
        contact: contactQuery,
        team: teamQuery,
        portfolio: portfolioQuery,
        investors_page: investorsPageQuery,
        fund: fundQuery,
        use_cases_page: useCasesPageQuery
    };
    return mapping[_modelApiKey];
};
