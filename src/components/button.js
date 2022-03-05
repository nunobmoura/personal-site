import React from "react"

import Icon from "../assets/link.svg"

import * as btnStyles from "./button.module.scss"

const Button = props => {
  return (
    <div
      className={`${btnStyles.button}
      ${props.small ? `${btnStyles.small}` : ""}
      btn-container`}
    >
      <a
        className={`${props.class} ${props.size}`}
        href={props.href}
        title={props.title}
        target="_blank"
        rel="noreferrer"
      >
        {props.label}
        <span>
          <Icon />
        </span>
      </a>
    </div>
  )
}

export default Button
