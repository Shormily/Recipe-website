import { TypeAnimation } from "react-type-animation";
import "./Banner.css"
import HomeCard from "../HomeCard/HomeCard";
import Recipe from "../Recipes/Recipes";
import { FaSearchPlus } from "react-icons/fa";
import Naves from "../../Navbars/Naves";
import Footer from "../../Footer";


const Banner = () => {

  const breakfasts = [
    {
      "id": "1",
      "title": "Pad Thaier",
      "price": "10.99",
      "image": "https://i.ibb.co/zhLg0GL/17.jpg",
      "category": "Thai",
      
    },
    {
      "id": "2",
      "title": "Beef Wellington",
      "price": "29",
      "image": "https://i.ibb.co/pjxQnzZ/15.jpg",
      "category": "Mexican",
     
    },
   
    {
      "id": "4",
      "title": "Cold Cofee",
      "price": "7.99",
      "image": "https://i.ibb.co/Bn5F8Bh/13.jpg",
      "category": "French",
     
    },
    {
      "id": "5",
      "title": "Tikkia chop",
      "price": "13.99",
      "image": "https://i.ibb.co/rkSZVJj/11.jpg",
     
    },
    {
      "id": "6",
      "title": "Vegetable Stir Fry",
      "price": 9.99,
      "image": "https://i.ibb.co/5MhtKSd/breakfast-8.jpg",
      "category": "Chinese",
      
    },
    {
      "id": "6",
      "title": "Vegetable Stir Fry",
      "price": 9.99,
      "image": "https://i.ibb.co/RHyXf4j/10.jpg",
      "category": "Chinese",
      
    },
    {
      "id": "3",
      "title": "Falafel Wrap",
      "price": "8.99",
      "image": "https://i.ibb.co/ydz1S0d/14.jpg",
      "category": "Middle Eastern",
      
    },
    {
      "id": "6",
      "title": "Vegetable Stir Fry",
      "price": 9.99,
      "image": "https://i.ibb.co/b7GGK4W/9.jpg",
      "category": "Chinese",
      
    },
  
]
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
       
            
        
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-0 justify-center items-center m-auto ">
        {breakfasts?.map((breakfast) => (
          <>
            
          <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
            <div className="h-full">
              <img
                className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                src={breakfast?.image}
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
          </>
        ))}
        </div> */}
        <div className=" ">
       
            
         
            <section className="">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-0 justify-center items-center m-auto px-1">
              {breakfasts?.map((breakfast) => (
          <>
                <div className="cardes ">
                  <div className="img-box">
                    <img className="w-full" src={breakfast?.image} alt="" />
                  </div>
                  <div className="cardes-content">
                    <h1 className="cardes-heading">Undergraduate Admissions</h1>
                    <p className="cardes-text ">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
                    <h3 className="text-[15px] text-white mx-5 pb-3">Read More</h3>
                    <div className="mr-48 px-4  ">
                      <div
                        style={{
                          // justifyContent: "center",
                          // alignItems: "center",
                          backgroundColor: "#fff",
                          height: "2px",

                        }}
                      />
                    </div>
                  </div>
                </div>
                </>
        ))}
              </div>
            </section>
         
        </div>
        <HomeCard />
      </div>
      <Footer />
    </>

  );
};

export default Banner;