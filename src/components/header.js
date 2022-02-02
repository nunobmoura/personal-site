import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as headerStyle from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIntro {
        jobTitle
        company
        companyLink
        description 
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <header className={headerStyle.container}>
      <h1>{data.site.siteMetadata.author}</h1>
      <p className="bold">
        {data.contentfulIntro.jobTitle}{" "}
        <span className="nowrap">
          @{" "}
          <a
            href={data.contentfulIntro.companyLink}
            target="_blank"
            rel="noreferrer"
          >
            {data.contentfulIntro.company}
          </a>
        </span>
      </p>
      <p>{data.contentfulIntro.description}</p>
    </header>
  )
}

export default Header
