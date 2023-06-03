import {
   FaBook,
   FaCalendarAlt,
   FaCalendarPlus,
   FaCartPlus,
   FaHome,
   FaShoppingBag,
   FaUbuntu,
   FaUsers,
   FaWallet,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";

const DashboardNavbar = () => {
   // TODO: Make isUser Dynamic form api route
   const isAdmin = true;
   return (
      <div>
         <div>
            <h2 className="text-3xl font-bold">BISTRO BOSS</h2>
            <p className="text-2xl font-cinzel font-semibold ">RESTAURANT</p>
         </div>
         <div className="font-cinzel my-16 text-xl space-y-4">
            {isAdmin ? (
               <>
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                           : " flex gap-2 items-center hover:text-slate-500 font-bold"
                     }
                     to="/dashboard/admin_home"
                  >
                     <FaHome></FaHome>
                     <span>Admin Home</span>
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                           : " flex gap-2 items-center hover:text-slate-500 font-bold"
                     }
                     to="/dashboard/add"
                  >
                     <FaUbuntu></FaUbuntu>
                     <span>Add Items</span>
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                           : " flex gap-2 items-center hover:text-slate-500 font-bold"
                     }
                     to="/dashboard/update"
                  >
                     <FaWallet></FaWallet>
                     <span>Manage Items</span>
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                           : " flex gap-2 items-center hover:text-slate-500 font-bold"
                     }
                     to="/dashboard/bookings"
                  >
                     <FaBook></FaBook>
                     <span>Manage Bookings</span>
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                           : " flex gap-2 items-center hover:text-slate-500 font-bold"
                     }
                     to="/dashboard/all_users"
                  >
                     <FaUsers></FaUsers>
                     <span>All Users</span>
                  </NavLink>
               </>
            ) : (
               <>
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "text-white flex gap-2 items-center hover:text-slate-500 font-bold"
                           : " flex gap-2 items-center hover:text-slate-500 font-bold"
                     }
                     to="/dashboard/home"
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
                     to="/dashboard/reservations"
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
                     to="/dashboard/payment_history"
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
                     to="/dashboard/reviews"
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
                     to="/dashboard/bookings"
                  >
                     <FaCalendarPlus></FaCalendarPlus>
                     <span>My Booking</span>
                  </NavLink>
               </>
            )}
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

export default DashboardNavbar;
