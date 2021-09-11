import React from 'react'

import Goal from '../components/goals'
import ResumeBtn from '../components/resumeBtn'

const Goals = () => (
  <section className="goals-container">
    <div className="grid-container">
      <Goal />
      <ResumeBtn />
    </div>
  </section>
)

export default Goals
