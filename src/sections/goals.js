import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Goal from '../components/goals'
import Button from '../components/button'

import * as goalsStyles from './goals.module.scss'

const Goals = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`)
  return (
    <section className={`${goalsStyles.goalsContainer} grid-container goals-container`}>
      <div>
        <Goal />
        <div className={goalsStyles.btnsContainer} >
          {data.allFile.edges.map((edge) => {
            var name = edge.node.name
            var label = name.replace(/^[^-]*-/, 'View ')
            var title = name.replace(/^[^-]*-/, '')
            return (
              <Button
                label={label}
                title={title}
                href={edge.node.publicURL}
                class='btnSecondary'
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Goals