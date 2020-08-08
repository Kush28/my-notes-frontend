import actionTypes from '../types'

const initialUserState = {
  isFetching: false,
  fetched: false,
  data: [],
}

const getSortedNotes = (data) =>
  data.sort((note1, note2) => {
    const date1 = new Date(note1.createdAt)
    const date2 = new Date(note2.createdAt)
    return date2 - date1
  })

export default function reducer(state = initialUserState, action) {
  switch (action.type) {
    case actionTypes.NOTE_START_FETCH: {
      return { ...state, isFetching: true, fetched: false }
    }
    case actionTypes.NOTE_END_FETCH: {
      const { payload } = action
      const sortedData = getSortedNotes(payload)
      return {
        isFetching: false,
        fetched: true,
        data: sortedData,
      }
    }
    default:
      return state
  }
}
