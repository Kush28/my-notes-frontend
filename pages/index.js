import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function Index({ user, auth }) {
  return (
    <>
      <p>Hello there !</p>
      <p>
        User details:
        {JSON.stringify(user)}
      </p>
      <p>
        Auth:
        {JSON.stringify(auth)}
      </p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCountAction: bindActionCreators(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
