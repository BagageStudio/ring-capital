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

// This is use by the `~/pages/_slug.vue` file to get the right query given a _modelApiKey
// When adding a new model, we need to link its query and its _modelApiKey
export const getQuery = _modelApiKey => {
    const mapping = {
        page: pageQuery,
        contact: contactQuery
    };
    return mapping[_modelApiKey];
};
