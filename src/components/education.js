import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Education = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEducation (
        sort: {
          fields: startDate,
          order: DESC
        }
      ) {
        edges {
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
    <div>
      <h3>Education</h3>
      <ol>
        {data.allContentfulEducation.edges.map((edge) => (
          <li key={edge.node.courseName.replace(/\s/g, '')}>
            <h4>{edge.node.startDate ? `${edge.node.startDate} - ${edge.node.finishDate}` : `Ongoing`}</h4>
            <p>
              {edge.node.link ? <a href={edge.node.link} target="_blank" rel="noreferrer">{edge.node.courseName}</a> : edge.node.courseName}
              {edge.node.courseDetails && ` - ${edge.node.courseDetails}`}
            </p>
            <p>{edge.node.location}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Education

