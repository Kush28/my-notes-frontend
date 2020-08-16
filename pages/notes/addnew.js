import React from 'react'
import { useRouter } from 'next/router'
import Container from '../../components/container/container'
import TakeNote from '../../components/note/take-note'
import Layout from '../../components/layout/layout'
import { createNote } from '../../api/notesApi'
import { getAuthCookie } from '../../utils/cookie'

function AddNewNote() {
  const router = useRouter()

  const addNote = async (noteData) => {
    await createNote(getAuthCookie(), noteData)
  }

  return (
    <Layout>
      <Container>
        <div className="flex flex-col">
          <TakeNote onSave={addNote} postSave={() => router.push('/notes')} />
        </div>
      </Container>
    </Layout>
  )
}

export default AddNewNote
