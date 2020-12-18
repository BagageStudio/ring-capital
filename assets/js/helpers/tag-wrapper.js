const insertTagPart = (search, tag, content, position = 'before') => {
    const searchLen = search.length;
    const tagLen = tag.length;
    let startIndex = 0;
    let index;

    while ((index = content.indexOf(search, startIndex)) > -1) {
        let before = '';
        let after = '';
        switch (position) {
            case 'before':
                before = content.substring(0, index);
                after = content.substring(index);
                break;
            case 'after':
                before = content.substring(0, index + searchLen);
                after = content.substring(index + searchLen);
                break;
        }
        content = before + tag + after;

        startIndex = index + searchLen + tagLen;
    }

    return content;
};

export const addWrapperTag = (searchTags, wrapperTags, content) => {
    content = insertTagPart(searchTags.openingTag, wrapperTags.openingTag, content, 'before');
    content = insertTagPart(searchTags.closingTag, wrapperTags.closingTag, content, 'after');

    return content;
};
