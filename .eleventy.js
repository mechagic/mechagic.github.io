const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy("src/1stylescripts/");
  eleventyConfig.addPassthroughCopy("src/2fonts/");
  eleventyConfig.addPassthroughCopy("src/2images/");
  eleventyConfig.addPassthroughCopy("src/2art/");
  eleventyConfig.addPassthroughCopy("src/2art/th");
  eleventyConfig.addPassthroughCopy("src/2pix/");
  eleventyConfig.addPassthroughCopy("src/2oc/");
  eleventyConfig.addPassthroughCopy("src/2oc/th");
  eleventyConfig.addPassthroughCopy("src/2pw/");
  eleventyConfig.addPassthroughCopy("src/2pw/th");
  eleventyConfig.addPlugin(pluginRss);



  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "1layouts"
    }
  };
}