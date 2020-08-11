import React from 'react'
import Badge from './badge'

function BadgeWrapper({ tags }) {
  return (
    <div className="scrollbar-hidden flex scrolling-touch whitespace-no-wrap overflow-x-auto">
      {tags.map((tag) => (
        <div>
          <Badge key={tag} text={tag} />
        </div>
      ))}
    </div>
  )
}

export default BadgeWrapper
