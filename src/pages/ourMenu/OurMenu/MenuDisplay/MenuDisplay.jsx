import { Link } from "react-router-dom";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const MenuItems = ({ items }) => {
   return (
      <div className="my-24">
         <div className="grid md:grid-cols-2 max-w-[1320px] mx-auto gap-6">
            {items.map((item) => (
               <MenuItem key={item._id} menu={item}></MenuItem>
            ))}
         </div>
         <div className="flex justify-center my-6">
            <Link to={`/shop/${items[0]?.category}`}>
               <button className="btn btn-outline border-0 border-b-4 border-slate-900 bg-transparent">
                  ORDER YOUR FAVOURITE FOOD
               </button>
            </Link>
         </div>
      </div>
   );
};

export default MenuItems;
