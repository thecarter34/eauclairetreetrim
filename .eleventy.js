module.exports = function (eleventyConfig) {
  // src/_shared/ contains files shared across all 3 Rick-Olson microsites (stump, removals, trim).
  // Per-site assets (logos, og-image, per-site favicons, site.webmanifest) stay in src/ at the
  // root or in their own subdirs. The sync script in ~/.hermes/scripts/sync-shared.sh keeps each
  // site's src/_shared/ in lockstep with stump's (the canonical source).
  //
  // Object form of addPassthroughCopy: {inputPath: outputPath} — without the outputPath key,
  // "src/_shared/css" would copy to "_site/src/_shared/css" instead of "_site/css".
  // Eleventy 3.1.x syntax.
  //
  // favicon.ico / favicon.png / apple-touch-icon.png are GENERIC (no site name) so they live
  // in src/_shared/images/ and are copied to the _site/ root (CF Pages needs them at root for
  // legacy browser support). favicon.svg has the site name baked in — stays per-site.
  eleventyConfig.addPassthroughCopy({
    "src/_shared/css": "css",
    "src/_shared/js": "js",
    "src/_shared/images": "images",
    "src/_shared/favicons/favicon.png": "favicon.png",
    "src/_shared/favicons/favicon.ico": "favicon.ico",
    "src/_shared/favicons/apple-touch-icon.png": "apple-touch-icon.png",
    "src/images": "images"
  });
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/_redirects");

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