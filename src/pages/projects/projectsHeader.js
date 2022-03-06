import React from "react"
import * as HeaderStyle from './projectsHeader.module.scss'
import Button from "../../components/button"

const ProjectsHeader = (props, ...rest) => {
  return (
    <header className={HeaderStyle.headerContainer}>
      <nav>
        <Button
          label={props.label}
          title="projects"
          href={props.href}
          class='terciary'
          small={true}
          {...rest}
        />
      </nav>
    </header>
  )
}

export default ProjectsHeader
