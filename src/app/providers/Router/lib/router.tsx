import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../../../Layout";
import { Routes } from "./Routes";

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <h1>Error</h1>,
      },
      {
        index: true,
        element: <p>Home</p>,
      },
      {
        path: "about",
        element: <p>About</p>,
      },
      {
        path: "login",
        element: <p>Login</p>,
      },
    ],
  },
]);
