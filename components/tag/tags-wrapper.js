import React from 'react'
import Tag from './tag'

function TagWrapper({ tags }) {
  return (
    <div className="scrollbar-hidden flex scrolling-touch whitespace-no-wrap overflow-x-auto">
      {tags.map((tag) => (
        <div>
          <Tag key={tag} text={tag} />
        </div>
      ))}
    </div>
  )
}

export default TagWrapper
