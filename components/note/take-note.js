import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import Badge from '../badge/badge'
import Button from '../button/button'
import { createNote } from '../../api/notesApi'
import { getAuthCookie } from '../../utils/cookie'
import { authError } from '../../store/auth/auth.action'
import Modal from '../modal/modal'
import Loading from '../loading/loading'

function TakeNote({ setAuthError }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState([])

  const [saveSuccess, setSaveSuccess] = useState(false)
  const [saveInProgress, setSaveProgress] = useState(false)
  const [formError, setFormError] = useState(false)
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
    if (!title || !body) {
      setFormError(true)
      return
    }
    const noteData = {
      title,
      body,
      tags,
    }
    try {
      setSaveProgress(true)
      await createNote(getAuthCookie(), noteData)
      setSaveSuccess(true)
      setSaveProgress(false)
    } catch (error) {
      setAuthError(error)
      setSaveProgress(false)
    }
  }

  return (
    <>
      {saveSuccess && (
        <Modal
          title="Great!"
          primaryButton="Okay"
          okHandler={() => router.push('/notes')}
          closeHandler={() => router.push('/notes')}
        >
          <p>Your note have been saved.</p>
        </Modal>
      )}
      <h1 className="text-xl mb-3">Start typing...</h1>
      <div className="rounded shadow-medium border border-1 border-graylight p-3 my-2">
        <input
          className="focus:outline-none w-full text-3xl mb-4"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="focus:outline-none w-full mb-4 h-64"
          placeholder="Take a note ..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          className="focus:outline-none w-full mb-2"
          placeholder="Enter a tag and press enter ..."
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
      {formError && (
        <div className="text-center mt-3 bg-error p-3 rounded">
          <p>Please enter a Title and a Note</p>
        </div>
      )}
      <div className="w-full flex flex-row justify-center text-center mt-5 px-5">
        <Button className="mr-3 w-2/4" variant="primary" onClick={saveFormData}>
          {saveInProgress ? <Loading color="white" width="25px" /> : 'Save'}
        </Button>
        <Button className="ml-3 w-2/4" variant="transparent" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setAuthError: bindActionCreators(authError, dispatch),
})

export default connect(null, mapDispatchToProps)(TakeNote)
