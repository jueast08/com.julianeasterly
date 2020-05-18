const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "Julian EASTERLY - IT Business Analyst and Developer",
      description:
        "Julian EASTERLY is an American IT Business Analyst and Software Developer based in Strasbourg, France.", /
    },
  },
  chainWebpack: (config) => {
    let alias = config.resolve.alias;
    alias.set("API", path.resolve(__dirname, "src/api"));
    alias.set("Assets", path.resolve(__dirname, "src/assets"));
    alias.set("Bases", path.resolve(__dirname, "src/components/bases"));
    alias.set("Common", path.resolve(__dirname, "src/components/common"));
    alias.set("Components", path.resolve(__dirname, "src/components"));
    alias.set("Icons", path.resolve(__dirname, "src/components/icons"));
    alias.set("Lang", path.resolve(__dirname, "src/lang"));
    alias.set("Layout", path.resolve(__dirname, "src/components/layout"));
    alias.set("Pages", path.resolve(__dirname, "src/pages"));
    alias.set("Public", path.resolve(__dirname, "public"));
    alias.set("Source", path.resolve(__dirname, "src"));
    alias.set("Utility", path.resolve(__dirname, "src/utility"));
    alias.set("UI", path.resolve(__dirname, "src/components/ui"));

    config.module
      .rule("files")
      .test(/\.(pdf)$/i)
      .use("file-loader")
      .loader("file-loader")
      .end();
  },
};
