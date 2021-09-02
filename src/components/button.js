import React from 'react'

const Button = (props) => {
  return (
      <a href={props.href} target="_blank" rel="noreferrer" title={`Link to Nuno Moura's ${props.label} profile`}>
        {props.label}
      </a>
  )
}

export default Button