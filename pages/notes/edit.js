import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Container from '../../components/container/container'
import Layout from '../../components/layout/layout'
import { fetchNoteById, updateNote } from '../../api/notesApi'
import { getAuthCookie } from '../../utils/cookie'
import TakeNote from '../../components/note/take-note'

import { setError } from '../../store/error/error.action'

function EditNote({ setGlobalError }) {
  const router = useRouter()
  const noteId = router.query && router.query.id

  const [data, setData] = useState({})

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const noteData = await fetchNoteById(getAuthCookie(), noteId)
        setData(noteData.data)
      } catch (error) {
        setGlobalError()
      }
    }
    getDataFromAPI()
  }, [])

  const { body, title, updatedAt } = data

  const onUpdate = async (noteData) => {
    await updateNote(getAuthCookie(), { id: noteId, ...noteData })
  }

  return (
    <Layout>
      <Container>
        <TakeNote
          loading={data === {}}
          body={body}
          title={title}
          lastModified={updatedAt && new Date(updatedAt)}
          onSave={onUpdate}
          postSave={() => router.push('/notes')}
        />
      </Container>
    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setGlobalError: bindActionCreators(setError, dispatch),
})

export default connect(null, mapDispatchToProps)(EditNote)
