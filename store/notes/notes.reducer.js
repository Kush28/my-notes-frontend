import actionTypes from '../types'
import { getFormattedDate } from '../../utils/dateParser'

const initialUserState = {}

const getFormatedData = (data) => {
  const consolidatedNotes = {}
  data
    .sort((note1, note2) => {
      const date1 = new Date(note1.createdAt)
      const date2 = new Date(note2.createdAt)
      return date2 - date1
    })
    .forEach((note) => {
      const createdDate = new Date(note.createdAt)
      consolidatedNotes[getFormattedDate(createdDate)] = consolidatedNotes[
        getFormattedDate(createdDate)
      ]
        ? [note, ...consolidatedNotes[getFormattedDate(createdDate)]]
        : [note]
    })
  return consolidatedNotes
}

export default function reducer(state = initialUserState, action) {
  switch (action.type) {
    case actionTypes.NOTE_SET_DATA: {
      const { payload } = action
      const formatedData = getFormatedData(payload)
      return { ...formatedData }
    }
    default:
      return state
  }
}
