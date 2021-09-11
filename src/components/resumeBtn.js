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
    <button href={data.file.publicURL} target="_blank" rel="noreferrer">
      Resume
    </button>
  )
}

export default ResumeBtn