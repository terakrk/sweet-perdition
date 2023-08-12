// importing from config
const {getBlog} = require('./config/collections/index.js');


module.exports = function (eleventyConfig) {
    // Collections
    eleventyConfig.addCollection('blog', getBlog);
    // CSS 
    ['src/assets/css/', 'src/assets/images/'].forEach(path =>
        eleventyConfig.addPassthroughCopy(path)
      );

    // Images
    eleventyConfig.addPassthroughCopy("**/*.jpeg");
    eleventyConfig.addPassthroughCopy("**/*.jpg");

    return {
        dir: {
            input: 'src',
            output: 'public',
            includes: '_includes',
            layouts: '_layouts',
            data: '_data'
        }
    };
};