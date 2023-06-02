import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCarts from "../../../hooks/useCarts";

const CustomCard = ({ item }) => {
   const { name, image, recipe, category, price, _id } = item;
   const { user } = useContext(AuthContext);
   const [, , refetch] = useCarts();
   const navigate = useNavigate();
   const location = useLocation() || "/";

   const handelAddToCart = () => {
      const product = {
         foodId: _id,
         name,
         image,
         recipe,
         category,
         price,
         userEmail: user?.email,
      };

      if (user) {
         fetch("http://localhost:3000/carts", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.insertedId) {
                  refetch();
                  Swal.fire({
                     icon: "success",
                     title: "Food Added To Cart Successfully",
                     timer: 3000,
                     showConfirmButton: false,
                  });
               }
            });
      } else {
         navigate("/login", { state: location });
      }
   };

   return (
      <div className="card card-compact w-[22rem] rounded-none bg-slate-100">
         <figure>
            <img src={image} alt="Shoes" />
         </figure>
         <div className="card-body items-center text-center w-5/6 mx-auto">
            <p className="card-title text-2xl">{name}</p>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <button className="cardButton" onClick={handelAddToCart}>
                  Add To Cart
               </button>
            </div>
         </div>
      </div>
   );
};

export default CustomCard;
