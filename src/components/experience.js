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
            tagStartDate: startDate (formatString:"YYYY-MM")
            textStartDate: startDate (formatString:"MMM YYYY")
            tagFinishDate: finishDate (formatString:"YYYY-MM")
            textFinishDate: finishDate (formatString:"MMM YYYY")
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
            <h3><time datetime={edge.node.tagStartDate}>{edge.node.textStartDate}</time>{edge.node.tagFinishDate ? <span> - <time datetime={edge.node.tagFinishDate}>{edge.node.textFinishDate}</time></span> : ` - present`}</h3>
            <p>{edge.node.position} - {edge.node.link ? <a href={edge.node.link} title={`Link to ${edge.node.company}`} target="_blank" rel="noreferrer">{edge.node.company}</a> : edge.node.company}</p>
            <p>{edge.node.location}</p>
          </li>
        ))}
      </ol>
    </article>
  )
}

export default Experience

