import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import bgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication1.png";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Login = () => {
   const [disable, setDisable] = useState(true);
   const { loginEmailPass, user } = useContext(AuthContext);
   const navigate = useNavigate();
   const from = useLocation().state?.pathname || "/";

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   useEffect(() => {
      loadCaptchaEnginge(6, "white", "black", "lower");
   }, [user]);

   const captchaSubmit = (e) => {
      let user_captcha = e.target.value;
      if (user_captcha.length === 6) {
         if (validateCaptcha(user_captcha) === true) {
            setDisable(false);
            loadCaptchaEnginge(6);
         } else {
            alert("Captcha Does Not Match");
         }
      } else {
         setDisable(true);
      }
   };

   const handelLogin = (data) => {
      if (disable) {
         return Swal.fire({
            icon: "error",
            title: "Please Validate Captcha First",
            timer: 3000,
            showConfirmButton: false,
         });
      }
      loginEmailPass(data.email, data.password)
         .then(() => {
            Swal.fire({
               icon: "success",
               title: "User Login Successful",
               timer: 3000,
               showConfirmButton: false,
            }).then(() => {
               navigate(from);
            });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div className="min-h-screen py-24" style={{ backgroundImage: `url(${bgImg})` }}>
         <Helmet>
            <title>Bistro Boss | Login</title>
         </Helmet>
         <div className="hero min-h-screen bg-transparent mx-auto shadow-2xl max-w-[1673px]">
            <div className="hero-content w-full flex-col lg:flex-row">
               <img src={loginImg} className="w-1/2 rounded-lg" />
               <div className="card w-1/2 bg-transparent mx-12">
                  <form onSubmit={handleSubmit(handelLogin)}>
                     <h2 className="text-5xl text-center">Login</h2>
                     <div className="card-body">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-xl font-semibold">Email</span>
                           </label>
                           <input
                              type="email"
                              placeholder="email"
                              className="input input-bordered text-lg py-8"
                              {...register("email")}
                           />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-xl font-semibold">Password</span>
                           </label>
                           <input
                              type="password"
                              placeholder="password"
                              className="input input-bordered text-lg py-8"
                              {...register("password", {
                                 required: "Password is required",
                                 pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:
                                       "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.",
                                 },
                              })}
                           />
                           {errors.password && (
                              <span className="text-red-600">{errors.password.message}</span>
                           )}
                        </div>
                        <div className="captcha mt-6">
                           <LoadCanvasTemplate reloadColor="red" />
                        </div>
                        <div className="form-control">
                           <input
                              type="text"
                              placeholder="Type Captcha"
                              className="input input-bordered text-lg py-8"
                              onChange={captchaSubmit}
                           />
                           <label className="label">
                              <a href="#" className="label-text-alt text-base link link-hover">
                                 Forgot password?
                              </a>
                           </label>
                        </div>
                        <div className="form-control mt-6">
                           <input
                              type="submit"
                              value="Login"
                              className={`btn ${
                                 disable && "btn-disabled"
                              } bg-[#d1a054] text-lg py-5 h-full border-0 hover:bg-[#af8545]`}
                           />
                        </div>
                     </div>
                  </form>
                  <div>
                     <p className="text-[#d1a054] text-lg text-center">
                        New Here?{" "}
                        <Link to="/register" className="font-semibold hover:underline">
                           Create a new account!{" "}
                        </Link>
                     </p>
                  </div>
                  <SocialLogin></SocialLogin>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
