import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EditRecipe = () => {
    const recipe = useLoaderData();
    console.log(recipe)
    // const { id } = useParams()
    const [categories, setCategories] = useState();
    const [recipeDetails, setRecipeDetails] = useState();
    // Update code
    const [title, setTitle] = useState(recipe.title);
    const [price, setPrice] = useState(recipe.price);
    const [category, setCategory] = useState(recipe.category);
    const [id, setId] = useState(recipe.id);
    const [description, setDescription] = useState(recipe.description);
    const [image, setImage] = useState(recipe.image);


    useEffect(() => {
        async function load() {
            const categoriesData = await axios.get("http://localhost:3000/categories");
            if (categoriesData?.status === 200) {
                // console.log(data?.data);
                setCategories(categoriesData?.data);
            }
            const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
            if (recipeData?.status === 200) {
                setRecipeDetails(recipeData?.data);
            }
        }
        load();
    }, [id]);

    const handleCreateRecipe = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const recipeData = {
            id,
            title,
            price,
            category,
            description,
        };

        await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
        await fetch(`http://localhost:3000/recipes/${recipeDetails.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(recipeData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    return (
        <>
            <div className="justify-center items-center mx-auto max-w-[700px] w-full ">
                <h1 className="text-4xl mb-4 text-center mt-24">Edit Recipe</h1>
                <form onSubmit={handleCreateRecipe} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="">Id </label>
                        <input  onChange={(e) => setId(e.target.value)} defaultValue={recipeDetails?.id} type="text" name="id" className="w-full py-3 px-5 border" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">Title </label>
                        <input onChange={(e) => setTitle(e.target.value)} defaultValue={recipeDetails?.title} type="text" name="title" className="w-full py-3 px-5 border" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">Price </label>
                        <input
                            type="number"
                            defaultValue={recipeDetails?.price}
                            onChange={(e) => setPrice(e.target.value)}
                            name="price"
                            className="w-full py-3 px-5 border"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">Price </label>
                       
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
                        <label htmlFor="">Cateogry </label>
                        <select   name="category" id="" className="w-full py-3 px-5 border">
                            {categories?.map((category) => (
                                <option onChange={(e) => setCategories(e.target.value)} key={category?.id} selected={category?.title === recipeDetails?.category} value={category?.title}>
                                    {category?.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="">Description </label>
                        <textarea onChange={(e) => setDescription(e.target.value)} defaultValue={recipeDetails?.description} name="description" className="w-full py-3 px-5 border" />
                    </div>

                    <div className="mb-4">
                        <input
                            type="submit"
                            value={"Add Recipe"}
                            className="w-full btn py-3 px-5 border btn-neutral"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditRecipe;