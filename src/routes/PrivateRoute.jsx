import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
   const { loading, user } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return <div>Loading...</div>;
   }
   if (!user) {
      return <Navigate to="/login" state={location} replace={true} />;
   }

   return children;
};

export default PrivateRoute;
