import React from 'react'

import Image from '../components/image'
import Header from '../components/header'
import Description from '../components/description'
import Button from '../components/button'

import * as introStyles from './intro.module.scss'


const Intro = () => (
  <section className={introStyles.introContainer}>
    <Image />
    <div className="grid-container">
      <Header />
      <Description />
      <div className={introStyles.btnsContainer}>
        <Button
          label="Google"
          href='https://google.com'
        />
        <Button
          label="Google"
          href='https://google.com'
        />
      </div>
    </div>
  </section>
)

export default Intro
