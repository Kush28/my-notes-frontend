import actionTypes from '../types'
import { authUserWithToken } from '../../api/authApi'

export const authStart = () => (dispatch) => dispatch({ type: actionTypes.AUTH_START })

export const authUser = (token) => async (dispatch) => {
  try {
    const { data } = await authUserWithToken(token)
    dispatch({ payload: data, type: actionTypes.SET_USER })
    dispatch({ type: actionTypes.AUTH_USER })
  } catch (error) {
    dispatch({ type: actionTypes.AUTH_FAILED, payload: error.response })
  }
}
