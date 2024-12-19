import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import { Home, About, Error, Product, ProductDetail } from "./pages/index";
import { loader as ProductLoader } from "./pages/Product";
import { loader as PorductDetailLoder } from "./pages/ProductDetail";
import { loader as UserApiLoader } from "./pages/UserApi";
import UserApi from "./pages/UserApi";
const App = () => {
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
          path: "/about",
          element: <About />,
        },
        {
          path: "/product",
          element: <Product />,
          loader: ProductLoader,
        },
        {
          path: "/product/:postId",
          element: <ProductDetail />,
          loader: PorductDetailLoder,
        },
        {
          path: "/user",
          element: <UserApi />,
          loader: UserApiLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
