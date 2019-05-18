const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const markdownItConfig = {
  html: true,
  breaks: true,
  linkify: true
};
const markdownItAnchorConfig = {
  permalink: true,
  permalinkClass: "bookmark",
  permalinkSymbol: "#"
};

const markdownLib = markdownIt(markdownItConfig).use(
  markdownItAnchor,
  markdownItAnchorConfig
);

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setLibrary("md", markdownLib);
  // eleventyConfig.addLayoutAlias("default", "layouts/default.html");

  // Create a collection for blog posts only.
  eleventyConfig.addCollection("learnPosts", collection => {
    return collection.getFilteredByGlob("learn/*.md");
  });

  eleventyConfig.addPairedShortcode("note", function(content) {
    return `<div class="note">${content}</div>`;
  });

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {};
};
