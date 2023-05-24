import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const Menu = () => {
   const [menus, setMenus] = useState([]);
   useEffect(() => {
      fetch("menu.json")
         .then((res) => res.json())
         .then((data) => setMenus(data));
   }, []);
   return (
      <div className="max-w-screen-xl mx-auto my-20">
         <SectionTitle title={"From Our menu"} subTitle={"Check it out"}></SectionTitle>
         <div className="grid grid-cols-2 gap-5">
            {menus.slice(0, 6).map((menu) => (
               <MenuItem key={menu._id} menu={menu}></MenuItem>
            ))}
         </div>
         <div className="flex justify-center my-6">
            <button className="btn btn-outline border-0 border-b-4 border-slate-900 bg-transparent">
               View Full Menu
            </button>
         </div>
      </div>
   );
};

export default Menu;
