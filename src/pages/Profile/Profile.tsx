import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Profile = (props: Props) => {
  return (
    <>
      <h2>Profile</h2>
      <Link to="/auth/login">Login</Link>
    </>
  )
}

export default Profile