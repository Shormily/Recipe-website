import Footer from "../../Footer";
import Naves from "../../Navbars/Naves";

const Contact = () => {
  return (
    <>
      <Naves />
      <h1 className="text-center font-bold text-4xl py-8">Contact Us</h1>

      <form

      >
        <div id="contact" className=" max-w-[1240px] m-auto">


          <div className="lg:col-span-2 md:col-span-2 mx-3    animate__animated animate__fadeInRight">
            <div className="flex gap-4">
              <div className="w-full mt-2  ">
                <label
                  className="block text-gray-950 font-medium text-[12px]  mb-2 "
                  placeholder="grid-password"
                  type="text"
                >
                  Subject :
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  name="subject"
                  placeholder=""
                  //   onChange={handleInputChange}
                  required
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
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder=""
                  id="recipientEmail"
                  //   onChange={handleInputChange}
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="w-full mt-2 ">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2 ">
                Phone Number :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                name="phone"
                //   onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full mt-2 ">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                Tell us a bit about your project:
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 pb-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                name="message"
                placeholder=""
                //   onChange={handleInputChange}
                required
              />
              <div className="flex mb-8 mt-4  m-auto ">
                <input
                  className="text-white bg-[#14532d] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-900 font-semibold rounded-sm text-sm px-5 py-2.5 text-center mb-2"
                  type="submit"
                  name="submit"
                  style={{
                    paddingRight: "55px",
                    paddingLeft: "55px",
                    backgroundColor: "#7d531ffd",
                    color: "#fff",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Contact;