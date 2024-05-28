/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Chinese.css"
export default function Chinese({ chinese }) {
  return (
    <div className="flex-cards py-5 m-auto">
      <div className="card-container bg-sky-100  rounded-sm  shadow-xl ">
        <div className="image-container">
          <img src={chinese?.image} alt="food" className="max-w-50" />
        </div>
        <div className="card-content px-4">
          <h2 className="text-2xl font-semibold ">{chinese?.title}</h2>
          <h2 className="font-semibold py-2"> Price: ${chinese?.price}</h2>
          <p className=" text-gray-500 text-justify">
            {/* {chinese?.description?.length > 30
            ? chinese?.description?.slice(0, 30)
            : chinese?.description} */}
            {chinese?.description}
          </p>
          <br />
          
          <div className="pt-4 flex justify-between">
          <p className="font-">Catagory: {chinese?.category}</p>
            <button type="button" className="text-gray-900 font-medium  bg-orange-300 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-gray-100  text-sm p-1 px-4 rounded-full text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-5">
             
            Details
            </button>
          </div>
        </div>
      </div>
    </div>


  );
}