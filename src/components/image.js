import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import * as imageStyles from './image.module.scss'

const Image = () => (
    <div className={`${imageStyles.container} image-header`}>
      <StaticImage
        src="../static/hero.png"
        alt="Nuno on a whiteboard session"
        placeholder="blurred"
        loading="eager"
        className={imageStyles.image}
      />
    </div>
)

export default Image