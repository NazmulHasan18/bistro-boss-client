import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const Menu = () => {
   const [menus, setMenus] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:3000/menu/popular`)
         .then((res) => res.json())
         .then((data) => {
            setMenus(data);
         });
   }, []);
   return (
      <div className="my-20">
         <SectionTitle title={"From Our menu"} subTitle={"Check it out"}></SectionTitle>
         <div className="grid grid-cols-2 gap-5">
            {menus.map((menu) => (
               <MenuItem key={menu._id} menu={menu}></MenuItem>
            ))}
         </div>
         <div className="flex justify-center my-6">
            <Link to="/menu">
               <button className="btn btn-outline border-0 border-b-4 border-slate-900 bg-transparent">
                  View Full Menu
               </button>
            </Link>
         </div>
      </div>
   );
};

export default Menu;
