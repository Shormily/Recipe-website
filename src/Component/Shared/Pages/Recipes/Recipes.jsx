
import CountUp from 'react-countup';
import './Recipe.css'
const Recipe = () => {
  const breakfasts = [
    
      {
        "id": "1",
        "title": "Pad Thaier",
        "price": "10.99",
        "image": "https://www.savingdessert.com/wp-content/uploads/2018/05/Grilled-Lobster-Tails-9.jpg",
        "category": "Thai",
        
      },
      {
        "id": "2",
        "title": "Beef Wellington",
        "price": "29",
        "image": "https://media.istockphoto.com/photos/chinese-fried-rice-with-chicken-side-dish-directly-above-photo-picture-id1169703771?k=20&m=1169703771&s=612x612&w=0&h=7H5MJP3AzaymbQ1ZP-olTvRK9wtH81SnviVCdSWawsw=",
        "category": "Mexican",
       
      },
      {
        "id": "3",
        "title": "Falafel Wrap",
        "price": "8.99",
        "image": "https://www.mashed.com/img/gallery/the-best-chinese-food-ranked/the-very-best-veggie-spring-rolls-are-a-hard-item-to-beat-1607972904.jpg",
        "category": "Middle Eastern",
        
      },
      {
        "id": "4",
        "title": "Cold Cofee",
        "price": "7.99",
        "image": "https://i.dailymail.co.uk/1s/2018/11/01/18/5668494-0-image-a-4_1541098633929.jpg",
        "category": "French",
       
      },
      {
        "id": "5",
        "title": "Tikkia chop",
        "price": "13.99",
        "image": "https://hamariweb.com/recipes/images/recipeimages/6914.jpg",
       
      },
      {
        "id": "6",
        "title": "Vegetable Stir Fry",
        "price": 9.99,
        "image": "https://content.instructables.com/ORIG/F4B/77Q8/KQNRYADO/F4B77Q8KQNRYADO.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=150",
        "category": "Chinese",
        
      },
      {
        "id": "7",
        "title": "Cat Fish",
        "price": "16.99",
        "image": "https://media.cntraveler.com/photos/5f63b787978ff785b25015e7/master/w_4202,h_2796,c_limit/Schezwan%20Prawns-2A4D9JC.jpg",
        "category": "Indian",
        
      },
      {
        "id": "8",
        "title": "Fruit Salad",
        "price": "17.99",
        "image": "https://sunkissedkitchen.com/wp-content/uploads/2020/03/dragon-fruit-salad-RC.jpg",
        "category": "Indian",
       
      },
    
  ]
  return (
    <>

      <div className="bg-gray-100 pt-20 pb-12">
        <h1 className='text-4xl font-bold text-center mt-5 py-4'>Delicious Breakfast</h1>
        <div className="flex max-w-[1400px] m-auto   items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 pb-5">
          {breakfasts?.map((breakfast) => (
          <>
         <div className="pt-3  flex">
                <div className=" pt-3 ">
                  <div className="group w-[210px] h-[160px]  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
                    <div className="h-full">
                      <img
                        className="w-[220px] h-[200px]  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 "
                        src={breakfast?.image}
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  </div>
                </div>
                <p className="text-justify  pt-5 font-medium px-3 ft-text hover:text-[#7f1d1d] cursor-pointer">
                  <p className="text-[20px]">{breakfast?.title}</p> <br />
                  Lecture: Towards <br /> a silent aircraft
                  <br />
                <p className='pt-4'>From <span className='font-2xl pt-2'>${breakfast?.price}</span></p>  
                </p>
              </div>
         
         
          </>
          ))}
            {/* Extra Important */}
            {/* <div className="bg-white mx-5 ">
              <div className="ml-5"></div>
              <p className="text-center ft-text text-[13px] mt-12">
                SMART BY THE NUMBER
              </p>
              <div className="max-w-[70px] m-auto pt-5">
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#7f1d1d",
                    height: "1px",
                    marginBottom: "30px",
                  }}
                />
              </div>
              <div>
                <p className="text-5xl study-num  text-center text-[#002147]">
                  <CountUp end={89} duration={90} className="countup-font" />%
                </p>
                <p className=" text-center study-num">of class of 2014</p>
                <p className="text-center text-gray-400 ft-text text-[13px]">
                  bachelor’s recipients were <br /> employed
                </p>
              </div>
              <div className="pt-12">
                <p className="text-5xl study-num  text-center text-[#002147]">
                  <CountUp end={89} duration={90} className="countup-font" />%
                </p>
                <p className=" text-center study-num">of employed 2014</p>
                <p className="text-center text-gray-400 ft-text text-[13px]">
                  graduates hold a position <br /> related to their degree
                </p>
              </div>
              <div className="pt-12 pb-8 ">
                <p className="text-5xl study-num  text-center text-[#002147]">
                  <CountUp end={3042} duration={90} className="countup-font" />%
                </p>
                <p className=" text-center study-num">students</p>
                <p className="text-center text-gray-400 ft-text text-[13px] pb-8">
                  overall student-athlete <br /> GPA for Spring 2016{" "}
                </p>
              </div>
            </div>  */}
            {/* Extra important end */}


        </div>
      
          
        </div>
      </div>
      {/* <div className="bg-[#e3e7ea] pt-12 pb-12">
        <div className="study-num max-w-[1400px] m-auto ">
          <h1 className="text-4xl pb-8 px-12 mx-3 pt-12 ">Studying at Smart</h1>
          <div className="study-cardes">

            <section className=" px-4">
              <div className="grided  px-1">
                <div className="cardes ">
                  <div className="img-box">
                    <img className="w-full" src="https://i.ibb.co/TPhKV6B/img10.jpg" alt="" />
                  </div>
                  <div className="cardes-content">
                    <h1 className="cardes-heading">Undergraduate Admissions</h1>
                    <p className="cardes-text ">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
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
                <div className="cardes">
                  <div className="img-box">
                    <img className="w-full" src="https://i.ibb.co/ZNY3ynC/img11-1.jpg" alt="" />
                  </div>
                  <div className="cardes-content">
                    <h1 className="cardes-heading">Graduation Admissions</h1>
                    <p className="cardes-text ">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
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
                <div className="cardes">
                  <div className="img-box">
                    <img src="https://i.ibb.co/55v4dzd/img12-1.jpg" alt="" />
                  </div>
                  <div className="cardes-content">
                    <h1 className="cardes-heading">Continuing Education</h1>
                    <p className="cardes-text ">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
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
                <div className="cardes">
                  <div className="img-box">
                    <img className="w-full" src="https://i.ibb.co/ZNY3ynC/img11-1.jpg" alt="" />
                  </div>
                  <div className="cardes-content">
                    <h1 className="cardes-heading">Graduation Admissions</h1>
                    <p className="cardes-text ">Christopher Kane is the 23rd president of Smart University, and the Chris Argyris</p>
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
              </div>
            </section>
          </div>

        </div>

      </div> */}

    </>
  );
};

export default Recipe;