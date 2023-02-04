import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound";
import * as Registration from "../pages/Registration/Layout";

export const appRouter = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>,
    errorElement: <NotFound />,
  },
  {

    path: '/registration',
    element: <Registration.Layout/>,
    errorElement: <NotFound />,
  },
  {
    path: '/'
  }
], {
  basename: '/pwa-react-typescript/'
});