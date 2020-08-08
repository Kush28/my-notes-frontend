/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FiPlus } from 'react-icons/fi'
import Container from '../components/container/container'
import Button from '../components/button/button'
import Note from '../components/note/note'
import { getAuthCookie } from '../utils/cookie'
import { fetchAllNotesAction } from '../store/notes/notes.action'
import Layout from '../components/layout/layout'
import { getFormattedDate } from '../utils/dateParser'
import Avatar from '../components/avatar/avatar'

function Notes({ user, notes, fetchNotes }) {
  const [date, setDate] = useState(null)
  useEffect(() => {
    setDate(new Date())
    fetchNotes(getAuthCookie())
  }, [])

  return (
    <Layout>
      <Container>
        <div className="flex flex-row">
          <div className="flex flex-col mb-5 w-3/4">
            <p>{date && getFormattedDate(date, true).toUpperCase()}</p>
            <p className="text-2xl">Today</p>
          </div>
          <div className="w-1/4 flex justify-end">
            <Avatar image={user.avatar} />
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col mt-5">
          {notes.length === 0 ? (
            <div className="flex h-64 text-center items-center px-10">
              <p>Click on the + icon to add your fisrt note</p>
            </div>
          ) : (
            notes.map((note) => (
              <Note
                key={note._id}
                id={note._id}
                title={note.title}
                body={note.body}
                tags={note.tags}
                createdAt={note.createdAt}
              />
            ))
          )}
        </div>
        <Button
          to="/notes/addnew"
          variant="simple"
          className="fixed shadow-large rounded-full bg-primary text-2xl p-4 bottom-0 right-0 mr-8 mb-10"
        >
          <FiPlus />
        </Button>
      </Container>
    </Layout>
  )
}

const mapStateToProps = ({ notes, user }) => ({
  notes,
  user,
})

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: bindActionCreators(fetchAllNotesAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
