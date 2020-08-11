/* eslint-disable */
import React from 'react'
import { useRouter } from 'next/router'
import Container from '../../components/container/container'
import Layout from '../../components/layout/layout'

function EditNote() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Container>
        <div className="flex flex-col">
          <h1 className="text-center">Feature in development 😊</h1>
        </div>
      </Container>
    </Layout>
  )
}

export default EditNote
