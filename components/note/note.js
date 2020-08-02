import React, { useState } from 'react'
import { RiPushpin2Line, RiPushpinLine, RiDeleteBinLine } from 'react-icons/ri'
import ReactMarkdown from 'react-markdown/with-html'
import Badge from '../badge/badge'
import Button from '../button/button'
import { deleteNote } from '../../api/notesApi'
import Modal from '../modal/modal'
import { getAuthCookie } from '../../utils/cookie'

function Note({ id, title, body, tags }) {
  const [pinned, setPinned] = useState(false)
  const [deletePrompt, setDeletePrompt] = useState(false)

  async function deleteHandler() {
    await deleteNote(getAuthCookie(), id)
    setDeletePrompt(false)
  }
  return (
    <>
      {deletePrompt && (
        <Modal
          primaryButton="Yes"
          secondaryButton="No"
          okHandler={deleteHandler}
          closeHandler={() => setDeletePrompt(false)}
        >
          <p>Are you sure?</p>
        </Modal>
      )}
      <div className="rounded border border-1 border-graylight p-3 my-2">
        <div className="flex flex-row justify-between">
          <h3 className="font-medium pb-2">{title}</h3>
          <div className="ml-1">
            <Button variant="transparent" className="p-2" onClick={() => setPinned(!pinned)}>
              {pinned ? <RiPushpinLine /> : <RiPushpin2Line />}
            </Button>
            <Button variant="transparent" className="p-2" onClick={() => setDeletePrompt(true)}>
              <RiDeleteBinLine />
            </Button>
          </div>
        </div>
        <div className="text-sm pb-3">
          <ReactMarkdown source={body} />
        </div>
        <div className="scrollbar-hidden flex scrolling-touch whitespace-no-wrap overflow-x-auto">
          {tags.map((tag) => (
            <Badge key={tag} text={tag} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Note
