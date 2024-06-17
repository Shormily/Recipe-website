import { useState } from "react";
import 'animate.css';
import "./Tab.css";
const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    {
      label: "All",
      content: (
       
         
         <div className="flex tab-header justify-center items-center gap-8  pb-24 pt-8 ">
         <div className="max-w-lg rounded-lg overflow-hidden shadow-lg animate__animated animate__fadeInLeft ">
           <img
             className="w-full h-[300px]"
             src="https://i.ibb.co/SB9ScjF/dish-16.jpg"
             alt="Card"
           />
           <div className="px-6 py-4">
             <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
             <p className="text-gray-700 text-xl text-base">
             Students take crash course in Japanese sword fighting
             </p>
           </div>
           <div className="px-6 py-4">
             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
               #Tag1
             </span>
             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
               #Tag2
             </span>
             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
               #Tag3
             </span>
           </div>
           <div className="font-bold px-6 text-gray-400 hover:text-gray-600 text-[13px] pb-12">August 31, 2016</div>
         </div>
         <div className="lg:col-span-2 mt-8 md:col-span-2 gap-24 animate__animated animate__fadeInRight">
           <div className="">
             <div className=" flex gap-2">
               <div className="  ">
                 <img
                   className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                   src="https://i.ibb.co/n8cZh97/dish-15.jpg"
                   alt=""
                 />
               </div>
               <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                 {" "}
                 <span className="text-red-800 text-[11px] pb-2">
                   ACADEMICS
                 </span>
                
                 <p className="text-gray-500 text-[12px] pt-1 mb-5">
                   August 31, 2016
                 </p>
                 <div
                   style={{
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#d4d4d8",
                     height: "1px",
                   }}
                 />
               </p>
             </div>
             <div className="pt-3 flex gap-2">
               <div className=" pt-3 ">
                 <img
                   className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                   src="https://i.ibb.co/SB9ScjF/dish-16.jpg"
                   alt=""
                 />
               </div>
               <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                 {" "}
                 <span className="text-red-800 text-[11px] pb-2">
                   ACADEMICS
                 </span>
                
                 <p className="text-gray-500 text-[12px] pt-1 pb-2">
                   August 31, 2016
                 </p>
                 <div
                   style={{
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#d4d4d8",
                     height: "1px",
                   }}
                 />
               </p>
             </div>
             <div className="pt-3 flex gap-2">
               <div className="  ">
                 <img
                   className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                   src="https://i.ibb.co/ykgNLhD/dish-18.jpg"
                   alt=""
                 />
               </div>
               <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                 {" "}
                 <span className="text-red-800 text-[11px] pb-2">
                   ACADEMICS
                 </span>
                 
                 <p className="text-gray-500 text-[12px] pt-1 pb-2">
                   August 31, 2016
                 </p>
                 <div
                   style={{
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#d4d4d8",
                     height: "1px",
                   }}
                 />
               </p>
             </div>
             <div className="pt-3 flex gap-2">
               <div className="  ">
                 <img
                   className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                   src="https://i.ibb.co/XSsy0GR/dinner-4.jpg"
                   alt=""
                 />
               </div>
               <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                 {" "}
                 <span className="text-red-800 text-[11px] pb-2">
                   ACADEMICS
                 </span>
                 
                 <p className="text-gray-500 text-[12px] pt-1 pb-2">
                   August 31, 2016
                 </p>
                 <div
                   style={{
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#d4d4d8",
                     height: "1px",
                   }}
                 />
               </p>
             </div>
           </div>
         </div>
       </div>
      ),
    },
    {
      label: "Breakfast item",
      content: (
        <div className="flex gap-12 justify-center items-center  tab-header pb-24 pt-8">
          <div className="max-w-lg rounded-lg overflow-hidden shadow-lg animate__animated animate__fadeInLeft">
            <img
              className="w-full h-[300px]"
              src="https://i.ibb.co/n8cZh97/dish-15.jpg"
              alt="Card"
            />
             <div className="px-6 py-4">
              <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
              <p className="text-gray-700 text-xl text-base">
              Students take crash course in Japanese sword fighting
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag2
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Tag3
              </span>
            </div>
            <div className="font-bold px-6 text-gray-400 hover:text-gray-600 text-[13px] pb-12">August 31, 2016</div>
          </div>
          <div className="lg:col-span-2 mt-8 md:col-span-2 gap-24 animate__animated animate__fadeInRight">
            <div className="">
              <div className=" flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                    src="https://i.ibb.co/n8cZh97/dish-15.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                 
                  <p className="text-gray-500 text-[12px] pt-1 mb-5">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className=" pt-3 ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                    src="https://i.ibb.co/SB9ScjF/dish-16.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                 
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                    src="https://i.ibb.co/ykgNLhD/dish-18.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                    src="https://i.ibb.co/XSsy0GR/dinner-4.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Lunch Items",
      content: (
        <div className="flex  gap-12 justify-center items-center  tab-header pb-24 pt-8">
        <div className="max-w-lg  rounded-lg overflow-hidden shadow-md ">
          <img
            className="w-full h-[300px]"
            src="https://i.ibb.co/qgt4rCX/dish-14.jpg"
            alt="Card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
            <p className="text-gray-700 text-xl text-base">
            Students take crash course in Japanese sword fighting
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #Tag3
            </span>
          </div>
          <div className="font-bold px-6 text-gray-400  pb-4 hover:text-gray-600 text-[13px] ">August 31, 2016</div>
        </div>
        <div className="lg:col-span-2 md:col-span-2 gap-24">
          <div className="">
            <div className=" flex gap-2">
              <div className="  ">
                <img
                  className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                  src="https://i.ibb.co/n8cZh97/dish-15.jpg"
                  alt=""
                />
              </div>
              <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                {" "}
                <span className="text-red-800 text-[11px] pb-2">
                  ACADEMICS
                </span>
               
                <p className="text-gray-500 text-[12px] pt-1 mb-5">
                  August 31, 2016
                </p>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#d4d4d8",
                    height: "1px",
                  }}
                />
              </p>
            </div>
            <div className="pt-3 flex gap-2">
              <div className=" pt-3 ">
                <img
                  className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                  src="https://i.ibb.co/SB9ScjF/dish-16.jpg"
                  alt=""
                />
              </div>
              <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                {" "}
                <span className="text-red-800 text-[11px] pb-2">
                  ACADEMICS
                </span>
               
                <p className="text-gray-500 text-[12px] pt-1 pb-2">
                  August 31, 2016
                </p>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#d4d4d8",
                    height: "1px",
                  }}
                />
              </p>
            </div>
            <div className="pt-3 flex gap-2">
              <div className="  ">
                <img
                  className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                  src="https://i.ibb.co/ykgNLhD/dish-18.jpg"
                  alt=""
                />
              </div>
              <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                {" "}
                <span className="text-red-800 text-[11px] pb-2">
                  ACADEMICS
                </span>
                
                <p className="text-gray-500 text-[12px] pt-1 pb-2">
                  August 31, 2016
                </p>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#d4d4d8",
                    height: "1px",
                  }}
                />
              </p>
            </div>
            <div className="pt-3 flex gap-2">
              <div className="  ">
                <img
                  className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                  src="https://i.ibb.co/XSsy0GR/dinner-4.jpg"
                  alt=""
                />
              </div>
              <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                {" "}
                <span className="text-red-800 text-[11px] pb-2">
                  ACADEMICS
                </span>
                
                <p className="text-gray-500 text-[12px] pt-1 pb-2">
                  August 31, 2016
                </p>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#d4d4d8",
                    height: "1px",
                  }}
                />
              </p>
            </div>
          </div>
        </div>
       </div>
      ),
    },
    {
      label: "Dinner item",
      content: (
        <div className="flex tab-header justify-center items-center gap-8  pb-24 pt-8">
          <div className="max-w-lg rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-[300px]"
              src="https://i.ibb.co/ykgNLhD/dish-18.jpg"
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
              <p className="text-gray-700 text-base">
              Students take crash course in Japanese sword fighting
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag2
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Tag3
              </span>
            </div>
            <div className="font-bold px-6 text-gray-400 hover:text-gray-600 text-[13px] pb-12">August 31, 2016</div>
          </div>
          <div className="lg:col-span-2 mt-8 md:col-span-2 gap-24">
            <div className="">
              <div className=" flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                    src="https://i.ibb.co/n8cZh97/dish-15.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                 
                  <p className="text-gray-500 text-[12px] pt-1 mb-5">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className=" pt-3 ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                    src="https://i.ibb.co/SB9ScjF/dish-16.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                 
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                    src="https://i.ibb.co/ykgNLhD/dish-18.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 h-24 w-24"
                    src="https://i.ibb.co/XSsy0GR/dinner-4.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "ShanGrila",
      content: (
        <div className="flex gap-12 justify-center items-center tab-header pb-24 pt-8">
          <div className="max-w-lg  rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://i.ibb.co/gJyf8Sy/news2-435x280.jpg"
              alt="Card"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-red-500 hover:text-red-700 text-[13px] mb-2">Athletics</div>
              <p className="text-gray-700 text-base">
              Students take crash course in Japanese sword fighting
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag2
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Tag3
              </span>
            </div>
            <div className="font-bold px-6 text-gray-400 hover:text-gray-600 text-[13px] pb-12">August 31, 2016</div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 ">
            <div className="">
              <div className=" flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                  
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className=" pt-3 ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/HHzc95Y/news4-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                 
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
              <div className="pt-3 flex gap-2">
                <div className="  ">
                  <img
                    className="  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/q07hPH3/news1-95x95.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify    px-3  hover:text-[#7f1d1d] cursor-pointer">
                  {" "}
                  <span className="text-red-800 text-[11px] pb-2">
                    ACADEMICS
                  </span>
                
                  <p className="text-gray-500 text-[12px] pt-1 pb-2">
                    August 31, 2016
                  </p>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d4d4d8",
                      height: "1px",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <>
      {" "}
      <div className=" max-w-[1240px] m-auto ">
        <div className=" pt-24  ">
          <div>
            <div className="tab-header tablet  justify-center items-center m-auto">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab ${
                    activeTab === index ? "active" : "color:white"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <button className="btn btn text-[16px] ">{tab.label}</button>
                </div>
              ))}
            </div>
            <div className="tab-content ">{tabs[activeTab].content}</div>
          </div>
          
        </div>
       
      </div>
      
    </>
  );
};

export default Tab;
