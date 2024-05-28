import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditRecipe = () => {
    const { id } = useParams()
    const [categories, setCategories] = useState();
    const [recipeDetails, setRecipeDetails] = useState();
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
    };
    return (
        <>
            <div className="justify-center items-center mx-auto max-w-[700px] w-full ">
                <h1 className="text-4xl mb-4 text-center mt-24">Edit Recipe</h1>
                <form onSubmit={handleCreateRecipe} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="">Id </label>
                        <input defaultValue={recipeDetails?.id} type="text" name="id" className="w-full py-3 px-5 border" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">Title </label>
                        <input defaultValue={recipeDetails?.title} type="text" name="title" className="w-full py-3 px-5 border" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">Price </label>
                        <input
                            type="number"
                            defaultValue={recipeDetails?.price}
                            name="price"
                            className="w-full py-3 px-5 border"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">Cateogry </label>
                        <select name="category" id="" className="w-full py-3 px-5 border">
                            {categories?.map((category) => (
                                <option key={category?.id} selected={category?.title === recipeDetails?.category} value={category?.title}>
                                    {category?.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="">Description </label>
                        <textarea  defaultValue={recipeDetails?.description} name="description" className="w-full py-3 px-5 border" />
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