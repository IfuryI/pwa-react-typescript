import { createBrowserRouter } from "react-router-dom";
import { Blogs } from "../pages/Blogs";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>
  }
], {
  basename: '/pwa-react-typescript/'
});