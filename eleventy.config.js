// importing from config
const {getBlog} = require('./config/collections/index.js');

module.exports = function (eleventyConfig) {
    // Collections
    eleventyConfig.addCollection('blog', getBlog);
    // CSS 
    ['src/assets/css/'].forEach(path =>
        eleventyConfig.addPassthroughCopy(path)
      );
      
    // Fonts
    eleventyConfig.addPassthroughCopy('src/assets/fonts');
    // Images
  eleventyConfig.addPassthroughCopy('src/assets/images');

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
