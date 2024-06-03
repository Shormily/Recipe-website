import axios from "axios";
import { useEffect, useState } from "react";
import { FaHandHoldingHand } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiRingBox } from "react-icons/gi";
import { LiaRupeeSignSolid } from "react-icons/lia"
import RecipeRow from "./RecipeRow";
import { Toaster } from "react-hot-toast";

const ManageAllRecipe = () => {
  const [recipes, setRescipes] = useState();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function load() {
      const data = await axios.get('http://localhost:5000/recipes')
      if (data?.status === 200) {
        setRescipes(data?.data);
      }
      console.log(data)
    }
    load();
  }, [])
  const handleDeleteProduct = (id) => {
    setProducts(recipes.filter((recipe) => recipe.id !== id));
  };


  return (
    <>
      <div className=" px-8 pt-5 pb-12">
        <p className="font-bold text-4xl py-2 pb-7">Overview</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-24">
          <div className=" py-5 pb-5 px-8  w-full   text-white bg-[#14532d] shadow-lg rounded-3xl">
            <p className="flex gap-2 px-3">

              <FaHandHoldingHand className="bg-[#ffffff5b] rounded-full w-10 h-10 py-2 px-2" size={30} /> <span className="pt-2">Product Sales</span></p>
            <div className="flex justify-between gap-20">
              <p className='flex-between py-2'>Sold </p>
              <p className='flex-between pt-1'>+1200 </p>
            </div>
            <div className="flex justify-between">
              <p className='flex-between'>Cost </p>
              <p className='flex '> <span className="pt-1 font-bold"><LiaRupeeSignSolid />  </span>355,000 </p>
            </div>
          </div>

          <div className=" py-5 px-4 text-white  rounded-2xl bg-[#14532d]">
            <p className="flex gap-2 px-3">

              <FaHandHoldingUsd className="bg-[#a3e635] text-white rounded-full w-10 h-10 py-2 px-2" size={30} /> <span className="pt-2">Total Income</span></p>

            <p className='text-3xl pt-3 items-center justify-center flex px-4'> <LiaRupeeSignSolid size={25} />355,000</p>
          </div>

          <div className=" py-5 px-8 pb-3 text-white   rounded-2xl bg-[#14532d]">
            <p className="flex gap-2 px-3">
              <GiRingBox className="bg-[#38bdf8] text-white rounded-full w-10 h-10 py-2 px-2" size={30} /> <span className="pt-2">Total Products</span></p>
            <div className="flex justify-between gap-20">
              <p className='flex-between py-2'>Website </p>
              <p className='flex-between pt-1'>+4000 </p>
            </div>
            <div className="flex justify-between gap-20">
              <p className='flex-between'>Delivery </p>
              <p className='flex-between'>200 </p>
            </div></div>
            <div className=" py-5 px-5 text-white  rounded-2xl bg-[#14532d]">
            <p className="flex gap-2 px-3">

              <FaHandHoldingUsd className="bg-[#a3e635] text-white rounded-full w-10 h-10 py-2 px-2" size={30} /> <span className="pt-2">Total Income</span></p>

            <p className='text-3xl pt-3 items-center justify-center flex px-4'> <LiaRupeeSignSolid size={25} />355,000</p>
          </div>


        </div>
      </div>
      <div className="w-full  mb-12">
        <div className=" px-5 w-full">
          <div className="overflow-x-auto  w-full shadow-lg">
            {/* <h1 className="text-[#002147] text-4xl pt-12 pb-6">Manage All Orders</h1> */}
            <Toaster/>
            <table className="min-w-full divide-y divide-gray-200  w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-[#14532d] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 bg-[#14532d] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 bg-[#14532d] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 bg-[#14532d] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    img
                  </th>
                  <th className="px-6 py-3 bg-[#14532d] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 bg-[#14532d] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                
                {recipes?.map((recipe) => (
                  <RecipeRow key={recipe?.id} recipe={recipe} onDelete={handleDeleteProduct} />
                ))}
              </tbody>
            </table>
          </div>
          {/* <div className="countup  gap-4 pt-8 pb-8  max-w-[1400px] m-auto">
        <p className="text-5xl study-num  text-center text-[#002147]">
          <CountUp end={13} duration={100} className="countup-font" />
          <p className="text-[#002147] text-[14px] pt-3 pb-2">
            Nobel laureates
          </p>
          <p className="text-[#002147] text-[12px] text-gray-400 leading-relaxed">
            bachelor’s recipients were <br /> employed
          </p>
        </p>
        <p className="text-5xl study-num  text-center text-[#002147]">
          <CountUp end={12} duration={100} className="countup-font" />
          <p className="text-[#002147] text-[14px] pt-3 pb-2">
            Nobel laureates
          </p>
          <p className="text-[#002147] text-[12px] text-gray-400 leading-relaxed">
            bachelor’s recipients were <br /> employed
          </p>
        </p>
        <p className="text-5xl study-num  text-center text-[#002147]">
          <CountUp end={113} duration={100} className="countup-font" />
          <p className="text-[#002147] text-[14px] pt-3 pb-2">
            Nobel laureates
          </p>
          <p className="text-[#002147] text-[12px] text-gray-400 leading-relaxed">
            bachelor’s recipients were
            <br />
            employed
          </p>
        </p>
        <p className="text-5xl study-num  text-center text-[#002147]">
          <CountUp end={250} duration={100} className="countup-font" />+
          <p className="text-[#002147] text-[14px] pt-3 pb-2">
            Nobel laureates
          </p>
          <p className="text-[#002147] text-[12px] text-gray-400 leading-relaxed">
            bachelor’s recipients were
            <br />
            employed
          </p>
        </p>
      </div> */}
        </div>

      </div>
    </>

  );
};

export default ManageAllRecipe;