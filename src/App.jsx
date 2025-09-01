import Dairy from "./components/Dairy";
import Fruits from "./components/Fruits";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SeeFood from "./components/SeeFood";
import AllProducts from "./components/AllProducts";
import Layout from "./components/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seeFood",
          element: <SeeFood />,
        },
        {
          path: "/allproduct",
          element: <AllProducts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
