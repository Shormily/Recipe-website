import { TypeAnimation } from "react-type-animation";
import "./Banner.css"
import HomeCard from "../HomeCard/HomeCard";
import Recipe from "../Recipes/Recipes";
import { FaSearchPlus } from "react-icons/fa";
import Naves from "../../Navbars/Naves";
import Footer from "../../Footer";


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
          <div className=" p-5 mt-[-400px]  cont-pra text-white text-center texteras ">
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
                className="text-6xl text-white "
              />
            </p>
            <h1 className=" justify-center items-center m-auto pt-5 ">shangrila Cafe & Restaurant, & Awesome Coffee,  Italian Pizza With Cherry<br /> Tomatoes and Green Basil, With special breakfast  dinner<br /> and lunch awesome Offers.</h1>
            <div className="cursor-pointer"><button className="bg-[#14532d] px-8  cursor-pointer  py-4 my-10 text-sm font-bold text-[#fff] hover:bg-[#000] hover:text-[#fff]">
              MORE ABOUT US
            </button></div>

          </div>
        </div>
        <Recipe />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-0 justify-center items-center m-auto ">
          <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
            <div className="h-full">
              <img
                className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                src="https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Assorted-Korean-Mochi-Cakes.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                <FaSearchPlus />
              </h1>
            </div>
          </div>
          <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
            <div className="h-full">
              <img
                className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                src="https://i0.wp.com/ulzza.com/wp-content/uploads/2018/10/2013072917110983854_3_59_20130730072402.jpg?fit=520%2C329&ssl=1"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                <FaSearchPlus />
              </h1>
            </div>
          </div>
          <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
            <div className="h-full">
              <img
                className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                src="https://www.kworldnow.com/wp-content/uploads/2021/08/Korean-desserts-2-1024x576.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                <FaSearchPlus />
              </h1>
            </div>
          </div>
          <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
            <div className="h-full">
              <img
                className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                src="https://nomadparadise.com/wp-content/uploads/2021/08/279_10-1024x683.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                <FaSearchPlus />
              </h1>
            </div>
          </div>
          <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
            <div className="h-full">
              <img
                className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                src="https://nomadparadise.com/wp-content/uploads/2021/08/279_10-1024x683.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                <FaSearchPlus />
              </h1>
            </div>
          </div>
          <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
            <div className="h-full">
              <img
                className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                src="https://www.kworldnow.com/wp-content/uploads/2021/08/Korean-desserts-2-1024x576.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                <FaSearchPlus />
              </h1>
            </div>
          </div>
          <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
            <div className="h-full">
              <img
                className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                src="https://i0.wp.com/ulzza.com/wp-content/uploads/2018/10/2013072917110983854_3_59_20130730072402.jpg?fit=520%2C329&ssl=1"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                <FaSearchPlus />
              </h1>
            </div>
          </div>
          <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
            <div className="h-full">
              <img
                className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                src="https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Assorted-Korean-Mochi-Cakes.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                <FaSearchPlus />
              </h1>
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