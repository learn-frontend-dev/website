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

  let collectionCache;

  // Create a collection for blog posts only.
  eleventyConfig.addCollection("learnPosts", collection => {
    collectionCache = collection;
    return collection.getFilteredByGlob("learn/*.md").sort((a, b) => {
      return a.data.chapter - b.data.chapter;
    });
  });

  // console.log(Object.keys(eleventyConfig))

  eleventyConfig.addPairedShortcode("note", function(content) {
    return `<div class="note">${content}</div>`;
  });

  eleventyConfig.addShortcode("nextPost", slug => {
    const arr = eleventyConfig.collections.learnPosts(collectionCache);
    const index = arr.findIndex(post => post.fileSlug === slug);
    // console.log(slug, index);
    const next = index + 1 < arr.length ? arr[index + 1] : null;
    const previous = index - 1 >= 0 ? arr[index - 1] : null;
    return `
    <div class="content-container">
      <div style="display:flex;justify-content: space-between">
    <a rel="previous" href="${previous && previous.url}">${
      previous ? `👈🏼 ${previous.data.title}` : ""
    }</a>
    <a rel="next" href="${next && next.url}">${
      next ? `${next.data.title} 👉🏼` : ""
    }</a>
      </div>
    </div>
    `;
  });

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {};
};
