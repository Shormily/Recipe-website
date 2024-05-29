/* eslint-disable react/prop-types */

import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const RecipeRow = ({ recipe ,onDelete }) => {
    // const recipe = useLoaderData();
    const { id } = recipe;
    console.log(id)

    console.log(id)
    const handleDelete = async () => {
        await fetch(`http://localhost:3000/recipes/${id}`, {
            method: "DELETE",
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
                onDelete(id);
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
                        src= {recipe?.image}
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
                    <Link to={`/dashboard/edit-recipe/${recipe?.id}`} type="button" className="text-white font-medium  bg-[#03712f] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-100  text-sm pt-1 p-1 px-4 rounded-full text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-5">
                        Edit
                    </Link>
                    <button onClick={handleDelete} type="button" className="text-white font-medium  bg-[#bed604] hover:bg-[#ebe238f8] focus:ring-4 focus:outline-none focus:ring-gray-100  text-sm pt-1 p-1 px-4 rounded-full text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-5">
                        Delete

                    </button>
                    <Link to={`/dashboard/update/${recipe?.id}`} type="button" className="text-white font-medium  bg-[#03712f] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-100  text-sm pt-1 p-1 px-4 rounded-full text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-5">
                        Update
                    </Link>
                </div>
            </td>
        </tr>

    );
};

export default RecipeRow;