module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `2022f.pennapps`,
    siteUrl: `https://2022f.pennapps.com/`,
    favicon: `/static/favicon.ico`
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-offline",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
  ]
};