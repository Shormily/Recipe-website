
import "./Footer.css";



const Footer = () => {
  return (
    <>
      {/* <JoinOur/> */}
      {/* Footer Section */}

      <div className="bg-[#020617] justify-center items-center flex  font-inriaSans pt-12 pb-8 ">
        <div
          className="max-w-[1550px] justify-center items-center m-auto px-6  pt-12 pb-8
      "
        >
          {/* max-w-[1120px] m-auto pt-3 pb-3  flex items-center justify-between mx-auto */}
          <div className="flex-section  gap-24  ">
            <div className="text-white">
              <div className="flex">  <img
                className="imgse text-white h-16"
                src="https://i.ibb.co/nnxqFJR/footer-logo-1.png"
                alt=""
              />
                <p className=" text-4xl font-medium mt-3 ">hanGrila</p></div>
              <hr className="mt-4 p-2 " />
              <p className="py-2 text-[18px] font-light text-gray-200 ">
                Experience the joy of endless possibilities – one click at a
                time. Welcome to a world where happiness is just a box away.
              </p>
              <hr className="mt-4 p-2 " />
              <p className=" text-gray-200 ">Email: biocarebdteam@gmail.com</p>
              <p className="py-2 text-gray-200">Phone : 01600-538143</p>
              <p className="py-2">Address: Sylhet</p>
              <p className="py-2">Level: 3, Road: 14, Block: C 180/6,
                Abdullah Park, 23/C Banasree Main Rd,
                Dhaka-1219</p>
              <p className="py-2 mb-8">Trade License: TRAD/DNCC/131766/2022</p>
            </div>

            <div className="text-white">
              <p className="font-semibold mb-2  mt-3 text-3xl">About Shangri-La Group</p>
              <hr className="mt-8 p-2 " />
             <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"><div className="text-gray-200 pt-5 font-light text-[18px]">
                  <p >Our Hotel Brands   </p>
                  <p>Shangri-La Centre  </p>
                  <p>Meetings & Events </p>
                  <p>Our Destinations  </p>
              </div>
              
                <div className="text-gray-200 pt-5 font-light text-[18px]">
                  <p >  Programme Overview</p>
                  <p>  Join Shangri-La Circle</p>
                  <p>Account Overview</p>
                  <p> Global Citizenships</p>
                </div></div>
                
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
              <div className="text-gray-200 pt-5 font-light text-[18px]">
                  <p >  Programme Overview</p>
                  <p>  Join Shangri-La Circle</p>
                  <p>Account Overview</p>
                  <p> Global Citizenships</p>
                </div>
                
                
                <div className="text-gray-200 pt-5 font-light text-[18px]">
                  <p >Our Hotel Brands   </p>
                  <p>Shangri-La Centre  </p>
                  <p>Meetings & Events </p>
                  <p>Our Destinations  </p>
              </div>
              
               </div>
              
            </div>

            <div>
              <p className="font-semibold mb-2 text-white  mt-3 text-3xl">Shangri-La Circle</p>
              <hr className="mt-8 p-2 " />
              <div className="flex-img gap-2 justify-center items-center m-auto pt-2 mb-12 ">
                <img className="w-24 h-20" src="https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Assorted-Korean-Mochi-Cakes.png" alt="" />
                <img className="w-24 h-20" src="https://i.dailymail.co.uk/1s/2018/11/01/18/5668494-0-image-a-4_1541098633929.jpg" alt="" />
                <img className="w-24 h-20" src="https://i0.wp.com/ulzza.com/wp-content/uploads/2018/10/2013072917110983854_3_59_20130730072402.jpg?fit=520%2C329&ssl=1" alt="" />
                <img className="w-24 h-20" src="https://i.ibb.co/nCcQbFf/WK36-Lamb-small.png" alt="" />
                <img className="w-24 h-20" src="https://i.ibb.co/SB9ScjF/dish-16.jpg" alt="" />
                <img className="w-24 h-20" src="https://i.ibb.co/nCcQbFf/WK36-Lamb-small.png" alt="" />
                <img className="w-24 h-20" src="https://i.ibb.co/P5ZnhHM/breakfast-6.jpg" alt="" />
                <img className="w-24 h-20" src="https://i.ibb.co/XSsy0GR/dinner-4.jpg" alt="" />
                <img className="w-24 h-20" src="https://nomadparadise.com/wp-content/uploads/2021/08/279_10-1024x683.jpg" alt="" />
                <img className="w-24 h-20" src="https://sunkissedkitchen.com/wp-content/uploads/2020/03/dragon-fruit-salad-RC.jpg" alt="" />
                <img className="w-24 h-20" src="https://i.ibb.co/CzNMkLN/dinner-3.jpg" alt="" />
                <img className="w-24 h-20" src="https://i.ibb.co/S7GvJpL/dish-3.jpg" alt="" />
              </div>

            </div>

          </div>

          <hr className="" />
          <div className="flex justify-between  text-white  m-auto ">
            <p className="mt-8">
              {/* <PiInstagramLogoDuotone size={2} className="icn" /> */}
              <i className="fa-brands fa-facebook  shadow icn outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
              <i className="fa-brands fa-instagram icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>
              <i className="fa-brands fa-linkedin icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
            </p>
            <p className=" text-[18px] pb-6 justify-end items-end flex">
              2024 All rights reserved. &copy;2024 ShanGrila
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
