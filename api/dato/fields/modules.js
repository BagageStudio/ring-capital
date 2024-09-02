import img from './img';

export default `
    ... on TwoColumnsModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        columns {
            id
            title
            text
            icon {
                ${img}
            }
            image {
                ${img}
            }
            link {
                __typename
                ...link
                ... on LinkFileRecord {
                    label
                    title
                    file {
                        url
                    }
                }
            }
        }
        bottomText
    }
    ... on ThreeColumnsModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        columns {
            id
            title
            text
            icon {
                ${img}
            }
            image {
                ${img}
            }
            link {
                __typename
                ...link
                ... on LinkFileRecord {
                    label
                    title
                    file {
                        url
                    }
                }
            }
        }
    }
    ... on AccordionModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        text
        image {
            ${img}
        }
        accordions {
            id
            title
            text
            icon {
                ${img}
            }
        }
        link {
            __typename
            ...link
            ... on LinkFileRecord {
                label
                title
                file {
                    url
                }
            }
        }
    }
    ... on MosaicModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        text
        images {
            ${img}
        }
        link {
            __typename
            ...link
            ... on LinkFileRecord {
                label
                title
                file {
                    url
                }
            }
        }
        reverse
    }
    ... on ImageTextModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        text
        image {
            ${img}
        }
        link {
            __typename
            ...link
            ... on LinkFileRecord {
                label
                title
                file {
                    url
                }
            }
        }
        reverse
    }
    ... on ExternalContentModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        text
        contents {
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
    }
    ... on BigTextModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        text
    }
    ... on ListModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        items {
            id
            title
            text
        }
        backgroundImage {
            ${img}
        }
        link {
            __typename
            ...link
            ... on LinkFileRecord {
                label
                title
                file {
                    url
                }
            }
        }
    }
    ... on ImageListModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        items {
            id
            title
            text
            link {
                ...link
            }
            image {
                ${img}
            }
        }
        link {
            __typename
            ...link
            ... on LinkFileRecord {
                label
                title
                file {
                    url
                }
            }
        }
    }
    ... on LogosModuleRecord {
        _modelApiKey
        id
        title
        subtitle
        link {
            __typename
            ...link
            ... on LinkFileRecord {
                label
                title
                file {
                    url
                }
            }
        }
        logos {
            id
            image {
                ${img}
            }
            link {
                ...link
            }
        }
    }
    ... on FreeTextModuleRecord {
        _modelApiKey
        id
        title
        text
        backgroundImage {
            ${img}
        }
    }
    ... on HeroModuleRecord {
        _modelApiKey
        id
        title
        subtitle
    }
`;
