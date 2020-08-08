/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import styles from './button.style'

export default function Button({ to, children, variant, className, ...other }) {
  const consolidatedClass = `${className || ''} ${styles[variant]}`
  if (!to)
    return (
      <button type="button" tabIndex="0" className={consolidatedClass} {...other}>
        {children}
      </button>
    )
  return (
    <Link href={to}>
      <a className={consolidatedClass}>{children}</a>
    </Link>
  )
}

Button.defaultProps = {
  to: null,
  tabIndex: 0,
  variant: 'simple',
}
