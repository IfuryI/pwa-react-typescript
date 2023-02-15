import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layout/Main/MainLayout'
import { Login } from '../pages/Login/Login'
import { NotFound } from '../pages/NotFound'
import * as Registration from '../pages/Registration/Layout'

export const appRouter = createBrowserRouter([
  {
    path: '/auth/login',
    element: <Login/>,
    errorElement: <NotFound />
  },
  {

    path: '/auth/registration',
    element: <Registration.Layout/>,
    errorElement: <NotFound />
  },
  {
    index: true,
    path: '/',
    element: <MainLayout />
  }
])

