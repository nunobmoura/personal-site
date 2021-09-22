import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as footerStyle from './footer.module.scss'

const Footer = () => {
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
    <footer className={`${footerStyle.container} grid-container footer-container`}>
      <p>Designed and coded with <span>&#128153;</span> by {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer