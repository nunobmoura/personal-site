import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Image = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulAsset(title: { eq: "header" } ) {
      description
      file {
        url
      }
    }
  }
  `)

  return (
    <picture>
      <img src={data.contentfulAsset.file.url} alt={data.contentfulAsset.description} />
    </picture>
  )
}

export default Image