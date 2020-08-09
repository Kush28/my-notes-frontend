import actionTypes from '../types'

export const setError = (msg) => (dispatch) => {
  dispatch({ type: actionTypes.ERROR_SET, payload: msg })
}

export const removeError = () => (dispatch) => {
  dispatch({ type: actionTypes.ERROR_REMOVE })
}
