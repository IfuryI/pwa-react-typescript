import { Link } from 'react-router-dom'
import styles from '../../styles/utility.module.scss'

const Profile: React.FunctionComponent = () => {
  return (
    <>
      <h2 className={styles.headerTemp}>Profile</h2>
      <Link to="/auth/login">Login</Link>
    </>
  )
}

export default Profile
