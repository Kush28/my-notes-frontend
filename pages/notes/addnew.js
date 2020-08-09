import React from 'react'
import Container from '../../components/container/container'
import TakeNote from '../../components/note/take-note'
import Layout from '../../components/layout/layout'

function AddNewNote() {
  return (
    <Layout>
      <Container animationType="fromTop">
        <div className="flex flex-col">
          <h1 className="text-xl mb-3">Start typing...</h1>
          <TakeNote />
        </div>
      </Container>
    </Layout>
  )
}

export default AddNewNote
