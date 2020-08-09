import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RiErrorWarningLine } from 'react-icons/ri'
import { AnimatePresence } from 'framer-motion'
import SideMenu from '../sidemenu/SideMenu'
import { removeError } from '../../store/error/error.action'
import Modal from '../modal/modal'

function Layout({ error, removeErrorAction, children }) {
  const { hasError, errorMsg } = error
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {hasError && (
          <Modal
            title={
              <>
                <RiErrorWarningLine className="text-4xl mb-3" />
                <p>Error!</p>
              </>
            }
            closeHandler={() => removeErrorAction()}
          >
            {errorMsg}
          </Modal>
        )}
      </AnimatePresence>
      <SideMenu />
      <main>{children}</main>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeErrorAction: bindActionCreators(removeError, dispatch),
})

const mapStateToProps = ({ error }) => ({ error })

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
