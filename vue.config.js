const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module.rule("scss").oneOfs.store.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: "./src/scss/global.scss",
        })
        .end();
    });
  },
});
