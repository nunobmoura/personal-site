import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Desc = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIntro {
        jobTitle
        company
        companyLink
        description
      }
    }
  `)

  return (
    <div>
      <h2>{data.contentfulIntro.jobTitle} <span className="nowrap">@ <a href={data.contentfulIntro.companyLink} target="_blank" rel="noreferrer">{data.contentfulIntro.company}</a></span></h2>
      <p>{data.contentfulIntro.description}</p>
    </div>
  )
}

export default Desc