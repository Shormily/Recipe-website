
import "./Footer.css";


const Footer = () => {
  return (
    <>
      {/* <JoinOur/> */}
      {/* Footer Section */}
      <div className="bg-[#7d531ffd]  font-inriaSans pt-12 pb-8 ">
        <div
          className="max-w-[1550px] justify-center items-center m-auto px-6 
      "
        >
          {/* max-w-[1120px] m-auto pt-3 pb-3  flex items-center justify-between mx-auto */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-24  ">
            <div className="text-white">
              <p className="font-bold text-4xl pb-5 ">ArriMart</p>
              <p className="font-light text-[18px] text-gray-200 w-64">
                Experience the joy of endless possibilities – one click at a
                time. Welcome to a world where happiness is just a box away.
              </p>
            </div>

            <div className="text-white">
              <p className="font-bold mb-2 text-[20px]">Information</p>
              <div className="text-gray-200 font-light text-[18px]">
                <p>Sign Up</p>
                <p>Newsletter</p>
                <p>Blogs</p>
                <p>Trading</p>
              </div>
            </div>
            <div className="text-white">
              <p className="font-bold mb-2 text-[20px]">Platform</p>
              <div className="text-gray-200 font-light text-[18px]">
                {" "}
                <p>About</p>
                <p>Contract</p>
                <p>Collection</p>
                <p>Product</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-60 sm:gap-5 text-white  m-auto mt-5">
            <p className="">
              {/* <PiInstagramLogoDuotone size={2} className="icn" /> */}
              <i className="fa-brands fa-facebook  shadow icn outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
              <i className="fa-brands fa-instagram icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>
              <i className="fa-brands fa-linkedin icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
            </p>
            <p className=" text-[18px] font-light">
              2024 All rights reserved. &copy;2024 ArriMart
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
