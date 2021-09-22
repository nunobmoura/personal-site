import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <header>
      <h1>{data.site.siteMetadata.author}</h1>
    </header>
  )
}

export default Header
