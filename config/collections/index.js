// blog posts
const getBlog = collection => {
    return collection.getFilteredByGlob('src/blog/**/*.md')

};

module.exports = {
    getBlog,
}