module.exports = {
  pathPrefix: "/2022f.pennapps",
  siteMetadata: {
    title: `2022f.pennapps`,
    siteUrl: `https://www.pennapps.github.io/2022f.pennapps/`,
    favicon: `/static/favicon.ico`
  },
  plugins: ["gatsby-plugin-mdx",
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