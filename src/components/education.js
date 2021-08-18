import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
          <li>
            <h4>{edge.node.startDate ? `${edge.node.startDate} - ${edge.node.finishDate}` : `Ongoing`}</h4>
            <p>
              {edge.node.link ? <Link to={edge.node.link}>{edge.node.courseName}</Link> : edge.node.courseName}
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

