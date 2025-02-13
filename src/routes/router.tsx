import { Navigate, Route, Routes } from 'react-router-dom'
import Household from '../pages/Household/Household'
import Matches from '../pages/Matches/Matches'
import Notifications from '../pages/Notifications/Notifications'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import MainLayout from '../layouts/Main/MainLayout'
import { NotFound } from '../pages/NotFound'
import QuestionnaireBasic from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import BasicInfo from './profile/questionnaire/BasicInfo'
import AuthRoutes from './auth/auth'
import { AuthLayout } from 'src/layouts/Auth/AuthLayout'

const Router: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} errorElement={<NotFound />} >
        <Route path="profile">
          <Route path='' element={<Profile />} />
          <Route path="questionnaire-basic-info" element={<QuestionnaireBasic />} errorElement={<NotFound />}>
            {BasicInfo}
          </Route>
          [/*future*/]
          <Route path='about'>
            <Route path='' element={<Profile />} />
            <Route path='basic-questions' element={<Profile />} />
            <Route path='additional-questions' element={<Profile />} />
          </Route>
        </Route>
        <Route path="household" element={<Household />} />
        <Route path="search" element={<Search />} />
        <Route path="search/:id" element={<Search />} />
        <Route path="match" element={<Matches />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="/" element={<Navigate to="search" replace />} />
        <Route path="/*" element={<Navigate to="profile" replace />} />
      </Route>

      <Route path="/auth" element={<AuthLayout/>} errorElement={<NotFound/>}>
        {AuthRoutes}
        <Route path="/auth" element={<Navigate to="login" replace />} />
        <Route path="/auth/*" element={<Navigate to="login" replace />} />
      </Route>
    </Routes>
  )
}

export default Router
