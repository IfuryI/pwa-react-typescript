import { Link } from 'react-router-dom'
// import { useStore } from '../../utils/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Typography } from '@mui/material'

const Profile: React.FunctionComponent = observer(() => {
  // const store = useStore()
  return (
    <>
      <Typography variant='h1'>Profile</Typography>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/registration">Registration</Link>
      <Link to="/profile/questionnaire-basic-info/who">Questionnaire Basics</Link>
    </>
  )
})

export default Profile
