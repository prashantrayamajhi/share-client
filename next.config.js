const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = {
  reactStrictMode: true,
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
