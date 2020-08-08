import React from 'react'
import Loading from './loading'

function LoadingOverlay() {
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 bg-black-400 z-10"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
    >
      <div className="h-full w-full flex justify-center items-center">
        <Loading width="80px" />
      </div>
    </div>
  )
}

export default LoadingOverlay
