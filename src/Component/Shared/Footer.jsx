
import "./Footer.css";



const Footer = () => {
  return (
    <>
      {/* <JoinOur/> */}
      {/* Footer Section */}
     
      <div className="bg-[#a16207] justify-center items-center flex  font-inriaSans pt-12 pb-8 ">
        <div
          className="max-w-[1550px] justify-center items-center m-auto px-6  pt-12 pb-8
      "
        >
          {/* max-w-[1120px] m-auto pt-3 pb-3  flex items-center justify-between mx-auto */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-24  ">
            <div className="text-white">
              <div className="flex">  <img
                className="imgse text-white"
                src="https://i.ibb.co/nnxqFJR/footer-logo-1.png"
                alt=""
              />
              <p className=" text-3xl font-medium mt-3 ">hanGrila</p></div>
            
              <p className="py-2 text-[18px] font-light text-gray-200 ">
                Experience the joy of endless possibilities – one click at a
                time. Welcome to a world where happiness is just a box away.
              </p>
            </div>

            <div className="text-white">
              <p className="font-semibold mb-2 text-[22px]">Information</p>
              <div className="text-gray-200 pt-5 font-light text-[18px]">
                <p>Sign Up</p>
                <p>Newsletter</p>
                <p>Blogs</p>
                <p>Trading</p>
              </div>
            </div>
            <div className="text-white">
              <p className="font-semibold mb-2 text-[22px]">Platform</p>
              <div className="text-gray-200 pt-5 font-light text-[18px]">
                {" "}
                <p>About</p>
                <p>Contract</p>
                <p>Collection</p>
                <p>Product</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white mb-2 text-[22px]">Instagram</p>
              <div className="grid lg:grid-cols-3 gap-2 pt-2 md:grid-cols-2 sm:grid-cols-2 mb-12 ">
                <img className="w-24 h-20" src="https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Assorted-Korean-Mochi-Cakes.png" alt="" />
                <img className="w-24 h-20" src="https://i.dailymail.co.uk/1s/2018/11/01/18/5668494-0-image-a-4_1541098633929.jpg" alt="" />
                <img className="w-24 h-20" src="https://i0.wp.com/ulzza.com/wp-content/uploads/2018/10/2013072917110983854_3_59_20130730072402.jpg?fit=520%2C329&ssl=1" alt="" />
                <img className="w-24 h-20" src="https://www.kworldnow.com/wp-content/uploads/2021/08/Korean-desserts-2-1024x576.jpg" alt="" />
                <img className="w-24 h-20" src="https://nomadparadise.com/wp-content/uploads/2021/08/279_10-1024x683.jpg" alt="" />
                <img className="w-24 h-20" src="https://sunkissedkitchen.com/wp-content/uploads/2020/03/dragon-fruit-salad-RC.jpg" alt="" />
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
