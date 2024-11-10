import CountUp from "react-countup";
import Naves from "../Navbars/Naves";
import Footer from "../Footer";
import Tab from "../Sliders/Tab";
import 'animate.css';

const Gallery = () => {
    const breakfasts = [
        {
          "id": "1",
          "title": "Pad Thaier",
          "price": "10.99",
          "image": "https://i.ibb.co/K61QZFD/breakfast-1.jpg",
          "category": "Thai",
          
        },
        {
          "id": "2",
          "title": "Beef Wellington",
          "price": "29",
          "image": "https://i.ibb.co/XSsy0GR/dinner-4.jpg",
          "category": "Mexican",
         
        },
        {
          "id": "3",
          "title": "Falafel Wrap",
          "price": "8.99",
          "image": "https://i.ibb.co/86Gk25Y/breakfast-7.jpg",
          "category": "Middle Eastern",
          
        },
        {
          "id": "4",
          "title": "Cold Cofee",
          "price": "7.99",
          "image": "https://i.ibb.co/CzNMkLN/dinner-3.jpg",
          "category": "French",
         
        },
        {
          "id": "5",
          "title": "Tikkia chop",
          "price": "13.99",
          "image": "https://i.ibb.co/P5ZnhHM/breakfast-6.jpg",
         
        },
        {
          "id": "6",
          "title": "Vegetable Stir Fry",
          "price": 9.99,
          "image": "https://i.ibb.co/5MhtKSd/breakfast-8.jpg",
          "category": "Chinese",
          
        },
      
    ]

   
    return (
        <>
            <Naves />
            <div className="home-sections">
                <div className=" ">
                    <p className="text-center mt-12 justify-center m-auto items-center text-5xl text-white font-bold">Gallery</p>

                    <p className="text-center text-white text-[20px] pt-5 px-3">Our restaurant was established in 1990.  It has been in operation   years. <br /> We have beenproviding food service to everyone. We keep  <br />a variety of food in our Beef US restaurant. </p>
                    <div className="justify-center items-center m-auto flex mt-8">
                    </div>

                </div>

            </div>
            <div className="bg-gray-200">
           
                <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1400px] m-auto">
                    
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 pb-5 px-2 animate__animated animate__fadeInLeft ">
          {breakfasts?.map((breakfast) => (
          <>
             <div className="pt-3  flex">
                <div className=" pt-3 ">
                  <div className="group w-[250px] h-[150px] rounded-sm  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl  hover:shadow-black/10">
                    <div className="h-full ">
                      <img
                        className="w-[300px] h-[170px] p-1 bg-[#e68342] object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 "
                        src={breakfast?.image}
                        alt=""
                      />
                    </div>
                    <div className="absolute  inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d9770640] group-hover:from-[#d9770640] group-hover:via-[#d9770640] group-hover:to-black/70"></div>
                  </div>
                </div>
                
              </div>
         
         
          </>
          ))}
          
                </div>
                <div className="animate__animated animate__fadeInRight">
                      {/* Extra Important */}
            <div className="bg-white mx-5 ">
              <div className="ml-5"></div>
              <p className="text-center ft-text text-[13px] pt-12">
                SMART BY THE NUMBER
              </p>
              <div className="max-w-[70px] m-auto pt-5">
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#7f1d1d",
                    height: "1px",
                    marginBottom: "30px",
                  }}
                />
              </div>
              <div>
                <p className="text-5xl study-num  text-center text-[#002147]">
                  <CountUp end={89} duration={90} className="countup-font" />%
                </p>
                <p className=" text-center study-num">of class of 2014</p>
                <p className="text-center text-gray-400 ft-text text-[13px]">
                  bachelor’s recipients were <br /> employed
                </p>
              </div>
              <div className="pt-12">
                <p className="text-5xl study-num  text-center text-[#002147]">
                  <CountUp end={89} duration={90} className="countup-font" />%
                </p>
                <p className=" text-center study-num">of employed 2014</p>
                <p className="text-center text-gray-400 ft-text text-[13px]">
                  graduates hold a position <br /> related to their degree
                </p>
              </div>
              <div className="pt-12 pb-8 ">
                <p className="text-5xl study-num  text-center text-[#002147]">
                  <CountUp end={3042} duration={90} className="countup-font" />%
                </p>
                <p className=" text-center study-num">students</p>
                <p className="text-center text-gray-400 ft-text text-[13px] pb-8">
                  overall student-athlete <br /> GPA for Spring 2016{" "}
                </p>
              </div>
            </div> 
            {/* Extra important end */}


                </div>
            </div>
            </div>

            <Tab/>
           <Footer/>
            
        </>
    );
};

export default Gallery;