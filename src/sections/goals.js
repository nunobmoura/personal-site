import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Goal from '../components/goals'
import Button from '../components/button'

import * as goalsStyles from './goals.module.scss'

const Goals = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {
      name: {regex: "/cv/"},
      extension: {eq: "pdf"}
    }) {
      edges {
        node {
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
            return (
              <Button
                label="View curriculum"
                title="Link to Nuno Moura's curriculum"
                href={edge.node.publicURL}
                class='secondary'
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Goals