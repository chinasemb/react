const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/apis", {
      target: "https://www.baidu.com",
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      pathRewrite: {
        "^/apis": ""
      }
    })
  );
};