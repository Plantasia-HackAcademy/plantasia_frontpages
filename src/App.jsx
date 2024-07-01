import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CheckOut from "./pages/CheckOut";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <AboutPage />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
    {
      path: "/cart",
      element: <CheckOut />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
