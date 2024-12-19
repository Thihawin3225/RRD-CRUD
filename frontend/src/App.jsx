import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Create from "./pages/Create";
import Error from "./pages/Error";

import {
  action as delteAction,
  loader as detailLoader,
} from "./compoment/PostDetail";
import { loader as postLoader } from "./pages/Post";

import { action as addAction } from "./compoment/CreateForm";
import { action as updateAction } from "./compoment/CreateForm";
import PostDetail from "./compoment/PostDetail";
import Edit from "./pages/Edit";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Post />,
        loader: postLoader,
      },
      {
        path: "/create-post",
        element: <Create />,
        action: addAction,
      },
      {
        path: "posts/:id",
        id: "post-detail",
        loader: detailLoader,
        children: [
          {
            index: true,
            element: <PostDetail />,
            action: delteAction,
          },
          {
            path: "edit-page/",
            element: <Edit />,
            action: updateAction,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
