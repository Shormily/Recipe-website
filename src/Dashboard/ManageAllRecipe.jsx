import axios from "axios";
import { useEffect, useState } from "react";
import RecipeRow from "./RecipeRow";

const ManageAllRecipe = () => {
  const [recipes, setRescipes] = useState();
  const [products, setProducts] = useState([]);
    useEffect(() => {
        async function load() {
            const data = await axios.get('http://localhost:3000/recipes')
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
        <div className="w-full">
            <div className=" px-5 w-full">
                <div className="overflow-x-auto  w-full">
                    {/* <h1 className="text-[#002147] text-4xl pt-12 pb-6">Manage All Orders</h1> */}
                    <table className="min-w-full divide-y divide-gray-200  w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-[#002147] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 bg-[#002147] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 bg-[#002147] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-3 bg-[#002147] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 bg-[#002147] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
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
    );
};

export default ManageAllRecipe;