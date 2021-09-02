import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const LinkBtn = () => {
  const data = useStaticQuery(graphql`
    query {
      file {
        publicURL
      }
    }
  `)

  return (
    <a href={data.file.publicURL} target="_blank" rel="noreferrer">Resume SQL</a>
  )
}

export default LinkBtn