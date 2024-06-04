import { Link, useLoaderData } from "react-router-dom";
import Naves from "../../Navbars/Naves";
import Footer from "../../Footer";

const ProductDetails = () => {
    const recipe = useLoaderData();
    console.log(recipe)
    const { title, image, price, category, pragraph } = recipe;
    return (
        <>
            <Naves />
            <div className="productdetail">
                <h1 className="text-center font-bold text-5xl py-24 pb-4 text-white">Food Details</h1>
                <div
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#14532d",
                        height: "4px",
                        width: 150
                    }}
                    className="justify-center items-center m-auto mb-4"
                />

            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12 justify-center items-center m-auto  max-w-[1200px] py-24 px-8">
                <div className="">
                    <img className="p-2 shadow-lg bg-gray-100 h-96 w-full" src={image} alt="product image" />
                </div>
                <div className="">
                    <h1 className="text-4xl font-medium">{title}</h1>
                    <div className=""><h3 className="text-2xl font-light text-red-700 py-1"> Price:{price} $$</h3>
                        <h3 className="text-xl font-semibold py-1">{category}</h3>
                        <p className="text-lg font-normal  text-[15px] m-auto text-justify max-w-[1200px] pt-1">{pragraph}</p></div>
                    <div className="cursor-pointer py-2">
                        <button className="bg-[#14532d] px-8 w-48  cursor-pointer  py-3 text-sm font-bold text-[#fff] hover:bg-[#000] hover:text-[#fff]">
                        <Link to={'/product'}>
                Back
              </Link>
                        </button></div>
                </div>
            </div>

            <div className="product-about"></div>
            

            <Footer />
        </>
    );
};

export default ProductDetails;