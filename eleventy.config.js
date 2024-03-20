module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/**/*.png");

    return {
        dir: {
          input: "src"
        }
      }
}
