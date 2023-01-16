import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as headerStyle from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIntro {
        longDescription {
          longDescription
        }
      }
      allContentfulExperience (sort: {
        fields: startDate,
        order: DESC
      }, limit: 1) {
        edges {
          node {
            company
            position
            link
          }
        }
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
        {data.allContentfulExperience.edges[0].node.position}{" "}
        <span className="nowrap">
          @{" "}
          <a
            href={data.allContentfulExperience.edges[0].node.link}
            target="_blank"
            rel="noreferrer"
          >
            {data.allContentfulExperience.edges[0].node.company}
          </a>
        </span>
      </p>
      <p>{data.contentfulIntro.longDescription.longDescription}</p>
    </header>
  )
}

export default Header
