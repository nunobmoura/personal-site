import React from 'react'

import * as btnStyles from './button.module.scss'

const Button = (props) => {
  return (
    <button
      className={btnStyles.btn}
      href={props.href}
      title={`Link to Nuno Moura's ${props.label}`}
      target="_blank" rel="noreferrer"
    >
      {props.label}
    </button>
  )
}

export default Button