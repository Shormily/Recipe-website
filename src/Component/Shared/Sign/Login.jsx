// import {
//   useAuthState,
//   useCreateUserWithEmailAndPassword,
// } from "react-firebase-hooks/auth";
// import { Link, useNavigate } from "react-router-dom";
// import "./Register.css"
// import { useEffect } from "react";
// import GoogleLogIn from "../Auth/GoogleLogIn";
// import { auth } from "../../../firebase/firebase.config";
// import Swal from "sweetalert2";
// import Naves from "../Navbars/Naves";
// import Footer from "../Footer";


// export default function Login() {
//   const [loading, setLoading] = useAuthState(auth);
//   const [user, setUser] = useAuthState(auth);
//   const navigate = useNavigate();
//   const [createUserWithEmailAndPassword] =
//     useCreateUserWithEmailAndPassword(auth);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     createUserWithEmailAndPassword(email, password);
//   };

//   let from = location.state?.from?.pathname || "/dashboard";

//   useEffect(() => {
//     if (user) {
//       // setUser(user);
//       navigate(from, { replace: true });
//       Swal.fire({
//         position: "top-center",
//         icon: "success",
//         title: "Successfully SignIn",
//         showConfirmButton: false,
//         timer: 3000,
//       });
//     }
//   }, [user, loading, navigate, from]);
//   return (
//     <>
//       <Naves />
//       <div className="py-5 pb-5">
//         <div className=" py-5">
//           <h1 className="text-center font-bold text-3xl py-4">LogIn Now</h1>
//           <div className="flex justify-center">

//             <div className="card shrink-0 w-full max-w-md shadow-2xl py-3 pt-3 bg-base-100 px-4">
//               <form className="card-body" onSubmit={handleSubmit}>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text ">Email</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="email"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Password</span>
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="password"
//                     className="input input-bordered"
//                     required
//                   />
//                   <label className="label">
//                     <a href="#" className="label-text-alt link link-hover">
//                       Forgot password?
//                     </a>
//                   </label>
//                 </div>
//                 <div className="justify-center items-center flex mt-6 mb-2">
//                   <button className="  py-3 bg-[#14532d] text-white w-full rounded-lg ">Login</button>
//                 </div>

//                 <p className="text-center">
//                   Don&apos;t have any account ?{" "}
//                   <Link to={"/rerom"} className="text-orange-500 ">
//                     register
//                   </Link>
//                 </p>
//               </form>
//               <div className=" justify-center items-center flex mt-2">
//                 <div className=" gap-2  mb-7 w-full">
//                   <GoogleLogIn />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>

//   );
// }


import { useState } from "react";
import { auth } from "../../../firebase/firebase.config";
import "./Register.css"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import GoogleLogIn from "../Auth/GoogleLogIn";
import Naves from "../Navbars/Naves";
import Footer from "../Footer";
import LoadingSpinner from "../../../Layout/LoadingSpinner";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/dashboard/profile";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <LoadingSpinner/>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <>
    <Naves/>
      <div className="max-w-[500px]  m-auto py-5 px-2">
                <h1 className="text-center font-bold text-3xl py-4">Log In</h1>
              
                <div >
                    <label className="label">
                        <span className="label-text p-2 pb-2">Email</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        className="input input-bordered py-4 mt-2"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="py-2">
                    <label className="label">
                        <span className="label-text p-2 pb-2">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        className="input input-bordered mt-1"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
              
               
               
                <button
                    className="py-3 bg-[#14532d] text-white w-full rounded-lg mt-4"
                    onClick={() => signInWithEmailAndPassword(email, password)}
                >
                   Log In
                </button>
                <p className="text-center">
                  Don&apos;t have any account ?{" "}
                  <Link to={"/rerom"} className="text-orange-500 ">
                    register
                  </Link>
                </p>
                <div className=" justify-center items-center flex mt-2">
                <div className=" gap-2  mb-7 w-full">
                  <GoogleLogIn />
                </div>
              </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
