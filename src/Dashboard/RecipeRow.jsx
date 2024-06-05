/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const RecipeRow = ({ recipe, onDelete }) => {
    // Tokens
    const token = localStorage.getItem('token')
    // const recipe = useLoaderData();
    const { _id } = recipe;
    console.log(_id)


    console.log(_id)
    const handleDelete = async () => {
        await fetch(`https://server-0bf5.onrender.com/recipes/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Order Delete Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                onDelete(_id);
                // toast.success("Order Delete Successfully")
            });
    };
    return (

        <tr>

            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-md leading-5 text-gray-900">
                    {recipe?.id}
                </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-md leading-5 text-gray-900">
                    {recipe?.title}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-md leading-5 text-gray-900">
                    <img
                        className="w-24 h-20 rounded-lg"
                        src={recipe?.image}
                        alt=""
                    />
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-md leading-5 text-gray-900">
                    {recipe?.price}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-md leading-5 text-gray-900">
                    {recipe?.category}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap flex  mt-6">
                <div className="text-sm leading-5 text-gray-900">
                   
                    <button onClick={handleDelete} type="button" className="text-white font-medium  bg-[#bed604] hover:bg-[#ebe238f8] focus:ring-4 focus:outline-none focus:ring-gray-100  text-sm pt-1 p-1 px-4 rounded-full text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-5">
                        Delete

                    </button>
                    <Link to={`/dashboard/update/${recipe?._id}`} type="button" className="text-white font-medium  bg-[#03712f] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-100  text-sm pt-1 p-1 px-4 rounded-full text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-5">
                        Update
                    </Link>
                </div>
            </td>
        </tr>

    );
};

export default RecipeRow;