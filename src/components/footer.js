import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as footerStyle from './footer.module.scss'

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
    <footer className={`${footerStyle.container} grid-container footer-container`}>
      <p>Designed and coded with <span>&#128153;</span> by {data.site.siteMetadata.title}</p>
    </footer>
  )
}

export default Footer