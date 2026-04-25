export const getItemSlug = function createId(category,itemname) {
    return `${category}-${itemname}`
        .toLowerCase()
        .replace(/\s+/g, "-");
};
