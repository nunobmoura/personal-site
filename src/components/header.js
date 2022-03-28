import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as headerStyle from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIntro {
        description 
      }
      contentfulExperience {
        company
        position
        link
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
        {data.contentfulExperience.position}{" "}
        <span className="nowrap">
          @{" "}
          <a
            href={data.contentfulExperience.link}
            target="_blank"
            rel="noreferrer"
          >
            {data.contentfulExperience.company}
          </a>
        </span>
      </p>
      <p>{data.contentfulIntro.description}</p>
    </header>
  )
}

export default Header
