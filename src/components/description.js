import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as descriptionStyle from './description.module.scss'

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
    <div className={descriptionStyle.descriptionContainer} >
      <p className="bold">{data.contentfulIntro.jobTitle} <span className="nowrap">@ <a href={data.contentfulIntro.companyLink} target="_blank" rel="noreferrer">{data.contentfulIntro.company}</a></span></p>
      <p>{data.contentfulIntro.description}</p>
    </div>
  )
}

export default Desc