import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Box, Typography } from '@mui/material'
import { useStore } from 'src/utils/StoreProvider'

const Profile: React.FunctionComponent = observer(() => {
  const { userStore } = useStore()
  return (
    <>
      <Typography variant='h1'>Profile</Typography>
      { userStore.firstName &&
        <Box sx={{ marginTop: '1rem' }}>
          <Typography variant='h1'>Hi, {userStore.firstName}</Typography>
        </Box>
      }
      <Box sx={{
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '0.5rem'
      }}>
        <Typography variant='h1'>Useful links</Typography>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Sign up</Link>
        <Link to="/profile/questionnaire-basic-info/who">Questionnaire Basics</Link>
      </Box>
    </>
  )
})

export default Profile
