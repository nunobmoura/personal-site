import React from 'react'

import Image from '../components/image'
import Header from '../components/header'
import Description from '../components/description'
import Button from '../components/button'

import * as introStyles from './intro.module.scss'


const Intro = () => (
  <section className={`${introStyles.introContainer} grid-container intro-container`}>
    <Image />
    <div className={`${introStyles.descriptionContainer} description`}>
      <Header />
      <Description />
      <div className={introStyles.btnsContainer}>
        <Button
          label="LinkedIn"
          href='https://google.com'
          class='btnPrimary'
        />
        <Button
          label="GitHub"
          href='https://google.com'
          class='btnPrimary'
        />
      </div>
    </div>
  </section>
)

export default Intro

// introStyles.descriptionContainer2 => "grid-container"
