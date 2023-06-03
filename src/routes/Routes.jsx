import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UserLayout from "../Layout/UserLayout";
import UserHome from "../pages/userHome/UserHome/UserHome";
import MyCart from "../pages/userHome/MyCart/MyCart";
import AdminHome from "../pages/dashboard/AdminHome/AdminHome";
import AllUsers from "../pages/dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/menu",
            element: <OurMenu></OurMenu>,
         },
         {
            path: "/shop/:category",
            element: <OurShop></OurShop>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
      ],
   },
   {
      path: "/dashboard",
      element: (
         <PrivateRoute>
            <UserLayout></UserLayout>
         </PrivateRoute>
      ),
      children: [
         {
            path: "admin_home",
            element: <AdminHome></AdminHome>,
         },
         {
            path: "all_users",
            element: <AllUsers></AllUsers>,
         },
         {
            path: "home",
            element: <UserHome></UserHome>,
         },
         {
            path: "cart",
            element: <MyCart></MyCart>,
         },
      ],
   },
]);
