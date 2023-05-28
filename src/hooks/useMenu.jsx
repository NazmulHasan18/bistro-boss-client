import { useEffect, useState } from "react";

const useMenu = (category) => {
   const [menus, setMenus] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:3000/menu/${category}`)
         .then((res) => res.json())
         .then((data) => setMenus(data));
   }, [category]);

   return menus;
};
export default useMenu;
