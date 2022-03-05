import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import showdown from "showdown"
import * as postStyles from './post.module.scss'

const Post = () => {
  const converter = new showdown.Converter()

  const data = useStaticQuery(graphql`
    query {
      contentfulProject {
        title
        company
        companysLink
        date
        content {
          content
        }
        link
        withWho
      }
    }
  `)

  const body = data.contentfulProject.content.content
  
  return (
    <div className={postStyles.container}>
      <h1>Post</h1>
      <p>{data.contentfulProject.title}</p>
      <p>{data.contentfulProject.company}</p>
      <p>{data.contentfulProject.companysLink}</p>
      <p>{data.contentfulProject.date}</p>

      <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(body) }} />

      <p>{data.contentfulProject.link}</p>
      <p>{data.contentfulProject.withWho}</p>
    </div>
  )
}

export default Post
