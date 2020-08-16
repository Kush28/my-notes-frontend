import React from 'react'
import Button from '../button/button'

function Tag({ text }) {
  return (
    <Button className="bg-warning text-xs px-3 py-1 rounded-10 mr-2">
      <p>{text}</p>
    </Button>
  )
}

export default Tag
