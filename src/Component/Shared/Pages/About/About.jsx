import { Link } from "react-router-dom";
import "./About.css"
import Naves from "../../Navbars/Naves";
import Footer from "../../Footer";
import { TypeAnimation } from "react-type-animation";
import Gallery from "../Gallery/Galery";


const About = () => {
    return (
        <div className="">
            <Naves />
            <div className="home-sections">
                <div className=" ">
                    <p className="text-center mt-12 justify-center m-auto items-center text-5xl text-white font-bold">About US</p>

                    <p className="text-center text-white text-[20px] pt-5">Our restaurant was established in 1990.  It has been in operation   years. <br /> We have beenproviding food service to everyone. We keep  <br />a variety of food in our Beef US restaurant. </p>
                    <div className="justify-center items-center m-auto flex mt-8">
                    </div>

                </div>

            </div>

            <Gallery />
            {/* <div className="story-sections ">
                <div className="
                ">
                    <p className="text-center mt-24 justify-center m-auto items-center text-5xl text-white font-bold">ENJOY TOGETHER</p>

                    <div className=" max-w-[1440px] m-auto flex justify-end items-end ">
                        <p className="bg-[#14532d] p-1 ">
                            <p className="w-96 text-white border p-8 text-[15px]">
                                <p className="text-2xl font-semibold py-2">THE PLACE</p>
                                Unique experience for the Holidays at Monde. Proina nibhel velit auctor aliquet. Aenean sollicit udine oremual biben dum auctor, nisi elit consequat ipsum, nec sagittis am sem nibhad elit. Duis sed odio sit amet nibvupususa amet uris. Morbi accumsan ipsum vitamec tellus bodio tincwa idunt auctor a ornare odio.</p></p>

                    </div>
                </div>

            </div> */}
            <div className=" justify-center items-center flex bg-[#f59f0b4d]">


                <div className="grid lg:grid-cols-2 gap-24 py-12  max-w-[1500px] m-auto ">


                    <div className=" my-12 items-center justify-center m-auto">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Welcome to',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                `Shangrila Restaurant`,
                                1000


                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                            className="text-4xl font-semibold py-4 text-[#14532d] "
                        />

                        <p className="text-base" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 py-2">
                        <img
                            src="https://i.ibb.co/FW4BgBx/welcome-1.jpg"
                            alt="Image not found"
                            //  width={200}
                            // height={200}
                            className="w-74 h-48 ml-1 md:ml-32 p-1 bg-white"
                        />
                        <img
                            src="https://i.ibb.co/ZTxnyf9/wel.jpg"
                            alt="Image not found"
                            //  width={200}
                            // height={200}
                            className="mt-1 w-74 h-48 md:mt-[-50px] p-1 bg-white shadow-lg rounded-sm"
                        />

                    </div>
                </div>
            </div>

            <div className="about-sections">

                <div className="justify-center items-center flex max-w-[1500px] m-auto py-8 text-white">
                    <div className="grid lg:grid-cols-2 text-center md:grid-cols-1 sm:grid-cols-1 gap-24 mt-8 mb-4">
                        <div className="text-justify pt-8 ">
                            <p className="font-bold text-2xl">Let’s talk about some work Team.</p>
                            <p>Lorem ipsum dolor sit amet edit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                        </div>
                        <div className="cursor-pointer"><button className="bg-[#14532d] px-8  cursor-pointer  py-4 my-10 text-sm font-bold text-[#fff] hover:bg-[#000] hover:text-[#fff]">
                            MORE ABOUT US
                        </button></div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    );
};

export default About;