import logo from "../../../assets/mainlogo.png";
import cartlogo from "../../../assets/icon/cartlogo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {
   const { user, logOut } = useContext(AuthContext);

   const handelLogOut = () => {
      logOut()
         .then(() => {})
         .catch((error) => console.log(error));
   };

   const navOptions = (
      <>
         <li>
            <NavLink
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-400 font-semibold" : ""
               }
               to="/"
            >
               Home
            </NavLink>
         </li>
         <li>
            <NavLink
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-400 font-semibold" : ""
               }
               to="/contact"
            >
               Contact
            </NavLink>
         </li>
         <li>
            <NavLink
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-400 font-semibold" : ""
               }
               to="/dashboard"
            >
               Dashboard
            </NavLink>
         </li>
         <li>
            <NavLink
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-400 font-semibold" : ""
               }
               to="/menu"
            >
               Our Menu
            </NavLink>
         </li>
         <li>
            <NavLink
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-400 font-semibold" : ""
               }
               to="/shop/category"
            >
               Our Shop
            </NavLink>
         </li>
         {user ? (
            <>
               <li>
                  <NavLink
                     className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-yellow-400 font-semibold" : ""
                     }
                     to="/cart"
                  >
                     <img src={cartlogo} alt="" className="w-16" />
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold" : ""
                     }
                     onClick={handelLogOut}
                  >
                     Sign Out
                  </NavLink>
               </li>
            </>
         ) : (
            <>
               <li>
                  <NavLink
                     className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-yellow-400 font-semibold" : ""
                     }
                     to="/profile"
                  >
                     Profile
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-yellow-400 font-semibold" : ""
                     }
                     to="/login"
                  >
                     Login
                  </NavLink>
               </li>
            </>
         )}
      </>
   );

   return (
      <nav className="navbar bg-black bg-opacity-40 text-white h-24 md:fixed z-10">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </label>
               <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase"
               >
                  {navOptions}
               </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
               <img src={logo} alt="Bistro Boss" className="h-16" />
            </a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase">{navOptions}</ul>
         </div>
      </nav>
   );
};

export default NavBar;
