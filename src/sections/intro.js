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
          label="View LinkedIn"
          title="LinkedIn profile"
          href='https://www.linkedin.com/in/nunobmoura/'
          class='btnPrimary'
        />
        <Button
          label="View GitHub"
          title="GitHub profile"
          href='https://github.com/nunobmoura'
          class='btnPrimary'
        />
      </div>
    </div>
  </section>
)

export default Intro