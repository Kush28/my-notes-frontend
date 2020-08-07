/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Container from '../components/container/container'
import Button from '../components/button/button'
import Note from '../components/note/note'
import { getAuthCookie } from '../utils/cookie'
import { fetchAllNotesAction } from '../store/notes/notes.action'

function Notes({ notes, fetchNotes }) {
  useEffect(() => {
    fetchNotes(getAuthCookie())
  }, [])

  return (
    <Container>
      <div className="flex flex-col mb-5">
        <Button to="/">Home</Button>
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
        {Object.keys(notes).map((key) => (
          <React.Fragment key={key}>
            <h3 className="text-xs text-gray text-right py-2">{key}</h3>
            {notes[key].map((note) => (
              <Note
                key={note._id}
                id={note._id}
                title={note.title}
                body={note.body}
                tags={note.tags}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </Container>
  )
}

const mapStateToProps = ({ notes }) => ({
  notes,
})

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: bindActionCreators(fetchAllNotesAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
