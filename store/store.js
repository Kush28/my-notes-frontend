import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import user from './user/user.reducer'
import auth from './auth/auth.reducer'
import notes from './notes/notes.reducer'

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  user,
  auth,
  notes,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload }
  }
  return combinedReducer(state, action)
}

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
