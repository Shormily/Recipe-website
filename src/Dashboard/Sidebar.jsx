import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const menus = [
        { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
        { name: "Manage All Orders", link: "/dashboard/manage-recipes", icon: FiMessageSquare },
        { name: "Add Orders", link: "/dashboard/add-recipes", icon: AiOutlineUser },
        { name: "Analytics", icon: TbReportAnalytics, margin: true },
        { name: "Home", link: "/", icon: FiShoppingCart },
        { name: "File Manager", icon: FiFolder },
        { name: "Saved", icon: AiOutlineHeart, margin: true },
        { name: "Setting", icon: RiSettings4Line },
    ];
    const [open, setOpen] = useState(true);
    return (
        <>
            <div className="dash-design bg-[#f1a241fd] sidebr banner-text overflow-x-auto h-full">

                <div className="flex  gap-6   h-full ">

                    <div
                        className={`  min-h-screen ${open ? "w-72" : "w-16"
                            } duration-500 text-white px-5`}
                    >

                        <div className="py-3 flex justify-end ">

                            <HiMenuAlt3
                                size={30}
                                className="cursor-pointer"
                                onClick={() => setOpen(!open)}
                            />
                        </div>

                        {/* <div  className="sm:hidden z-10">
          <label className="hamburger" >
            <input className="hidden" type="checkbox" />
            <svg onClick={handleNav} viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
         
          </label>
        </div> */}
                        <div className="mt-4 flex flex-col gap-4 relative ">
                            {menus?.map((menu, i) => (
                                <Link
                                    to={menu?.link}
                                    key={i}
                                    className={` ${menu?.margin && "mt-5"
                                        } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#f2bc7a29] rounded-md`}
                                >
                                    <div>{React.createElement(menu?.icon, { size: "25" })} </div>
                                    <h2
                                        style={{
                                            transitionDelay: `${i + 3}00ms`,
                                        }}
                                        className={`whitespace-pre text-[17px] duration-500 ${!open && "opacity-0 translate-x-28  overflow-hidden"
                                            }`}
                                    >
                                        {menu?.name}
                                    </h2>
                                    <h2
                                        className={`${open && "hidden"
                                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                    >
                                        {menu?.name}
                                    </h2>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Sidebar;