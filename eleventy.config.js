
// importing from config
const {getBlog} = require('./config/collections/index.js');
const pluginRss = require("@11ty/eleventy-plugin-rss");

// import filters
const markdownFilter = require('./config/filters/markdown-filter.js');

module.exports = eleventyConfig => {

  // Filters
  eleventyConfig.addFilter("markdownFilter", markdownFilter);

  // Collections
  eleventyConfig.addCollection('blog', getBlog);
  // CSS 
    ['src/assets/css/'].forEach(path =>
        eleventyConfig.addPassthroughCopy(path)
      );
      
    // Images
    ['src/assets/images/'].forEach(path =>
        eleventyConfig.addPassthroughCopy(path)
  );

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
