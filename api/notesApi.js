import Axios from 'axios'

const endPointUrl = process.env.SERVER_ENDPOINT

export const createNote = (token, note) =>
  Axios({
    url: `${endPointUrl}/note/create`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      title: note.title,
      body: note.body,
      tags: note.tags,
    },
  })

export const updateNote = (token, note) =>
  Axios({
    url: `${endPointUrl}/note/update`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id: note.id,
      title: note.title,
      body: note.body,
      tags: note.tags,
    },
  })

export const fetchAllNotes = (token) =>
  Axios({
    url: `${endPointUrl}/note/fetch-all`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

export const fetchNoteById = (token, id) => {
  return Axios({
    url: `${endPointUrl}/note/fetch/${id}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const deleteNote = (token, id) =>
  Axios({
    url: `${endPointUrl}/note/delete`,
    method: 'put',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id,
    },
  })
