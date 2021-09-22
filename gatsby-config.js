module.exports = {
  siteMetadata: {
    title: 'Resume',
    description: "Nuno Moura's website. You can check all the information or send a message through LinkedIn or at nunobaratamoura@gmail.com.",
    author: 'Nuno Moura',
    siteUrl: `https://nunobmoura.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `static`,
        path: `${__dirname}/src/static/`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AAA`,
        description: `This is my website`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#5565E9`,
        display: `standalone`,
        icon: `src/assets/icon.svg`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
