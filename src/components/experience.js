import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as experienceStyles from './edu-exp.module.scss'

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulExperience (
        sort: {
          fields: startDate,
          order: DESC
        }
      ) {
        edges {
          node {
            startDate (formatString:"MMM YYYY")
            finishDate (formatString:"MMM YYYY")
            position
            company
            link
            location
          }
        }
      }
    }
  `)

  return (
    <article className={experienceStyles.container}>
      <h2>Experience</h2>
      <ol>
        {data.allContentfulExperience.edges.map((edge) => (
          <li key={edge.node.company.replace(/\s/g, '')}>
            <h3>{edge.node.startDate}{edge.node.finishDate ? ` - ${edge.node.finishDate}` : ` - present`}</h3>
            <p>{edge.node.position} - {edge.node.link ? <a href={edge.node.link} title={`Link to ${edge.node.company}`} target="_blank" rel="noreferrer">{edge.node.company}</a> : edge.node.company}</p>
            <p>{edge.node.location}</p>
          </li>
        ))}
      </ol>
    </article>
  )
}

export default Experience

