import { Link } from 'react-router-dom'

const Profile: React.FunctionComponent = () => {
  return (
    <>
      <h2>Profile</h2>
      <Link to="/auth/login">Login</Link>
    </>
  )
}

export default Profile
