import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as educationStyles from './edu-exp.module.scss'

const Education = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEducation (sort: {finishDate: DESC}) {
        edges{
          node {
            startDate (formatString:"MMM YYYY")
            finishDate (formatString:"MMM YYYY")
            courseName
            link
            courseDetails
            location
          }
        }
      }
    }
  `)
  return (
    <article className={educationStyles.container}>
      <h2>Education</h2>
      <ol>
        {data.allContentfulEducation.edges.map((edge) => (
          <li key={edge.node.courseName.replace(/\s/g, '')}>
            <h3>
            {edge.node.startDate && edge.node.finishDate
            ? `${edge.node.startDate} - ${edge.node.finishDate}`
            : edge.node.finishDate
            ? edge.node.finishDate
            : 'Ongoing'}
            </h3>
            <p>
              {edge.node.link ? <a href={edge.node.link} title={`Link to ${edge.node.courseName}`} target="_blank" rel="noreferrer">{edge.node.courseName}</a> : edge.node.courseName}
              {edge.node.courseDetails && ` - ${edge.node.courseDetails}`}
            </p>
            <p>{edge.node.location}</p>
          </li>
        ))}
      </ol>
    </article>
  )
}

export default Education

