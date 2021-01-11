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
    query Error($lang: SiteLocale) {
        error(locale: $lang) {
            title
        }
    }`;

export const homeQuery = `
    ${linkFragment}
    query Home($lang: SiteLocale) {
        home(locale: $lang) {
            ${seo}
            title
            introTitle
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

// This is use by the `~/pages/_slug.vue` file to get the right query given a _modelApiKey
// When adding a new model, we need to link its query and its _modelApiKey
export const getQuery = _modelApiKey => {
    const mapping = {
        page: pageQuery
    };
    return mapping[_modelApiKey];
};
