import React, { useState } from 'react'
import {
  // RiPushpin2Line, RiPushpinLine,
  RiDeleteBinLine,
  RiDeleteBin5Line,
} from 'react-icons/ri'
import ReactMarkdown from 'react-markdown/with-html'
import { AnimatePresence, motion } from 'framer-motion'
import Badge from '../badge/badge'
import Button from '../button/button'
import { deleteNote } from '../../api/notesApi'
import Modal from '../modal/modal'
import { getAuthCookie } from '../../utils/cookie'
import { getFormattedDate } from '../../utils/dateParser'
import Loading from '../loading/loading'
import { fadeInUp } from '../../animations/fadeInUp'

function Note({ id, title, body, createdAt, postDelete }) {
  // const [pinned, setPinned] = useState(false)
  const [deletePrompt, setDeletePrompt] = useState(false)
  const [isDeleting, setDeleting] = useState(false)

  async function deleteHandler() {
    setDeleting(true)
    await deleteNote(getAuthCookie(), id)
    setDeleting(false)
    setDeletePrompt(false)
    postDelete()
  }
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {deletePrompt && (
          <Modal
            title={
              <>
                <RiDeleteBin5Line className="text-2xl mb-3" />
                <p>Delete Note</p>
              </>
            }
            primaryButton={isDeleting ? <Loading color="white" /> : 'Yes'}
            secondaryButton="No"
            okHandler={deleteHandler}
            closeHandler={() => setDeletePrompt(false)}
          >
            This is a permanant action. Deleted notes are lost forever.
          </Modal>
        )}
      </AnimatePresence>
      <Button to={`/notes/edit?id=${id}`}>
        <motion.div variants={fadeInUp} className="rounded p-3 my-2 shadow-small h-56">
          <div className="flex flex-row justify-between ">
            <h3 className="font-medium pb-2 w-8/12 truncate">{title}</h3>
            <div className="ml-1 w-4/12 text-right">
              {/* <Button variant="transparent" className="p-2" onClick={() => setPinned(!pinned)}>
                {pinned ? <RiPushpinLine /> : <RiPushpin2Line />}
              </Button> */}
              <Button
                variant="transparent"
                className="p-2 text-error"
                onClick={() => setDeletePrompt(true)}
              >
                <RiDeleteBinLine />
              </Button>
            </div>
          </div>
          <div className="text-sm pb-3 h-36 overflow-hidden">
            <ReactMarkdown source={body} />
          </div>
          <div className="flex flex-row-reverse">
            <div className="text-xs text-gray-800 text-right pb-2 text-gray">
              {getFormattedDate(new Date(createdAt))}
            </div>
          </div>
        </motion.div>
      </Button>
    </>
  )
}

export default Note
