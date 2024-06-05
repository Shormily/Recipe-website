import { Link } from "react-router-dom";
import Footer from "../Footer";
import Naves from "../Navbars/Naves";


const Blog = () => {
    const gallerys = [
        {   
            img:"https://i.ibb.co/8d0Lk5Q/dish-1.jpg",
        },
        {
            img:"https://i.ibb.co/P5ZnhHM/breakfast-6.jpg",
        },
        {
            img:"https://i.ibb.co/S7GvJpL/dish-3.jpg",
        },
        {
            img:"https://i.ibb.co/Yj4v4Ft/dish-5.jpg",
        },
        {
            img:"https://i.ibb.co/4SkdTCg/dish-7.jpg",
        },
        {
            img:"https://i.ibb.co/87vSLcp/dish-8.jpg",
        },
        {
            img:"https://i.ibb.co/Nsv1hDG/dish-9.jpg",
        },{
            img:"https://i.ibb.co/Z8nkjyY/dish-11.jpg",
        },{
            img:"https://i.ibb.co/wMHSJfb/dish-12.jpg",
        },{
            img:"https://i.ibb.co/rHS3JzY/dish-13.jpg",
        },{
            img:"https://i.ibb.co/qgt4rCX/dish-14.jpg",
        },{
            img:"https://i.ibb.co/n8cZh97/dish-15.jpg",
        },{
            img:"https://i.ibb.co/SB9ScjF/dish-16.jpg",
        },{
            img:"https://i.ibb.co/g9BvpSw/dish-17.jpg",
        },{
            img:"https://i.ibb.co/ykgNLhD/dish-18.jpg",
        },{
            img:"https://i.ibb.co/XSsy0GR/dinner-4.jpg",
        },
    ]
   
    return (
        <>
            <Naves />
            <div className="home-sections">
            <h1 className="text-center font-bold text-5xl pt-12 pb-4 text-white">Our Blog</h1>
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#14532d",
                    height: "4px",
                    width: 150
                }}
                className="justify-center items-center m-auto mb-4"
            />
           <div className="justify-center gap-1 text-white items-center m-auto flex ">
              <Link to={'/'} className="hover:opacity-50 nav-link cursor-default">
                Home  /
              </Link>
              <Link to={'/about'} className="hover:opacity-50 nav-link cursor-default">
                About
              </Link>
            </div>
            </div>
          

            <div className="flex-cards  m-auto max-w-[1500px] pb-12 pt-12">
                {gallerys?.map((gallery) => (<>
                    <div className="items-center  gap-4 justify-center  py-5 ">
                        <div className="card-container  rounded-sm   ">

                            <div className="image-container">
                                <img src={gallery?.img} alt="food" className="w-full" />
                            </div>
                            <div className="card-content">
                                {/* <h2 className="text-xl font-semibold  pt-6">{card?.title}</h2> */}
                                <p className=" text-[13px] text-gray-500 py-2">10 June 2024 by Peter Parker</p>
                                <p className=" text-gray-500 text-justify text-[14px] py-4">

                                Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat
                                </p>
                                <p className="text-gray-300"> -------------------------------------------------------------------</p>
                                <div className="flex justify-between  text-[13px]">
                                    <p className="font-semibold hover:text-red-500 cursor-pointer">Read More</p>
                                    <p className="text-orange-400">10 like</p>
                                </div>

                            </div>



                        </div>
                    </div>
                </>))}
            </div> 
            <Footer/>
        </>
    );
};

export default Blog;