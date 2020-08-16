/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useRef, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import TextareaAutosize from 'react-textarea-autosize'
import { RiSaveLine, RiErrorWarningLine } from 'react-icons/ri'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../button/button'
// import Tag from '../tag/tag'
import FavButton from '../fav-button/fav-button'
import Modal from '../modal/modal'
import Loading from '../loading/loading'
import { getFormatedTime } from '../../utils/dateParser'
import { setError } from '../../store/error/error.action'

function TakeNote({
  loading,
  title: titleContent,
  body: bodyContent,
  lastModified,
  onSave,
  postSave,
  setGlobalError,
}) {
  const titleRef = useRef(null)
  const [showMenu, setMenu] = useState(false)
  const [title, setTitle] = useState(titleContent)
  const [body, setBody] = useState(bodyContent)
  const [edited, setEdited] = useState(getFormatedTime(lastModified))
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [saveInProgress, setSaveProgress] = useState(false)
  const [saveError, setSaveError] = useState(false)

  useEffect(() => {
    titleRef.current.focus()
  }, [])

  useEffect(() => {
    setTitle(titleContent)
    setBody(bodyContent)
    setEdited(getFormatedTime(lastModified))
  }, [titleContent, bodyContent, lastModified])

  const saveFormData = async () => {
    if (!title || !body) {
      setSaveError(true)
      return
    }
    const noteData = {
      title,
      body,
    }
    try {
      setSaveProgress(true)
      await onSave(noteData)
      setSaveSuccess(true)
      setSaveProgress(false)
    } catch (error) {
      setSaveProgress(false)
      setGlobalError()
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="mb-20">
          <h1 className="text-xl font-bold pb-2">
            <TextareaAutosize
              disabled={loading}
              ref={titleRef}
              className="focus:outline-none w-full text-3xl mb-4"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </h1>
          <div>
            <TextareaAutosize
              disabled={loading}
              className="focus:outline-none w-full mb-4"
              placeholder="Take a note ..."
              value={body}
              minRows={6}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-white shadow-smallRevese fixed bottom-0 left-0 right-0 text-sm flex flex-row justify-between">
          <div className="px-5 py-3">
            <p>Edited {edited}</p>
          </div>
          <Button variant="transparent" className="px-5 py-3" onClick={() => setMenu(!showMenu)}>
            <BsThreeDotsVertical />
          </Button>
        </div>
      </div>
      <FavButton
        disabled={loading}
        icon={saveInProgress ? <Loading color="white" width="25px" /> : <RiSaveLine />}
        onClick={saveFormData}
      />
      {saveSuccess && (
        <Modal title="Great!" primaryButton="Okay" okHandler={postSave} closeHandler={postSave}>
          <p>Your note have been saved.</p>
        </Modal>
      )}
      {saveError && (
        <Modal
          title={
            <>
              <RiErrorWarningLine className="text-4xl mb-3" />
              <p>Error!</p>
            </>
          }
          primaryButton="Okay"
          okHandler={() => setSaveError(false)}
          closeHandler={() => setSaveError(false)}
        >
          <p>Add a title and a body to the note.</p>
        </Modal>
      )}
    </>
  )
}

TakeNote.defaultProps = {
  loading: false,
  title: '',
  body: '',
  lastModified: new Date(),
  onSave: () => {},
  postSave: () => {},
}

const mapDispatchToProps = (dispatch) => ({
  setGlobalError: bindActionCreators(setError, dispatch),
})

export default connect(null, mapDispatchToProps)(TakeNote)
