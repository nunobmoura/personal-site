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
    `gatsby-plugin-minify`,
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
        name: `Nuno Moura`,
        description: `Nuno Moura's digital resume.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#5565E9`,
        display: `standalone`,
        icon: `src/assets/icon.svg`
      }
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: process.env.FULLSTORY_ORG_ID,
      },
    }
  ]
}
