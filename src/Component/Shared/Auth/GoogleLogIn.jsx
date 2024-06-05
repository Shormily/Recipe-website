import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from '../../../firebase/firebase.config';
import { useNavigate } from "react-router-dom";

const GoogleLogIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/dashboard/profile";
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((data) => {
      console.log(data)
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("https://server-0bf5.onrender.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            localStorage.setItem("token", data?.token);
          });
      }

      navigate(from, { replace: true });

    });
  };


  return (
    <>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className=" px-5 py-3 bg-[#14532d] text-white w-full rounded-lg"
        >
          Google Login
        </button>
      </div>
    </>
  );
};

export default GoogleLogIn;