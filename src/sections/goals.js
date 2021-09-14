import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Goal from '../components/goals'
import Button from '../components/button'

import * as goalsStyles from './goals.module.scss'

const Goals = () => {
  const data = useStaticQuery(graphql`
  query {
    file {
      publicURL
    }
  }
`)
  return (
    <section className={`${goalsStyles.goalsContainer} grid-container goals-container`}>
      <div>
        <Goal />
        <Button
          label="View resumé"
          title="resumé"
          href={data.file.publicURL}
          class='btnSecondary'
        />
      </div>
    </section>
  )
}

export default Goals
