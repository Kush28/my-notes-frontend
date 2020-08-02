import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Badge from '../badge/badge'
import Button from '../button/button'
import { createNote } from '../../api/notesApi'
import { getAuthCookie } from '../../utils/cookie'
import { authError } from '../../store/auth/auth.action'
import Modal from '../modal/modal'
import { useRouter } from 'next/router'

function TakeNote({ setAuthError }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState([])

  const [saveSuccess, setSaveSuccess] = useState(false)
  const router = useRouter()

  const addNewTag = (e) => {
    if (e.key === 'Enter') {
      const { value } = e.target
      if (!tags.includes(value)) setTags([...tags, value])
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const saveFormData = async () => {
    const noteData = {
      title,
      body,
      tags,
    }
    try {
      await createNote(getAuthCookie(), noteData)
      setSaveSuccess(true)
    } catch (error) {
      setAuthError(error)
    }
  }

  return (
    <>
      {saveSuccess && (
        <Modal closeHandler={()=> router.push('/notes')}>
          <p className="text-xl">Great!</p>
          <p>Your note have been saved.</p>
        </Modal>
      )}
      <div className="rounded shadow-medium border border-1 border-graylight p-3 my-2">
        <input
          className="focus:outline-none w-full text-3xl mb-4"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="focus:outline-none w-full mb-4 h-64"
          placeholder="Take a note..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          className="focus:outline-none w-full mb-2"
          placeholder="Tags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={addNewTag}
        />
        <div className="flex flex-row flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} text={tag} removable onRemove={() => removeTag(tag)} />
          ))}
        </div>
      </div>
      <div className="w-full text-center mt-5">
        <Button variant="primary" onClick={saveFormData}>
          Save
        </Button>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setAuthError: bindActionCreators(authError, dispatch),
})

export default connect(null, mapDispatchToProps)(TakeNote)
