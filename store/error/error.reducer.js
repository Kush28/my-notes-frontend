import actionTypes from '../types'

const initialUserState = {
  hasError: false,
  errorMsg: null,
}

export default function reducer(state = initialUserState, action) {
  switch (action.type) {
    case actionTypes.ERROR_SET: {
      const { payload } = action
      return {
        hasError: true,
        errorMsg:
          payload ||
          'Well! This is embarassing. Parhapse you can help kushal.m@yahoo.com with a donation to get this fixed',
      }
    }
    case actionTypes.ERROR_REMOVE: {
      return { hasError: false, errorMsg: '' }
    }
    default:
      return state
  }
}
