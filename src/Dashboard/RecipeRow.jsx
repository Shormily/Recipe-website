/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

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
                onDelete(id);
            });
    };
    return (

        <tr>
            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">
                    {recipe?.id}
                </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">
                    {recipe?.title}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">
                    {recipe?.price}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">
                    {recipe?.category}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap flex">
                <div className="text-sm leading-5 text-gray-900">
                    <Link to={`/dashboard/edit-recipe/${recipe?.id}`} type="button" className="bg-gray-400 font-medium rounded-md inline-flex text-sm px-5 py-2.5 text-center me-4 mb-2">
                        <svg className="w-4 h-4 me-2 -ms-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        Edit
                    </Link>
                    <button onClick={handleDelete} type="button" className="text-gray-900 font-medium  bg-orange-300 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-gray-100  text-sm p-1 px-4 rounded-full text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-5">
                        Delete

                    </button>
                </div>
            </td>
        </tr>

    );
};

export default RecipeRow;