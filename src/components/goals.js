import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import showdown from 'showdown'

const Goal = () => {
  const converter = new showdown.Converter()

  const data = useStaticQuery(graphql`
    query {
      contentfulGoals {
        main {
          main
        }
      }
    }
  `)

  const body = data.contentfulGoals.main.main

  return (
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(body) }} />
  )
}

export default Goal

