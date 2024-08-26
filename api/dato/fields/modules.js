import img from './img';

export default `
    ... on TwoColumnsModuleRecord {
        _modelApiKey
        id
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
    }
    ... on MosaicModuleRecord {
        _modelApiKey
        id
        title
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
        items {
            id
            title
            text
        }
        backgroundImage {
            ${img}
        }
    }
    ... on ImageListModuleRecord {
        _modelApiKey
        id
        title
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
    }
`;
