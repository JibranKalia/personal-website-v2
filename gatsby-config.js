require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Jibran's Dev Blog`,
    siteTitleAlt: `Jibran's Dev Blog`,
    siteHeadline: `Jibran's Dev Blog`,
    siteUrl: `https://jibrankalia.com/`,
    siteDescription: `Jibran's Dev Blog`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@jibrankalia`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/jibrankalia`,
          },
          {
            name: `Github`,
            url: `https://github.com/jibrankalia`,
          },
        ],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jibran's Dev Blog`,
        short_name: `minimal-blog`,
        description: `Thoughts on life, software engineering and more.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
