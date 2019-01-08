const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  // eleventyConfig.addLayoutAlias("default", "layouts/default.html");

  // Create a collection for blog posts only.
  eleventyConfig.addCollection("learnPosts", collection => {
    return collection.getFilteredByGlob("learn/*.md").map(post => {
      console.log(99, post.data.title);
      return post;
    });
  });
  eleventyConfig.addPassthroughCopy("css");
  return {};
};
