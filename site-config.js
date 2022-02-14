/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const palette = require("./src/gatsby-plugin-theme-ui/palette");

module.exports = {
  siteTitle: "GatsbyJS: test landing",
  siteTitleShort: "Test landing",
  siteDescription:
    "Awesome GatsbyJS landing",
  siteUrl: "http://localhost:8000/",
  backgroundColor: palette.white,
  pathPrefix: null,
  logo: path.resolve(__dirname, "src/assets/images/favicon.svg"),
  contactEmail: "kaa@dashbouquet.com",
};
