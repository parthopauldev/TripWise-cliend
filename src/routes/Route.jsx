import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllVehicles from "./../pages/AllVehicles/AllVehicles";
import AddVehicle from "../pages/AddVehicle/AddVehicle";
import MyVehicles from "../pages/MyVehicles/MyVehicles";
import MyBookings from "../pages/MyBookings/MyBookings";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import UpdateProductDetails from "../components/UpdateProductDetails/UpdateProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allVehicles",
        element: <AllVehicles></AllVehicles>,
      },
      {
        path: "/addVehicle",
        element: (
          <PrivateRoute>
            <AddVehicle></AddVehicle>
          </PrivateRoute>
        ),
      },
      {
        path: "/myVehicles",
        element: (
          <PrivateRoute>
            <MyVehicles></MyVehicles>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) =>
          fetch(`https://trip-wise-server.vercel.app/products/${params.id}`),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateDetails/:id",
        loader: ({ params }) =>
          fetch(`https://trip-wise-server.vercel.app/products/${params.id}`),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        element: (
          <PrivateRoute>
            <UpdateProductDetails></UpdateProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
export default router;
