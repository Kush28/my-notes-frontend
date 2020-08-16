/* eslint-disable */
import React from 'react'
import Container from '../../components/container/container'
import Layout from '../../components/layout/layout'
import { fetchNoteById } from '../../api/notesApi'
import { getAuthCookieFromServer } from '../../utils/cookie'
import TakeNote from '../../components/note/take-note'

function EditNote({ data }) {
  console.log(data)

  return (
    <Layout>
      <Container>
        <TakeNote />
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ req, query }) {
  let noteData = {}
  const noteId = query && query.id
  noteData = await fetchNoteById(getAuthCookieFromServer(req), noteId)
  return {
    props: { data: noteData.data },
  }
}

export default EditNote
