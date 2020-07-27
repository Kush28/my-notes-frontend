import actionTypes from '../types'

const initialState = {
  authenticated: undefined,
  isAuthenticating: false,
  errorCode: null,
  errorMassage: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, isAuthenticating: true }
    case actionTypes.AUTH_USER:
      return { ...state, isAuthenticating: false, authenticated: true }
    case actionTypes.AUTH_FAILED: {
      const { status, statusText } = action.payload
      return {
        ...state,
        isAuthenticating: false,
        authenticated: false,
        errorCode: status,
        errorMassage: statusText,
      }
    }
    default:
      return state
  }
}
