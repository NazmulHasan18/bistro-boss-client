import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
   const { googleLogin } = useContext(AuthContext);
   const navigate = useNavigate();
   const from = useLocation().state?.pathname || "/";

   const handelGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            console.log(result.user);
            const newUser = { name: result.user.displayName, email: result.user.email };
            console.log(newUser);
            fetch("http://localhost:3000/users", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(newUser),
            })
               .then((res) => res.json())
               .then(() => {
                  Swal.fire({
                     icon: "success",
                     title: "User Login Successful",
                     timer: 3000,
                     showConfirmButton: false,
                  });

                  navigate(from, { replace: true });
               });
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <div className="text-center space-y-4 my-6">
         <p>Or sign in with</p>
         <button className="btn btn-circle btn-outline text-xl me-5" onClick={handelGoogleLogin}>
            <FaGoogle></FaGoogle>
         </button>
         <button className="btn btn-circle btn-outline text-xl me-5">
            <FaGithub></FaGithub>
         </button>
         <button className="btn btn-circle btn-outline text-xl">
            <FaFacebookF></FaFacebookF>
         </button>
      </div>
   );
};

export default SocialLogin;
