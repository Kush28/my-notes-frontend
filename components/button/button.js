import React from 'react'

export default function Button({ children, ...other }) {
  return (
    <button type="button" tabIndex="0" {...other}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  tabIndex: 0,
}
