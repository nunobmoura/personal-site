import React from 'react'

import Image from '../components/image'
import Header from '../components/header'
import Button from '../components/button'

import * as introStyles from './intro.module.scss'


const Intro = () => (
  <section className={`${introStyles.introContainer} grid-container intro-container`}>
    <Image />
    <div className={`${introStyles.descriptionContainer} description`}>
      <Header />
      <div className={introStyles.btnsContainer}>
        <Button
          label="View LinkedIn"
          title="Link to Nuno Moura's LinkedIn profile"
          href='https://www.linkedin.com/in/nunobmoura/'
          class='primary'
        />
        <Button
          label="View GitHub"
          title="Link to Nuno Moura's GitHub profile"
          href='https://github.com/nunobmoura'
          class='primary'
        />
      </div>
    </div>
  </section>
)

export default Intro