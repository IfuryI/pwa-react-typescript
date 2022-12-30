import { createBrowserRouter } from "react-router-dom";
import { Blogs } from "../pages/Blogs";
import { Home } from "../pages/Home";
import * as App from "../pages/Layout";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound";
import * as Registration from "../pages/Registration/Layout";

export const appRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App.Layout />,
  //   errorElement: <NotFound />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />
  //     },
  //     {
  //       path: "blogs",
  //       element: <Blogs />
  //     },
  //   ],
  // },
  {
    path: '/login',
    element: <Login/>
  },
  {
    index: true,
    path: '/registration',
    element: <Registration.Layout/>
  }
], {
  basename: '/pwa-react-typescript/'
});