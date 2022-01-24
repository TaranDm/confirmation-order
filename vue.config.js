const path = require("path");
module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH || "/",
  // publicPath: process.env.NODE_ENV === 'production' ? '/kiosk/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@varscss": path.resolve(
          __dirname,
          "./src/assets/scss/_variables.scss"
        ),
      },
    },
  },
};
