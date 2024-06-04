import { FaSearchPlus } from "react-icons/fa";

const Gallery = () => {
  const breakfasts = [
    {
      "id": "1",
      "title": "Pad Thaier",
      "price": "10.99",
      "image": "https://i.ibb.co/zhLg0GL/17.jpg",
      "category": "Thai",

    },
    {
      "id": "2",
      "title": "Beef Wellington",
      "price": "29",
      "image": "https://i.ibb.co/pjxQnzZ/15.jpg",
      "category": "Mexican",

    },

    {
      "id": "4",
      "title": "Cold Cofee",
      "price": "7.99",
      "image": "https://i.ibb.co/Bn5F8Bh/13.jpg",
      "category": "French",

    },
    {
      "id": "5",
      "title": "Tikkia chop",
      "price": "13.99",
      "image": "https://i.ibb.co/rkSZVJj/11.jpg",

    },
    {
      "id": "6",
      "title": "Vegetable Stir Fry",
      "price": 9.99,
      "image": "https://i.ibb.co/5MhtKSd/breakfast-8.jpg",
      "category": "Chinese",

    },
    {
      "id": "6",
      "title": "Vegetable Stir Fry",
      "price": 9.99,
      "image": "https://i.ibb.co/RHyXf4j/10.jpg",
      "category": "Chinese",

    },
    {
      "id": "3",
      "title": "Falafel Wrap",
      "price": "8.99",
      "image": "https://i.ibb.co/ydz1S0d/14.jpg",
      "category": "Middle Eastern",

    },
    {
      "id": "6",
      "title": "Vegetable Stir Fry",
      "price": 9.99,
      "image": "https://i.ibb.co/b7GGK4W/9.jpg",
      "category": "Chinese",

    },

  ]
  return (
    <>
      <section className="">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-0 justify-center items-center m-auto px-1">
          {breakfasts?.map((breakfast) => (
            <>
              <div className="cardes ">
                <div className="img-box">
                  <img className="w-full " src={breakfast?.image} alt="" />
                </div>
                <div className="cardes-content  ">
                  <h1 className="cardes-heading text-center">{breakfast?.title}</h1>
                  <p className="cardes-text mt-24">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
                  <h3 className="text-[15px] text-white mx-5 pb-3">Read More</h3>
                  <div className="mr-48 px-4  ">
                    <div
                      style={{
                        // justifyContent: "center",
                        // alignItems: "center",
                        backgroundColor: "#fff",
                        height: "2px",

                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
      {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-0 justify-center items-center m-auto">
          {breakfasts?.map((breakfast) => (
            <>

              <div className="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
                <div className="h-full">
                  <img
                    className=" w-full  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 imgs"
                    src={breakfast?.image}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    <FaSearchPlus />
                  </h1>
                </div>
              </div>
            </>
          ))}
        </div>   */}
    </>
  );
};

export default Gallery;