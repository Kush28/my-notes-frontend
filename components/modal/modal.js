import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import Button from '../button/button'

function Modal({ children, okHandler, closeHandler, primaryButton, secondaryButton }) {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-10 "
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="mx-12 my-48 md:mx-32 rounded p-5 shadow-small bg-white">
        <div className="flex flex-row-reverse">
          <Button variant="transparent" onClick={closeHandler}>
            <RiCloseLine />
          </Button>
        </div>
        <div className="py-5 font-semibold text-center">{children}</div>
        <div className="flex flex-row justify-center items-center">
          {primaryButton && (
            <Button variant="primary-block" className="h-12 mr-8" onClick={okHandler}>
              {primaryButton}
            </Button>
          )}
          <Button variant="transparent" className="h-12" onClick={closeHandler}>
            {secondaryButton || 'OK'}
          </Button>
        </div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  okHandler: () => {},
}

export default Modal
