import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
      file ( name: { eq: "social" } ) {
        publicURL
      }
    }
  `)

  const seo = {
    title: `${data.site.siteMetadata.author} - ${data.site.siteMetadata.title}`,
    author: data.site.siteMetadata.author,
    description: data.site.siteMetadata.description,
    siteUrl: data.site.siteMetadata.siteUrl,
    image: `${data.site.siteMetadata.siteUrl}${data.file.publicURL}`,
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta property="og:type" content="image/png" />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />

    </Helmet>
  )
}

export default Seo
