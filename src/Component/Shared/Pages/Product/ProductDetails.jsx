import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const recipe = useLoaderData();
    console.log(recipe)
    const { title,image,price,category,pragraph } = recipe;
    return (
        <>
            <div className="justify-center items-center m-auto flex max-w-[1200px] py-12">
            <img className="p-2 shadow-lg bg-gray-100" src={image} alt="product image" />
                </div>
      <h1 className="text-5xl text-center font-bold pb-8">{title}</h1>

      
<div className="text-center py-3"><h3 className="text-2xl font-semibold text-orange-400"> Price:{price} $$</h3>
      <h3 className="text-xl font-semibold">{category}</h3>
      <p className="text-lg font-medium  m-auto text-justify max-w-[1200px] py-12 pb-12">{pragraph}</p></div>
      
   
        </>
    );
};

export default ProductDetails;