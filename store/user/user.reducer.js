import actionTypes from '../types'

const initialUserState = {
  id: null,
  name: null,
  avatar: null,
}

export default function reducer(state = initialUserState, action) {
  switch (action.type) {
    case actionTypes.SET_USER: {
      const { payload } = action
      const newState = {
        id: payload.id,
        name: payload.name,
        avatar: payload.avatar,
      }
      return { ...state, ...newState }
    }
    default:
      return state
  }
}
