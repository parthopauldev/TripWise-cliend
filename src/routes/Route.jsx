import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllVehicles from './../pages/AllVehicles/AllVehicles';
import AddVehicle from "../pages/AddVehicle/AddVehicle";
import MyVehicles from "../pages/MyVehicles/MyVehicles";
import MyBookings from "../pages/MyBookings/MyBookings";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element:<Home></Home>
            },
            {
                path: '/allVehicles',
                element:<AllVehicles></AllVehicles>
            },
            {
                path: '/addVehicle',
                element: <PrivateRoute><AddVehicle></AddVehicle></PrivateRoute> 
            },
            {
                path: '/myVehicles',
                element:<PrivateRoute><MyVehicles></MyVehicles></PrivateRoute> 
            },
            {
                path: '/myBookings',
                element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute> 
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
        ]
        
    }
])
export default router