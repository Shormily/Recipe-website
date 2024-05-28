import { Link } from "react-router-dom";
import "./About.css"
import Naves from "../../Navbars/Naves";
import Footer from "../../Footer";

const About = () => {
    return (
        <div className="">
            <Naves />
            <div className="bg-gray-200">
                {/* <div className="">
            <h1>About US</h1>
            <Link to={"/"} >Home</Link>
        </div> */}

                <div className="grid lg:grid-cols-2 gap-24 py-24 max-w-[1200px] m-auto">


                    <div className=" py-8 items-center justify-center m-auto">
                        <p>  Welcome to</p>
                        <p className="text-3xl font-semibold "> Shangrila Restaurant</p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <div className="">
                        <img
                            src="https://i.ibb.co/FW4BgBx/welcome-1.jpg"
                            alt="Image not found"
                            //  width={200}
                            // height={200}
                            className="ml-32 p-1 bg-white"
                        />
                        <img
                            src="https://i.ibb.co/ZTxnyf9/wel.jpg"
                            alt="Image not found"
                            //  width={200}
                            // height={200}
                            className="mt-[-50px] p-1 bg-white shadow-lg rounded-sm"
                        />

                    </div>
                </div>
            </div>
            <div className="story-sections ">
                <div className="grid lg:grid-cols-2">
                    <p className="text-center justify-center m-auto items-center text-5xl text-white font-bold">ENJOY TOGETHER</p>

                    <div className=" max-w-[1440px] m-auto flex justify-end items-end ">
                        <p className="bg-[#7d531ffd] p-1 ">
                            <p className="w-96 text-white border p-8 text-[15px]">
                                <p className="text-2xl font-semibold py-2">THE PLACE</p>
                                Unique experience for the Holidays at Monde. Proina nibhel velit auctor aliquet. Aenean sollicit udine oremual biben dum auctor, nisi elit consequat ipsum, nec sagittis am sem nibhad elit. Duis sed odio sit amet nibvupususa amet uris. Morbi accumsan ipsum vitamec tellus bodio tincwa idunt auctor a ornare odio.</p></p>

                    </div>
                </div>

            </div>
            <Footer />
        </div>

    );
};

export default About;