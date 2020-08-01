import React from 'react'
import Container from '../components/container/container'
import Button from '../components/button/button'
import Note from '../components/note/note'

function Notes() {
  return (
    <Container>
      <div className="flex flex-col mb-5">
        <h1 className="font-bold mb-3">Add a new note</h1>
        <Button
          to="/notes/addnew"
          variant="simple"
          className="w-full p-3 text-gray text-left text-xs rounded shadow-small"
        >
          Start typing ...
        </Button>
      </div>

      <div className="flex flex-col">
        <h2 className="font-bold">Saved notes</h2>
        <h3 className="text-xs text-gray text-right py-2">15th Aug</h3>
        <Note title="This is a title" body="__Body__" />
        <h3 className="text-xs text-gray text-right py-2">11th Aug</h3>
      </div>
    </Container>
  )
}

export default Notes
