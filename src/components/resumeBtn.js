import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ResumeBtn = () => {
  const data = useStaticQuery(graphql`
    query {
      file {
        publicURL
      }
    }
  `)

  return (
    <a href={data.file.publicURL} target="_blank" rel="noreferrer">Resume</a>
  )
}

export default ResumeBtn