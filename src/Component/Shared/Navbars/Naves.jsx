import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Naves.css"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { IoLogInSharp } from "react-icons/io5";


const Naves = () => {
    const [nav, setNav] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user observing");
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="w-full px-2 p-2  naves banner-text  justify-center sticky  top-0 bg-[#fff]    flex  shadow-lg   items-center  z-20 text-slate-950 font-semibold ">
                <Link
                    to={'/'}
                    className="hover:opacity-50  cursor-default "
                >
                    <img
                        className="imgse"
                        src="https://i.ibb.co/Y09bKbK/logo-4.png"
                        alt=""
                    />

                </Link>
                <React.Fragment>
                    <ul className="hidden   lg:pl-32 md:pl-4 sm:pl-2 sm:flex p-4">
                        <li className="pr-4 pt-2 relative group   text-black">
                            <Link to={'/about'}
                                className="hover:opacity-50 nav-link  cursor-pointer "
                            >AbouUs</Link>
                            <div className="absolute  top-0 -left-68 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px]  transform ">
                                <div className="relative top-6 bg-white rounded-sm w-full">
                                    <div className=" m-auto pb-4 ">
                                        <div
                                            style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "#a16207",
                                                height: "4px",
                                            }}
                                        />
                                    </div>
                                    <div className="w-10 mx-5 bg-white "></div>

                                    <div className="relative  mx-4">
                                        <div className="  ">
                                            <div>
                                                <ul className=" text-[15px] ">
                                                    <li>
                                                        <Link
                                                            to={'/reservation'}
                                                            className="block pb-3 text-gray-950 hover:text-[#a16207]"
                                                        >
                                                           Reservation
                                                        </Link>
                                                    </li>
                                                    <div className="w-full  m-auto pb-4 ">
                                                        <div
                                                            style={{
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                backgroundColor: "#d4d4d8",
                                                                height: "1px",
                                                            }}
                                                        />
                                                    </div>
                                                 

                                                    <li>
                                                        <Link

                                                            className="block pb-3 text-gray-950 hover:text-[#a16207]"
                                                            to={'/gallery'}
                                                        >
                                                           Gallery
                                                        </Link>
                                                       
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative  mx-4">
                                        <div className="  ">
                                            <div>
                                                <ul className=" text-[15px] ">
                                                    
                                                    <div className="w-full  m-auto pb-4 ">
                                                        <div
                                                            style={{
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                backgroundColor: "#d4d4d8",
                                                                height: "1px",
                                                            }}
                                                        />
                                                    </div>
                                                 

                                                    <li>
                                                        <Link

                                                            className="block pb-3 text-gray-950 hover:text-[#a16207]"
                                                            to={'/coming'}
                                                        >
                                                           Shop
                                                        </Link>
                                                       
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="pr-4 pt-2 relative group   text-black">
                            <Link className="hover:opacity-50 nav-link cursor-default" to={"/product"}>
                               Items
                            </Link>
                        </li>
                        <li className="pr-4 pt-2 relative group   text-black">
                            <Link className="hover:opacity-50 nav-link cursor-default" to={"/blog"}>
                              Blog
                            </Link>
                            <div className="absolute  top-0 -left-68 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px]  transform ">
                                <div className="relative top-6 bg-white rounded-sm w-full">
                                    <div className=" m-auto pb-4 ">
                                        <div
                                            style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "#a16207",
                                                height: "4px",
                                            }}
                                        />
                                    </div>
                                    <div className="w-10 mx-5 bg-white "></div>

                                    <div className="relative  mx-4">
                                        <div className="  ">
                                            <div>
                                                <ul className=" text-[15px] ">
                                                    <li>
                                                        <Link
                                                            to={'/article'}
                                                            className="block pb-3 text-gray-950 hover:text-[#a16207]"
                                                        >
                                                          Articels
                                                        </Link>
                                                    </li>
                                                    
                                                   
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative  mx-4">
                                        <div className="  ">
                                            <div>
                                                <ul className=" text-[15px] ">
                                                    
                                                    <div className="w-full  m-auto pb-4 ">
                                                        <div
                                                            style={{
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                backgroundColor: "#d4d4d8",
                                                                height: "1px",
                                                            }}
                                                        />
                                                    </div>
                                                 

                                                    <li>
                                                        <Link

                                                            className="block pb-3 text-gray-950 hover:text-[#a16207]"
                                                            to={'/coming'}
                                                        >
                                                         Activities Food
                                                        </Link>
                                                       
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="pr-4 pt-2 relative group   text-black">
                            <Link className="hover:opacity-50 nav-link cursor-default" to={"/contact"}>
                                Contact
                            </Link>
                        </li>
                        <li className="pr-4 pt-2 relative group   text-black">
                            <Link className="hover:opacity-50 nav-link cursor-default" to={"/dashboard"}>
                                Dashboard
                            </Link>
                        </li>
                        <li className=" pr-4 pt-2 relative group   text-black">
                            {!user?.email && (
                                <Link

                                    className=" text-black flex justify-between hover:opacity-50 "
                                    to={"/login"}
                                    onClick={handleLogOut}
                                >
                                    SignIn
                                    <IoLogInSharp className="mx-2 mt-1" size="20" />
                                </Link>
                            )}
                            {user?.email && (
                                <Link
                                    onClick={logOut}
                                    className="flex justify-between hover:opacity-50 "
                                    to={"/register"}

                                >
                                    SignOut
                                    <IoLogInSharp className="mx-2 mt-1" size="20" />
                                    <span>
                                        {user?.photoURL ? (
                                            <img
                                                className="  w-9 h-9 rounded-full  "
                                                src={user.photoURL}
                                                alt=""
                                            />
                                        ) : (
                                            <small className="text-light ">{user?.displayName}</small>
                                        )}
                                    </span>
                                </Link>
                            )}
                        </li>




                    </ul>
                </React.Fragment>
                <div className="sm:hidden z-10 px-4">
                    <label className="hamburger">
                        <input className="hidden" type="checkbox" />
                        <svg onClick={handleNav} viewBox="0 0 32 32">
                            <path
                                className="line line-top-bottom"
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            />
                            <path className="line" d="M7 16 27 16" />
                        </svg>
                    </label>
                </div>
                <div onClick={handleNav}
                    className={
                        nav
                            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute  text-gray-950 left-0 top-0 w-full h-screen bg-[#14532d]  px-4 py-7 flex flex-col"
                            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
                    }

                >

                    <ul className="h-full w-full text-center  pt-24">
                        <li className="text-2xl py-4 text-white justify-center items-center flex">
                            <Link
                                to={'/'}
                                className="hover:opacity-50  cursor-default "
                            >
                                <img
                                    className="imgse"
                                    src="https://i.ibb.co/vwtrYzc/footer-logo.png"
                                    alt=""
                                />

                            </Link>

                        </li>
                        <li className="text-2xl py-4 text-white">
                            <Link className="hover:opacity-50 nav-link cursor-default" to={"/about"}>
                                About US
                            </Link>

                        </li>
                        <li className="text-2xl py-4 text-white">
                            <Link className="hover:opacity-50 nav-link cursor-default" to={"/product"}>
                                Product
                            </Link>

                        </li>
                        <li className="text-2xl py-4 text-white">
                            <Link className="hover:opacity-50 nav-link cursor-default" to={"/contact"}>
                                Contact
                            </Link>

                        </li>
                        <li className="text-2xl py-4 text-white">
                            <Link className="hover:opacity-50 nav-link cursor-default" to={"/dashboard"}>
                                Dashboard
                            </Link>

                        </li>

                        <li className=" pr-4 pt-2 relative group justify-center items-center flex  text-white">
                            {!user?.email && (
                                <Link

                                    className=" text-white flex gap-4"
                                    to={"/login"}
                                    onClick={handleLogOut}
                                >
                                    SignIn
                                    <IoLogInSharp className="mx-2 mt-1" size="20" />
                                </Link>
                            )}
                            {user?.email && (
                                <Link
                                    onClick={logOut}
                                    className="flex justify-between hover:opacity-50 "
                                    to={"/register"}

                                >
                                    SignOut
                                    <IoLogInSharp className="mx-2 mt-1" size="20" />
                                    <span>
                                        {user?.photoURL ? (
                                            <img
                                                className="  w-9 h-9 rounded-full  "
                                                src={user.photoURL}
                                                alt=""
                                            />
                                        ) : (
                                            <small className="text-light ">{user?.displayName}</small>
                                        )}
                                    </span>
                                </Link>
                            )}
                        </li>


                    </ul>
                </div>
            </div>
        </>
    );
};

export default Naves;