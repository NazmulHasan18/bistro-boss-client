import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop/OurShop";

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
      ],
   },
]);
