import { TypeAnimation } from "react-type-animation";
import "./Banner.css"
import HomeCard from "../HomeCard/HomeCard";
import Recipe from "../Recipes/Recipes";

import Naves from "../../Navbars/Naves";
import Footer from "../../Footer";
import Items from "../Recipes/Items";


const Banner = () => {


  return (
    <>
      <Naves />
      <div className=" justify-center items-center m-auto ">
        <div className="video ">
          <div className="w-full h-[550px] overflow-y-hidden ">
            <video
              src="https://expert-themes.com/html/shangrila/videos/video-banner.mp4"
              autoPlay
              width="100%"
              loop
              muted
              className="video-container pb-4 mt-5 md:mt-[-200px]"
            ></video>


          </div>
          <div className="  pt-8 lg:mt-[-400px] md:mt-[-550px]  sm:mt-[-750px] mt-[-550px]  cont-pra text-white text-center texteras ">
            <p >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Shangrila Cafe & Resturent & Fast Food',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  `We produce food for Hamsters`,
                  1000,
                  'Good Food For Life',
                  1000,

                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
                className="md:text-6xl text-2xl text-white "
              />
            </p>
            <h1 className="justify-center hidden lg:block items-center m-auto pt-5 ">shangrila Cafe & Restaurant, & Awesome Coffee,  Italian Pizza With Cherry
              <br /> Tomatoes and Green Basil, With special breakfast  dinner<br /> and lunch awesome Offers.</h1>
            <div className="cursor-pointer"><button className="bg-[#14532d] px-8  cursor-pointer  py-4 my-10 text-sm font-bold text-[#fff] hover:bg-[#000] hover:text-[#fff]">
              MORE ABOUT US
            </button></div>

          </div>
        </div>
        <div className="boy-sections">
          <Recipe />
          <Items />
        </div>
       
        <div className=" ">


          <div className="home-sections">
            <div className=" ">
              <p className="text-center mt-12 justify-center m-auto items-center text-5xl text-white font-bold">ENJOY THE BEST</p>

              <p className="text-center text-white text-[20px] pt-5">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat<br />
                ipsum nec sagittis sem nibhad elit duis sed odio sit amet nibh sulp.</p>
              <div className="justify-center items-center m-auto flex mt-8">
                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-900  group bg-gradient-to-br from-green-800 to-green-700 group-hover:from-teal-300 group-hover:to-lime-900 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span className="relative px-5 py-2.5 text-white transition-all ease-in duration-75  dark:bg-gray-900  group-hover:bg-opacity-0">
                    MORE ABOUT US
                  </span>
                </button></div>

            </div>

          </div>

        </div>
        
        <div className="boy-sections "> <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1400px] m-auto ">
         
          <div className=" ">
            <img className="py-3 " src="https://i.ibb.co/NL9cNw9/master-chef.png" alt="" /></div>
          <div className="justify-center items-center m-auto text-base px-4">
            <h1 className="text-5xl font-medium">Alexender Coach</h1>
            <p className="text-[20px] py-2 text-orange-300">Master of Cooking</p>
            <p className="text-base">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
            <div className="grid lg:grid-cols-2 lg:gap-60 sm:gap-5 justify-between  text-white  m-auto mt-5">
              <p className="">
                {/* <PiInstagramLogoDuotone size={2} className="icn" /> */}
                <i className="fa-brands fa-facebook  shadow home-icn outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
                <i className="fa-brands fa-instagram home-icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>
                <i className="fa-brands fa-linkedin home-icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
              </p>
              <p className=" text-[18px] mt-2">
                2024 All rights reserved. &copy;2024 ArriMart
              </p>
            </div>
          </div>
        </div>
          
       
        </div>

        <HomeCard />
      </div>
      <Footer />
    </>

  );
};

export default Banner;