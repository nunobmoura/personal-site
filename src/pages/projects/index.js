import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ProjectsHeader from "./projectsHeader"
import * as Styles from "./index.module.scss"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            title
            company
            date(formatString: "MMM YYYY")
            cover {
              file {
                url
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <ProjectsHeader label="Back to website" href="/" target="_self" />
      <section className={Styles.container}>
        <h1>Projects</h1>
        <ol>
          {data.allContentfulProject.edges.map(edge => (
            <li key={edge.node.title.replace(/\s/g, "")}>
              <Link to={`/projects/${edge.node.fields.slug}`}>
                <div className={Styles.image}>
                  <img src={edge.node.cover.file.url} alt="Post cover"/>
                </div>
                <div className={Styles.description}>
                  <h2>{edge.node.title}</h2>
                  <p>
                    {edge.node.company} — <span className="nowrap">{edge.node.date}</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default Projects
