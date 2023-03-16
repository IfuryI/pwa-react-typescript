import { Link } from 'react-router-dom'
import styles from '../../styles/utility.module.scss'
// import { useStore } from '../../utils/StoreProvider'
import { observer } from 'mobx-react-lite'

const Profile: React.FunctionComponent = observer(() => {
  // const store = useStore()
  return (
    <>
      <h2 className={styles.headerTemp}>Profile</h2>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/registration">Registration</Link>
      <Link to="/profile/questionnaire-basic-info/who">Questionnaire Basics</Link>
    </>
  )
})

export default Profile
