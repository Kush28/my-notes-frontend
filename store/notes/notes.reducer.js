import actionTypes from '../types'

const initialUserState = []

const getSortedNotes = (data) =>
  data.sort((note1, note2) => {
    const date1 = new Date(note1.createdAt)
    const date2 = new Date(note2.createdAt)
    return date2 - date1
  })

export default function reducer(state = initialUserState, action) {
  switch (action.type) {
    case actionTypes.NOTE_SET_DATA: {
      const { payload } = action
      const sortedData = getSortedNotes(payload)
      return sortedData
    }
    default:
      return state
  }
}
