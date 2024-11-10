import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Naves from "../../Navbars/Naves";
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <Naves />
      <div className="">
        <div className="home-sections">
          <div className=" ">
            <p className="text-center mt-12 justify-center m-auto items-center text-5xl text-white font-bold">Contact US</p>



            <div className="justify-center gap-1 text-white items-center m-auto flex mt-8">
              <Link to={'/'} className="hover:opacity-50 nav-link cursor-default">
                Home  /
              </Link>
              <Link to={'/contact'}>
                Contact
              </Link>
            </div>

          </div>

        </div>
        <div className="mt-[-120px] bg-white shadow-lg md:max-w-[1300px] sm:w-full m-auto">
          <div className="py-24 md:px-24 sm:mx-6 mb-24">
            <div className=""> <h1 className="text-center font-medium text-5xl ">Send Your Message</h1>
              <img
                className=" justify-center items-center flex m-auto pt-3"
                src="https://i.ibb.co/jGJmSrw/separater.png"
                alt=""
              />
              <p className="py-4 text-center text-gray-500">Don’t hestiate to ask us something, Our customer support team always ready to help<br />
                you,they will support you 24/7.</p>

            </div>
            <form

            >
              <div id="contact" className=" md:max-w-[1240px] sm:w-full m-auto">


                <div className="lg:col-span-2 md:col-span-1  mx-1    animate__animated animate__fadeInRight">
                  <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div className="w-full mt-2  ">
                      <label
                        className="block text-gray-950 font-medium text-[12px]  mb-2 "
                        placeholder="grid-password"
                        type="text"
                      >
                        Subject :
                      </label>
                      <input
                        className="mt-5 mb-3 p-3   w-full shadow"
                        placeholder="name"
                        type="text"
                      />

                    </div>
                    <div className="w-full mt-2  ">
                      <label
                        className="block text-gray-950 font-medium text-[12px]  mb-2 "
                        placeholder="grid-password"
                        type="text"
                      >
                        Email Address :
                      </label>
                      <input
                        className="mt-5 mb-3 p-3   w-full shadow-lg"
                        placeholder="name"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="w-full mt-2 ">
                    <label className="block text-gray-950 font-medium text-[12px]  mb-2 ">
                      Phone Number :
                    </label>
                    <input
                      className="mt-5 mb-3 p-3   w-full shadow-lg"
                      placeholder="name"
                      type="text"
                    />
                  </div>
                  <div className="w-full mt-2 ">
                    <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                      Tell us a bit about your project:
                    </label>
                    <textarea
                      className="mt-5 p-4  w-full shadow-lg"
                      placeholder="Message"
                      type="text"
                    />
                    <div className="flex mb-8 mt-4  m-auto ">
                      <input
                        className="text-white bg-[#14532d] font-semibold rounded-sm text-sm px-5 py-2.5 text-center mb-2"
                        type="submit"
                        name="submit"
                        style={{
                          paddingRight: "55px",
                          paddingLeft: "55px",
                          backgroundColor: "#a16207",
                          color: "#fff",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form></div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;