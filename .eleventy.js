const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy("src/_assets/");
  eleventyConfig.addPassthroughCopy("src/_img/");
  eleventyConfig.addPassthroughCopy("src/_art/");
  eleventyConfig.addPassthroughCopy("src/_art/th/");
  eleventyConfig.addPassthroughCopy("src/_con/");
  eleventyConfig.addPassthroughCopy("src/_con/th");
  eleventyConfig.addPassthroughCopy("src/_pw/");
  eleventyConfig.addPassthroughCopy("src/_quicksand/");
  eleventyConfig.addPlugin(pluginRss);

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}