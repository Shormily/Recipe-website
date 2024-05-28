

const HomeCard = () => {
    const cards = [
        {
            img: "https://i.ibb.co/m9WT2H1/news-1.jpg",
            title: "Ingredients For Cooking Pasta",
            description: "Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat"
        },
        {
            img: "https://i.ibb.co/ZBfQG9p/news-2.jpg",
            title: "The Best Tips For Tasty Food",
            description: "Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat"
        },
        {
            img: "https://i.ibb.co/nMGSnCr/news-3.jpg",
            title: "Your Weeknight Dinner Plan",
            description: "Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat"
        }
    ]
    return (
        <>
            <h1 className="text-center font-bold text-5xl pt-12 pb-4 ">Our Blog</h1>
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#991b1b",
                    height: "4px",
                    width: 150
                }}
                className="justify-center items-center m-auto mb-4"
            />
            <p className="text-center  text-[13px] pb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
                doloremque laudantium, toed ut perspiciatis under.
            </p>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6  m-auto max-w-[1200px] pb-12 ">
                {cards?.map((card) => (<>
                    <div className="items-center  gap-4 justify-center  py-5 ">
                        <div className="card-container  rounded-sm   ">

                            <div className="image-container">
                                <img src={card?.img} alt="food" className="w-full" />
                            </div>
                            <div className="card-content">
                                <h2 className="text-xl font-semibold  pt-6">{card?.title}</h2>
                                <p className=" text-[13px] text-gray-500 py-2">10 June 2024 by Peter Parker</p>
                                <p className=" text-gray-500 text-justify text-[14px]">

                                    {card?.description}
                                </p>
                                <p className="text-gray-300"> -------------------------------------------------------------------</p>
                                <div className="flex justify-between  text-[13px]">
                                    <p className="font-semibold">Read More</p>
                                    <p className="">10 like</p>
                                </div>

                            </div>



                        </div>
                    </div>
                </>))}
            </div>
        </>

    );
};

export default HomeCard;