import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import bgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication1.png";
import { useEffect, useState } from "react";

const Login = () => {
   const [disable, setDisable] = useState(true);
   useEffect(() => {
      loadCaptchaEnginge(6, "white", "black", "lower");
   }, []);

   const captchaSubmit = (e) => {
      e.preventDefault();
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

   return (
      <div className="min-h-screen py-24" style={{ backgroundImage: `url(${bgImg})` }}>
         <div className="hero min-h-screen bg-transparent mx-auto shadow-2xl max-w-[1673px]">
            <div className="hero-content w-full flex-col lg:flex-row">
               <img src={loginImg} className="w-1/2 rounded-lg" />
               <div className="card w-1/2 bg-transparent mx-12">
                  <form>
                     <h2 className="text-5xl text-center">Login</h2>
                     <div className="card-body">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-xl font-semibold">Email</span>
                           </label>
                           <input
                              type="text"
                              placeholder="email"
                              className="input input-bordered text-lg py-8"
                           />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-xl font-semibold">Password</span>
                           </label>
                           <input
                              type="text"
                              placeholder="password"
                              className="input input-bordered text-lg py-8"
                           />
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
                              value="Submit"
                              className={`btn ${
                                 disable && "btn-disabled"
                              } bg-[#d1a054] text-lg py-5 h-full border-0 hover:bg-[#af8545]`}
                           />
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
