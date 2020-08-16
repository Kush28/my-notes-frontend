/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import TextareaAutosize from 'react-textarea-autosize'
import { RiSaveLine, RiErrorWarningLine } from 'react-icons/ri'
import { useRouter } from 'next/router'
import Button from '../button/button'
// import Tag from '../tag/tag'
import FavButton from '../fav-button/fav-button'
import { createNote } from '../../api/notesApi'
import { getAuthCookie } from '../../utils/cookie'
import Modal from '../modal/modal'
import Loading from '../loading/loading'
import { getCurrTime } from '../../utils/dateParser'

function TakeNote() {
  const router = useRouter()
  const titleRef = useRef(null)
  const [showMenu, setMenu] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [saveInProgress, setSaveProgress] = useState(false)
  const [saveError, setSaveError] = useState(false)
  const [currentTime, setCurrTime] = useState(null)

  useEffect(() => {
    titleRef.current.focus()
    setCurrTime(getCurrTime())
  }, [])

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
      await createNote(getAuthCookie(), noteData)
      setSaveSuccess(true)
      setSaveProgress(false)
    } catch (error) {
      setSaveProgress(false)
      setSaveError(true)
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="mb-20">
          <h1 className="text-xl font-bold pb-2">
            <input
              ref={titleRef}
              className="focus:outline-none w-full text-3xl mb-4"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </h1>
          <div>
            <TextareaAutosize
              className="focus:outline-none w-full mb-4"
              placeholder="Take a note ..."
              value={body}
              minRows={6}
              onChange={(e) => setBody(e.target.value)}
            />
            {/* <div className="flex flex-row flex-wrap">
                  <Tag text="Tag1" />
                  <Tag text="Tag2" />
                  <Tag text="Tag3" />
                </div> */}
          </div>
        </div>
        <div className="bg-white shadow-smallRevese fixed bottom-0 left-0 right-0 text-sm flex flex-row justify-between">
          <div className="px-5 py-3">
            <p>
              Edited
              {' '}
              {currentTime}
            </p>
          </div>
          <Button variant="transparent" className="px-5 py-3" onClick={() => setMenu(!showMenu)}>
            <BsThreeDotsVertical />
          </Button>
        </div>
        <FavButton
          icon={saveInProgress ? <Loading color="white" width="25px" /> : <RiSaveLine />}
          onClick={saveFormData}
        />
      </div>
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

export default TakeNote
