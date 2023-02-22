import { Link } from 'react-router-dom'
import styles from '../../styles/utility.module.scss'
import { useStore } from '../../utils/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Button, TextField, Typography } from '@mui/material'

const Profile: React.FunctionComponent = observer(() => {
  const store = useStore()
  return (
    <>
      <h2 className={styles.headerTemp}>Profile</h2>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/registration">Registration</Link>
      <Typography variant="h1"> Hello, {store.userStore.firstName} {store.userStore.lastName}</Typography>
      <TextField fullWidth
        label="First name"
        variant="outlined"
        size="small"
        value={store.userStore.firstName}
        onChange={(e) => { store.userStore.setFirstName(e.target.value) }}
      />
      <TextField fullWidth
        label="Last name"
        variant="outlined"
        size="small"
        value={store.userStore.lastName}
        onChange={(e) => { store.userStore.setLastName(e.target.value) }}
      />
      <Button variant="contained" onClick={() => { store.userStore.firstName = 'aaa' }}>Log in</Button>
    </>
  )
})

export default Profile
