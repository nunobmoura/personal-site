import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
      <h2>{data.contentfulIntro.jobTitle} @ <Link to={data.contentfulIntro.companyLink}>{data.contentfulIntro.company}</Link></h2>
      <p>{data.contentfulIntro.description}</p>
    </div>
  )
}

export default Desc