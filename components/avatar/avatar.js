import React from 'react'

export default function Avatar({ image, className }) {
  return <img src={image} alt="avatar" className={`h-16 w-16 rounded-full ${className || ''}`} />
}
