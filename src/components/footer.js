import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <p>Designed and coded with &#128153; by {data.site.siteMetadata.title}</p>
  )
}

export default Footer