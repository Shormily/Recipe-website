import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase.config";
import GoogleLogIn from "../Auth/GoogleLogIn";
import Swal from "sweetalert2";
import Naves from "../Navbars/Naves";
import Footer from "../Footer";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let from = location.state?.from?.pathname || "/dashboard/profile";

  // Create Password and email auth
  const [
    createUserWithEmailAndPassword,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }
   

  
  return (
    <>
      <Naves />
      <div className="py-5 pb-5">
        <div className=" py-5">
          <h1 className="text-center font-bold text-3xl py-4">Register Now</h1>
          <div className="flex justify-center">

            <div className="card shrink-0 w-full max-w-md shadow-2xl py-3 pt-3 bg-base-100 px-4">
              <form className="card-body" >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="justify-center items-center flex mt-6 mb-2">
                  <button onClick={() => createUserWithEmailAndPassword(email, password)} className="  py-3 bg-[#14532d] text-white w-full rounded-lg ">Register Now</button>
                </div>

                <p className="text-center ">
                  Don&apos;t have any account ?{" "}
                  <Link to={"/login"} className="text-orange-500 ">
                    Login
                  </Link>
                </p>
              </form>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

































