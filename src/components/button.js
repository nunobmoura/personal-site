import React from 'react'

import * as btnStyles from './button.module.scss'

const Button = (props) => {
  return (
    <div className={`${btnStyles.button} btn-container`}>
      <a
        className={props.class}
        href={props.href}
        title={`Link to Nuno Moura's ${props.label}`}
        target="_blank" rel="noreferrer"
      >
        {props.label}
      </a>
    </div>
  )
}

export default Button