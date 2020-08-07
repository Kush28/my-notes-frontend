import actionTypes from '../types'
import { fetchAllNotes } from '../../api/notesApi'

export const fetchAllNotesAction = (token) => async (dispatch) => {
  try {
    const { data } = await fetchAllNotes(token)
    dispatch({ type: actionTypes.NOTE_SET_DATA, payload: data })
  } catch (error) {
    dispatch({ type: actionTypes.AUTH_FAILED, payload: error.response })
  }
}
