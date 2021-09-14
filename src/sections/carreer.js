import React from 'react'

import Experience from '../components/experience'
import Education from '../components/education'

import * as carreerStyles from './carreer.module.scss'

const Carreer = () => (
  <section className={`${carreerStyles.carreerContainer} grid-container carreer-container`}>
    <Experience />
    <Education />
  </section>
)

export default Carreer
