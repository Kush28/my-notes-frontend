import React from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri'
import Container from '../../components/container/container'
import Button from '../../components/button/button'
import TakeNote from '../../components/note/take-note'

function AddNewNote() {
  return (
    <Container>
      <Button to="/notes" className="flex flex-row items-center">
        <RiArrowLeftSLine className="text-3xl" />
        <p className="text-sm">back</p>
      </Button>
      <div className="flex flex-col mt-4">
        <TakeNote />
      </div>
      <div className="w-full text-center mt-5">
        <Button variant="primary">Save</Button>
      </div>
    </Container>
  )
}

export default AddNewNote
