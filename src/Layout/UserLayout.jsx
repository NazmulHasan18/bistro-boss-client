import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";

import { Outlet } from "react-router-dom";
import DashboardNavbar from "../pages/shared/DashboardNavbar/DashboardNavbar";

const UserLayout = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDrawer = () => {
      setIsOpen(!isOpen);
   };
   return (
      <div className="lg:grid grid-cols-4 max-w-[1520px] mx-auto relative">
         <div className="bg-[#D1A054] hidden lg:block p-8">
            <DashboardNavbar></DashboardNavbar>
         </div>
         <div className="col-span-3 px-6 bg-slate-100 min-h-screen relative">
            <button className="btn btn-ghost absolute top-6 left-6 text-xl lg:hidden" onClick={toggleDrawer}>
               <GoThreeBars></GoThreeBars>
            </button>
            <Outlet></Outlet>
         </div>
         <div>
            {/* Toggle button for small screens */}

            {/* Drawer for large screens */}
            <div
               className={`fixed inset-y-0 left-0 w-64 z-20 bg-[#D1A054] p-4 transform transition-transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
               } lg:hidden`}
            >
               <button className="btn btn-circle btn-xs" onClick={() => setIsOpen(false)}>
                  <FaTimes></FaTimes>
               </button>
               <DashboardNavbar></DashboardNavbar>
            </div>
         </div>
      </div>
   );
};

export default UserLayout;
