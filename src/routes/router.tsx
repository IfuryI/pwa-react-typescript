import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/Main/MainLayout'
import Household from '../pages/Household/Household'
import { Login } from '../pages/Login/Login'
import Matches from '../pages/Matches/Matches'
import Notifications from '../pages/Notifications/Notifications'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import * as Registration from '../pages/Registration/Layout'

const Router: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route path="profile" element={<Profile />} />
        <Route path="household" element={<Household />} />
        <Route path="search" element={<Search />} />
        <Route path="search/:id" element={<Search />} />
        <Route path="match" element={<Matches />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="/" element={<Navigate to="search" replace />} />
        <Route path="/*" element={<Navigate to="profile" replace />} />
      </Route>

      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration.Layout />} />
        <Route path="/auth" element={<Navigate to="login" replace />} />
        <Route path="/auth/*" element={<Navigate to="login" replace />} />
      </Route>
    </Routes>
  )
}

export default Router
