import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from '../../../firebase/firebase.config';

const GoogleLogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <>
           <div>
      <button
        onClick={() => signInWithGoogle()}
        className=" px-5 py-3 bg-[#7d531ffd] text-white w-full rounded-lg"
      >
        Google Login
      </button>
    </div> 
        </>
    );
};

export default GoogleLogIn;