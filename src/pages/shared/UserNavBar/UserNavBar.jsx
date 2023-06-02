import { FaCalendarAlt, FaCalendarPlus, FaCartPlus, FaHome, FaShoppingBag, FaWallet } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";

const UserNavBar = () => {
   return (
      <div>
         <div>
            <h2 className="text-3xl font-bold">BISTRO BOSS</h2>
            <p className="text-2xl font-cinzel font-semibold ">RESTAURANT</p>
         </div>
         <div className="font-cinzel my-16 text-xl space-y-4">
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
               to="/dashboard"
            >
               <FaHome></FaHome>
               <span>User Home</span>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
            >
               <FaCalendarAlt></FaCalendarAlt>
               <span>Reservation</span>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
            >
               <FaWallet></FaWallet>
               <span>Payment History</span>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
               to="/dashboard/cart"
            >
               <FaCartPlus></FaCartPlus>
               <span>My Cart</span>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
            >
               <MdOutlineReviews></MdOutlineReviews>
               <span>Add Review</span>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
            >
               <FaCalendarPlus></FaCalendarPlus>
               <span>My Booking</span>
            </NavLink>
         </div>
         <div className="divider"></div>

         <div className="font-cinzel my-16 text-xl space-y-4">
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
               to="/"
            >
               <FaHome></FaHome>
               <span>Home</span>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
               to="/menu"
            >
               <GoThreeBars></GoThreeBars>
               <span>Menu</span>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
               to="/shop/category"
            >
               <FaShoppingBag></FaShoppingBag>
               <span>Shop</span>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                     : " flex gap-2 items-center hover:text-slate-500 font-bold"
               }
               to="/contact"
            >
               <MdEmail></MdEmail>
               <span>Contact</span>
            </NavLink>
         </div>
      </div>
   );
};

export default UserNavBar;
