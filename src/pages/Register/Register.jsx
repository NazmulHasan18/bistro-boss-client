import { Link } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import registerImg from "../../assets/others/authentication1.png";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
   const { registerEmailPass, updateUser } = useContext(AuthContext);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const handelRegister = (data) => {
      console.log(data);
      registerEmailPass(data.email, data.password)
         .then((result) => {
            if (result.user) {
               updateUser(data.name)
                  .then(() => {
                     console.log(result.user);
                  })
                  .catch((error) => console.log(error));
            }
         })
         .catch((error) => console.log(error));
   };

   return (
      <div className="min-h-screen py-24" style={{ backgroundImage: `url(${bgImg})` }}>
         <div className="hero min-h-screen bg-transparent mx-auto shadow-2xl max-w-[1673px]">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
               <img src={registerImg} className="w-1/2 rounded-lg" />
               <div className="card w-1/2 bg-transparent mx-12">
                  <form onSubmit={handleSubmit(handelRegister)}>
                     <h2 className="text-5xl text-center">Register</h2>
                     <div className="card-body">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-xl font-semibold">
                                 Name <span className="text-red-400">*</span>
                              </span>{" "}
                           </label>
                           <input
                              type="text"
                              placeholder="name"
                              className="input input-bordered text-lg py-8"
                              {...register("name", { required: "Name is required" })}
                           />
                           {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-xl font-semibold">
                                 Email <span className="text-red-400">*</span>
                              </span>
                           </label>
                           <input
                              type="email"
                              placeholder="email"
                              className="input input-bordered text-lg py-8"
                              {...register("email", { required: "Password is required" })}
                           />{" "}
                           {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-xl font-semibold">
                                 Password <span className="text-red-400">*</span>
                              </span>
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

                        <div className="form-control mt-6">
                           <input
                              type="submit"
                              value="Register"
                              className={`btn bg-[#d1a054] text-lg py-5 h-full border-0 hover:bg-[#af8545]`}
                           />
                        </div>
                     </div>
                  </form>
                  <div>
                     <p className="text-[#d1a054] text-lg text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold hover:underline">
                           Go to login!{" "}
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
