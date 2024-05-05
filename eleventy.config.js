
// importing from config
const {getBlog} = require('./config/collections/index.js');

module.exports = eleventyConfig => {

  // Collections
  eleventyConfig.addCollection('blog', getBlog);
  // CSS 
    ['src/assets/css/'].forEach(path =>
        eleventyConfig.addPassthroughCopy(path)
      );
      
    // Images
  eleventyConfig.addPassthroughCopy('**/*.jpg');

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
