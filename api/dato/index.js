import linkFragment from './fragments/link';

import seo from './fields/seo';
import img from './fields/img';
import modules from './fields/modules';
import locales from './fields/locales';

export const layoutQuery = `
    ${linkFragment}
    query Layout($lang: SiteLocale) {
        navigation(locale: $lang){
            quickMenu {
                ...link
            }
            menu {
                title
                links {
                    ...link
                }
            }
            socials {
                image {
                    ${img}
                }
                link {
                    ...link
                }
            }
        }
        footerClassic(locale: $lang) {
            topTitle
            topLink {
                ...link
            }
            linksColumn {
                id
                groupTitle
                links {
                    label
                    title
                    ...link
                }
            }
            ringLogo {
                ${img}
            }
            bCorporationLogo {
                ${img}
            }
            bottomLinks {
                links {
                    label
                    title
                    ...link
                }
            }
            copyText
            socials {
                image {
                    ${img}
                }
                link {
                    ...link
                }
            }
            backgroundShape {
                ${img}
            }
        }
        footerReduced(locale: $lang) {
            leftSideTitle
            leftSideText
            podcastTitle
            youtubeLink
            spotifyLink
            applePodcastsLink
            deezerLink
            rightSideTitle
            rightSideText
            rightSideLink {
                ...link
            }
            backgroundShape {
                ${img}
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

export const homepageQuery = `
    ${linkFragment}
    query Homepage($lang: SiteLocale) {
        homepage(locale: $lang) {
            ${seo}
            title
            heroSlides {
                id
                title
                firstPartTitle
                secondPartTitle
                video {
                    url
                    height
                    width
                    alt
                    format
                }
            }
            vitalityTitle
            vitalitySubtitle
            vitalityIntro
            vitalityNumbers {
                id
                number
                content
            }
            investmentStrategyTitle
            investmentStrategyIntro
            fundsSlides {
                id
                slug
                name
                title
                description
                fullDescription
                logoImage {
                    ${img}
                }
            }
            learnMoreButtonLabel
            investmentStrategyBackgroundShape {
                ${img}
            }
            ecosystemTitle
            ecosystemIntro
            ecosystemMosaic {
                ... on EcosystemQuoteTileRecord {
                    _modelApiKey
                    id
                    quote
                    quoteAuthor
                }
                ... on EcosystemLogoTileRecord {
                    _modelApiKey
                    id
                    title
                    logos {
                        id
                        ${img}
                    }
                }
                ... on EcosystemImageTileRecord {
                    _modelApiKey
                    id
                    title
                    image {
                        ${img}
                    }
                }
            }
            podcastTitle
            podcastIntro
            podcastAllEpisodesLink {
                ...link
            }
            podcastSelection {
                id
                title
                infos
                link {
                    ...link
                }
            }
            podcastLinkLabel
            podcastPlatforms {
                id
                logo {
                    ${img}
                }
                link {
                    ...link
                }
            }
            podcastBackgroundShape {
                ${img}
            }
            newsletterTitle
            newsletterIntro
            newsletterSubscribeLink {
                ...link
            }
            articleSelection {
                id
                title
                image {
                    ${img}
                }
                infos
                link {
                    ...link
                }
            }
            modules {
                ${modules}
            }
        }
    }
`;

export const modularPageQuery = `
    ${linkFragment}
    query ModularPage($lang: SiteLocale, $slug: String) {
        modular(locale: $lang, filter: { slug: { eq: $slug } }) {
            ${seo}
            ${locales}
            title
            subtitle
            modules {
                ${modules}
            }
        }
    }`;

export const contactQuery = `
    ${linkFragment}
    query Contact($lang: SiteLocale) {
        contact(locale: $lang) {
            ${seo}
            ${locales}
            title
            socialTitle
            socials {
                image {
                    ${img}
                }
                link {
                    ...link
                }
            }
            locationTitle
            location
            contactButton {
                ...link
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
                ringColor
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
                subtitle
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
            modules {
                ${modules}
            }
        }
    }`;

export const portfolioListQuery = `
    ${linkFragment}
    query PortfolioList($lang: SiteLocale) {
        portfolioList(locale: $lang) {
            ${seo}
            title
            description
            filterText
            seeMoreText
            companiesSoldText
            modules {
                ${modules}
            }
        }
        allPortfolioItems(locale: $lang, first: 100) {
            _modelApiKey
            slug
            id
            name
            title
            description
            logo {
                ${img}
            }
            fund {
                id
                name
            }
            sector
            sold
            soldTo
            soldYear
        }
    }`;

export const portfolioItemQuery = `
    query PortfolioItem($lang: SiteLocale, $slug: String) {
        portfolioItem(locale: $lang, filter: { slug: { eq: $slug } }) {
            ${seo}
            ${locales}
            name
            title
            description
            logo {
                ${img}
            }
            founders
            location
            websiteLink
            websiteLinkLabel
            fund {
                id
                name
                slug
            }
            social {
                socialLinks {
                    title
                    iconName
                    link
                }
            }
            image {
                ${img}
            }
            challenge
            impact
            way
            otherCompanies {
                _modelApiKey
                id
                name
                title
                slug
                sector
                logo {
                    ${img}
                }
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
            description
            theme
            logoImage {
                ${img}
            }
            keyFigures {
                id
                title
                number
            }
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
            portfolioItems {
                _modelApiKey
                id
                name
                title
                slug
                sector
                logo {
                    ${img}
                }
            }
            modules {
                ${modules}
            }
        }
    }`;

export const mediaListQuery = `
    ${linkFragment}
    query MediaList($lang: SiteLocale) {
        mediaList(locale: $lang) {
            ${seo}
            ${locales}
            title
            filterText
            mediaTypes {
                mediaType
                title
                description
                extraTitle
                extraLinks {
                    image {
                        ${img}
                    }
                    link {
                        ...link
                    }
                }
            }
            moreTitle
            seeMoreText
            modules {
                ${modules}
            }
        }
        allMediaContentsFirst: allMediaContents(first: 100) {
            id
            title
            mediaType
            infos
            image {
                ${img}
            }
            link {
                ...link
            }
        }
        allMediaContentsSecond: allMediaContents(first: 100, skip: 100) {
            id
            title
            mediaType
            infos
            image {
                ${img}
            }
            link {
                ...link
            }
        }
    }`;

// This is use by the `~/pages/_slug.vue` file to get the right query given a _modelApiKey
// When adding a new model, we need to link its query and its _modelApiKey
export const getQuery = _modelApiKey => {
    const mapping = {
        modular: modularPageQuery,
        contact: contactQuery,
        team: teamQuery,
        portfolio_list: portfolioListQuery,
        fund: fundQuery,
        media_list: mediaListQuery
    };
    return mapping[_modelApiKey];
};
