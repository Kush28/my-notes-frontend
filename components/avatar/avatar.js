import React from 'react'

const sizeClass = {
  Medium: 'h-16 w-16',
  Smaller: 'h-12 w-12',
}

export default function Avatar({ image, size, className }) {
  return (
    <img
      src={image}
      alt="avatar"
      className={`rounded-full ${sizeClass[size]} ${className || ''}`}
    />
  )
}

Avatar.defaultProps = {
  size: 'Medium',
}
