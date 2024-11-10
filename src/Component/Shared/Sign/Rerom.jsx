import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase.config';
import { useState } from 'react';
import Naves from '../Navbars/Naves';
import Footer from '../Footer';
import LoadingSpinner from '../../../Layout/LoadingSpinner';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogIn from '../Auth/GoogleLogIn';
const Rerom = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passMatch, setPassMatch] = useState(true);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/dashboard/profile";

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setPassMatch(false);
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(email, password);
            if (userCredential?.user) {
                await updateProfile({ displayName: name });
                const userInfo = {
                    email: userCredential.user.email,
                    name: name,
                };
                const response = await fetch("https://server-0bf5.onrender.com/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userInfo),
                })
                const data = await response.json();
                console.log(data);
                navigate(from, { replace: true });
            }
        } catch (e) {
            console.error("Error during registration:", e);
        }
    };

    if (error || updateError) {
        return (
            <div>
                <p>Error: {error ? error.message : updateError.message}</p>
            </div>
        );
    }

    if (loading || updating) {
        return <LoadingSpinner />;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <>
            <Naves />
            <div className="max-w-[500px] m-auto py-5 px-2">
                <h1 className="text-center font-bold text-3xl py-4">Register Now</h1>
                <div className="py-2">
                    <label className="label">
                        <span className="label-text p-2 ">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered mt-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
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
                <div>
                    <label className="label">
                        <span className="label-text p-2 pb-2">Confirm-Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        className="input input-bordered mt-1"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                {!passMatch && (
                    <div className="my-2">
                        <p className="text-red-500">Passwords do not match!</p>
                    </div>
                )}

                <button
                    className="py-3 bg-[#14532d] text-white w-full rounded-lg mt-4"
                    onClick={handleRegister}
                >
                    Register
                </button>
                <p className="text-center mt-3">
                    Don&apos;t have any account?{" "}
                    <Link to={"/login"} className="text-orange-500">
                        Login
                    </Link>
                </p>
                <div className=" justify-center items-center flex mt-2">
                    <div className=" gap-2  mb-7 w-full">
                        <GoogleLogIn />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Rerom;
