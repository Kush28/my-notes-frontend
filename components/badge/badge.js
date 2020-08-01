import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import Button from '../button/button'

function Badge({ text, removable, onRemove }) {
  if (!removable)
    return (
      <Button className="bg-warning text-xs px-3 py-1 rounded-10 mr-2">
        <p>{text}</p>
      </Button>
    )
  return (
    <div className="flex flex-row items-center bg-warning px-3 py-1 rounded-10 mr-2">
      <p className="text-xs mr-1">{text}</p>
      <Button variant="transparent" onClick={onRemove}>
        <RiCloseLine />
      </Button>
    </div>
  )
}

Badge.defaultProps = {
  removable: false,
  onRemove: () => {},
}

export default Badge
