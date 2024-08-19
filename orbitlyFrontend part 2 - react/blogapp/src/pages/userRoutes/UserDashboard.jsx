import React from 'react'
import Base from '../../components/base'
import AddPost from '../../components/AddPost'
import { Container } from 'reactstrap'

function UserDashboard() {
  return (
    <Base>
    <Container>
    <AddPost/>
    </Container>
    </Base>
  )
}

export default UserDashboard