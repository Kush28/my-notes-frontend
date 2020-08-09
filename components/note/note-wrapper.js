/* eslint-disable no-underscore-dangle */
import React from 'react'
import { motion } from 'framer-motion'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Note from './note'
import { getAuthCookie } from '../../utils/cookie'
import { fetchAllNotesAction } from '../../store/notes/notes.action'
import { stagger } from '../../animations/fadeInUp'

function NoteWrapper({ notes, refreshNotes }) {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      {notes.map((note) => (
        <div>
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            body={note.body}
            tags={note.tags}
            createdAt={note.createdAt}
            postDelete={() => {
              refreshNotes(getAuthCookie())
            }}
          />
        </div>
      ))}
    </motion.div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  refreshNotes: bindActionCreators(fetchAllNotesAction, dispatch),
})

export default connect(null, mapDispatchToProps)(NoteWrapper)
