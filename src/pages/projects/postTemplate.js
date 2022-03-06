import React from "react"
import { graphql } from "gatsby"
import showdown from "showdown"
import * as postStyles from "./postTemplate.module.scss"

import ProjectsHeader from "./projectsHeader"

const PostTemplate = (props) => {
  const converter = new showdown.Converter()
  const body = props.data.contentfulProject.content.content

  return (
    <div>
      <ProjectsHeader label="Back to projects" href="/projects" target="_self"/>
      <article className={postStyles.container}>
        <h1>{props.data.contentfulProject.title}</h1>
        {/* {props.data.contentfulProject.description && <p>{props.data.contentfulProject.description}</p>} */}
        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(body) }} />

        <aside>
          {props.data.contentfulProject.companysLink ? (
            <a
              href={props.data.contentfulProject.companysLink}
              target="_blank"
              rel="noreferrer"
            >
              {props.data.contentfulProject.company}
            </a>
          ) : (
            <p>{props.data.contentfulProject.company}</p>
          )}

          {props.data.contentfulProject.date && <p>{props.data.contentfulProject.date}</p>}

          {props.data.contentfulProject.withWho && (
            <p>With {props.data.contentfulProject.withWho}</p>
          )}

          {props.data.contentfulProject.link && (
            <a
              href={props.data.contentfulProject.link}
              target="_blank"
              rel="noreferrer"
            >
              Visit for more
            </a>
          )}
        </aside>

      </article>
    </div>
  )
}

export const query = graphql`
query($slug: String!) {
  contentfulProject ( fields: { slug: { eq: $slug } } ) {
    title
    company
    companysLink
    link
    withWho
    date (formatString: "DD MMM, YYYY")
    content {
      content
    }
  }
}
`

export default PostTemplate
 