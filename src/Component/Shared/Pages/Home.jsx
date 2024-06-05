import { useEffect, useState } from "react";
import Chinese from "./Chinese/Chinese";
import "./Home.css"


const Home = () => {
    const [recipes, setRescipes] = useState([]);
    const [categoris, setCategories] = useState();
    useEffect(() => {
        fetch("https://server-0bf5.onrender.com/recipes")
            .then((res) => res.json())
            .then((data) => setRescipes(data));

        // fetch("https://server-0bf5.onrender.com/categories")
        //     .then((res) => res.json())
        //     .then((data) => setCategories(data));
        // async function load() {
        //     //get recipies
        //     const recipeRes = await fetch("https://server-0bf5.onrender.com/recipes");
        //     const recipeData = await recipeRes.json();
        //     setRescipes(recipeData);
        //     //get categories

        //     const categoryRes = await fetch("https://server-0bf5.onrender.com/categories");
        //     const categoryData = await categoryRes.json();

        //     setCategories(categoryData);
        // }
        // load();
    }, [])
    console.log('h1')
    return (
        <>
            {/* <Naves /> */}
            {/* <Banner/> */}
            <div className="story-sectioner">
                {/* <h1>Our Newst Recipes</h1> */}
                {/* <div className="mx-16">
                    <h1 className="text-4xl my-20 text-center">Our Recipe Categories </h1>
                    <div className="grid grid-cols-4 gap-6">
                        {categoris?.map((category) => (
                            <CategoryCard key={category?.id} category={category} />
                        ))}
                    </div>


                </div> */}
                <div className="mx-16">
                    <h1 className="text-5xl my-8 text-center text-white font-bold">Our Food List </h1>
                    <div className="flex-cards items-center gap-4 justify-center m-auto max-w-[1440px] ">
                        {/* {recipes
                            ?.reverse()
                            ?.slice(0, 4)
                            ?.map((chinese) => (
                                <Chinese key={chinese?.id} chinese={chinese} />
                            ))} */}
                        {recipes?.map((chinese) => (
                            <Chinese key={chinese?._id} chinese={chinese} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;