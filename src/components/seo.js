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
        }
      }
    }
  `)

  const siteTitle = `${data.site.siteMetadata.author} - ${data.site.siteMetadata.title}`

  return (
    <Helmet>
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
    </Helmet>
  )
}

export default Seo
