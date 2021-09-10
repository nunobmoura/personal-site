import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <div>
      <h3>Experience</h3>
      <ol>
        {data.allContentfulExperience.edges.map((edge) => (
          <li key={edge.node.company.replace(/\s/g, '')}>
            <h4>{edge.node.startDate}{edge.node.finishDate ? ` - ${edge.node.finishDate}` : ` - present`}</h4>
            <p>{edge.node.position} - {edge.node.link ? <a href={edge.node.link} target="_blank" rel="noreferrer">{edge.node.company}</a> : edge.node.company}</p>
            <p>{edge.node.location}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Experience

