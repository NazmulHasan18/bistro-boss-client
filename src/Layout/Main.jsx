import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/shared/Footer/Footer";
import { useEffect, useState } from "react";

const Main = () => {
   const location = useLocation().pathname;

   const [login, setLogin] = useState(false);

   useEffect(() => {
      if (location.includes("/login") || location.includes("/register")) {
         setLogin(true);
      } else {
         setLogin(false);
      }
   }, [location]);

   return (
      <div className="max-w-[1920px] mx-auto">
         {login || <NavBar></NavBar>}
         <Outlet></Outlet>
         {login || <Footer></Footer>}
      </div>
   );
};

export default Main;
