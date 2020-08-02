/* eslint-disable no-underscore-dangle */
import React from 'react'
import Container from '../components/container/container'
import Button from '../components/button/button'
import Note from '../components/note/note'
import { fetchAllNotes } from '../api/notesApi'
import { getAuthCookieFromServer } from '../utils/cookie'
import { getFormattedDate } from '../utils/dateParser'

function Notes({ notesData }) {
  const consolidatedNotes = {}
  notesData.forEach((note) => {
    const createdDate = new Date(note.createdAt)
    consolidatedNotes[getFormattedDate(createdDate)] = consolidatedNotes[
      getFormattedDate(createdDate)
    ]
      ? [...consolidatedNotes[getFormattedDate(createdDate)], note]
      : [note]
  })
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
        {Object.keys(consolidatedNotes).map((key) => (
          <React.Fragment key={key}>
            <h3 className="text-xs text-gray text-right py-2">{key}</h3>
            {consolidatedNotes[key].map((note) => (
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

export async function getServerSideProps({ req }) {
  const accessToken = getAuthCookieFromServer(req)
  const { data } = await fetchAllNotes(accessToken)
  return {
    props: { notesData: data || [] },
  }
}

export default Notes
