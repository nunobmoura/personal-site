import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as imageStyles from './image.module.scss'

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
    <div className={`${imageStyles.container} image-header`}>
      <img src={data.contentfulAsset.file.url} alt={data.contentfulAsset.description} className={imageStyles.image} />
    </div>
  )
}

export default Image