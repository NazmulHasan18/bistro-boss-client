import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCarts = () => {
   const { user } = useContext(AuthContext);
   const {
      data: carts = [],
      refetch,
      isLoading,
   } = useQuery({
      queryKey: ["carts", user?.email],
      queryFn: async () => {
         const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`);

         return res.json();
      },
   });

   return [carts, isLoading, refetch];
};

export default useCarts;
