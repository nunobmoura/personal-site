import React from 'react'
import { Link } from 'gatsby'

const Button = (props) => {
  return (
    <p>
      <Link to="https://google.com">
        {props.label}
      </Link>
    </p>
  )
}

export default Button