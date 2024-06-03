import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const AddRecipe = () => {
    const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        console.log(data?.data);
        
        setCategories(data?.data);
        
      }
    }

    load();
    
  }, []);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
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
// await axios.post("http://localhost:3000/recipes", recipeData)
    await fetch("http://localhost:5000/recipes", {
      method: 'POST',
      headers: {
        "Content-type":"application/json",
      },
      body:JSON.stringify(recipeData),
    })  
    .then((response) => {
  
      toast.success("Recipe added successfully")
    
  })
  .catch((error) => {
    toast.error('Failed to add recipe');
  });
  };

 
    return (
      <>
        <Toaster/>
           <div className="justify-center items-center mx-auto max-w-[700px] w-full ">
          <h1 className="text-4xl mb-4 text-center mt-24">Add Recipe </h1>
         
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Id </label>
          <input type="text" name="id" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4 flex justify-between">
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

export default AddRecipe;