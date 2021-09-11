import React from 'react'

import Experience from '../components/experience'
import Education from '../components/education'

import * as carreerStyles from './carreer.module.scss'

const Carreer = () => (
  <section className={carreerStyles.carreerContainer}>
    <div className="grid-container">
      <Experience />
      <Education />
    </div>
  </section>
)

export default Carreer
