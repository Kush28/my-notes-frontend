import actionTypes from '../types'
import { fetchAllNotes } from '../../api/notesApi'

export const fetchAllNotesAction = (token) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.NOTE_START_FETCH })
    const { data } = await fetchAllNotes(token)
    dispatch({ type: actionTypes.NOTE_END_FETCH, payload: data })
  } catch (error) {
    dispatch({ type: actionTypes.ERROR_SET })
  }
}

export const setAllNotes = (data) => (dispatch) => {
  dispatch({ type: actionTypes.NOTE_END_FETCH, payload: data })
}
