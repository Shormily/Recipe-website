import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase.config";
import GoogleLogIn from "../Auth/GoogleLogIn";
import Swal from "sweetalert2";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
          
        
    if (user) {
        // setUser(user);
        navigate(from, { replace: true });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully SignIn",
            showConfirmButton: false,
            timer: 3000,
          });
       
      
  }
}, [user, loading, navigate, from]);
  return (
    <div className="py-5 pb-5">
      <div className=" py-5">
      <h1 className="text-center font-bold text-3xl py-4">Register Now</h1>
        <div className="flex justify-center">
         
          <div className="card shrink-0 w-full max-w-md shadow-2xl py-3 pt-3 bg-base-100 px-4">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="justify-center items-center flex mt-6 mb-2">
                <button className="  py-3 bg-[#7d531ffd] text-white w-full rounded-lg ">Register Now</button>
              </div>

              <p className="text-center ">
                Don&apos;t have any account ?{" "}
                <Link to={"/login"} className="text-orange-500 ">
                  Login
                </Link>
              </p>
            </form>
            <div className=" justify-center items-center flex mt-2">
              <div className=" gap-2  mb-7 w-full">
                <GoogleLogIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

































