import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const recipes = useLoaderData();


    // Initialize state with recipe data
    const [title, setTitle] = useState(recipes.title);
    const [price, setPrice] = useState(recipes.price);
    const [category, setCategory] = useState(recipes?.category);
    const [_id, setId] = useState(recipes?._id);
    const [description, setDescription] = useState(recipes?.description);
    const [image, setImage] = useState(recipes?.image);
    // Navigate system
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/dashboard/manage-recipes";
    // Navigate end

    const handleUpdateRecipe = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const image = form.image_url.value;


        const updatedRecipe = {

            title,
            price,
            category,
            description,
            image
        };

        await fetch(`http://localhost:5000/recipes/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedRecipe),
        })
        .then((res) => {
                
            res.json(
                Swal.fire({
                title: "SuccessFully Updated",
                icon: "success",
                color: "#14532d",
                confirmButtonColor: "#14532d",
                confirmButtonText:"Okey",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
                })
            )
            
            navigate(from, { replace: true });
            
        })
            .then((data) => console.log(data));
    };
    console.log(handleUpdateRecipe);

    return (
        <div className="justify-center items-center mx-auto max-w-[700px] w-full ">
            <h1 className="text-4xl mb-4 text-center mt-24">Update Recipe</h1>
            <form onSubmit={handleUpdateRecipe} className="w-full">

                <div className="mb-4">
                    <label>Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        value={title}
                        name="title"
                        className="w-full py-3 px-5 border"
                    />
                </div>
                <div className="mb-4">
                    <label>Price</label>
                    <input
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        name="price"
                        value={price}
                        className="w-full py-3 px-5 border"
                    />
                </div>
                <div className="mb-4">
                    <label>Img Url</label>
                    <input
                        className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                        type="text"
                        name="image_url"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label>Category</label>
                    <select
                        name="category"
                        className="w-full py-3 px-5 border"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value={category} selected>{category}</option>
                        <option value="OtherCategory1">OtherCategory1</option>
                        <option value="OtherCategory2">OtherCategory2</option>
                        {/* Add other options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label>Description</label>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        className="w-full py-3 px-5 border"
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full btn py-3 px-5 border btn-neutral"
                    >
                        Update Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;