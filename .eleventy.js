module.exports = function (eleventyConfig) {
  // Passthrough static assets — these are the canonical CSS/JS/images/icons/sitemap.
  // NEVER edit them. They are mirrored into _site/ on every build.
  eleventyConfig.addPassthroughCopy({
    "src/_shared/css": "css",
    "src/_shared/js": "js",
    "src/_shared/images": "images",
    "src/images": "images"
  });
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  return {
    dir: {
      input: "src",
      includes: "_shared/_includes",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};