import React from "react"
import * as HeaderStyle from './postHeader.module.scss'
import Button from "../../components/button"

const PostHeader = () => {
  return (
    <header className={HeaderStyle.headerContainer}>
      <nav>
        <Button
          label="Back to projects"
          title="projects"
          href='#'
          class='btnPrimary'
        />
      </nav>
    </header>
  )
}

export default PostHeader
