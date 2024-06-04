
// import CountUp from 'react-countup';
import './Recipe.css'
const Recipe = () => {
  const breakfasts = [
      {
        "id": "1",
        "title": "Pad Thaier",
        "price": "10.99",
        "image": "https://i.ibb.co/CzNMkLN/dinner-3.jpg ",
        "category": "Thai",
        
      },
      {
        "id": "2",
        "title": "Beef Wellington",
        "price": "29",
        "image": "https://i.ibb.co/XSsy0GR/dinner-4.jpg",
        "category": "Mexican",
       
      },
      {
        "id": "3",
        "title": "Falafel Wrap",
        "price": "8.99",
        "image": "https://i.ibb.co/S7GvJpL/dish-3.jpg",
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
        "image": "https://www.kworldnow.com/wp-content/uploads/2021/08/Korean-desserts-2-1024x576.jpg ",
       
      },
      {
        "id": "6",
        "title": "Vegetable Stir Fry",
        "price": 9.99,
        "image": "https://i0.wp.com/ulzza.com/wp-content/uploads/2018/10/2013072917110983854_3_59_20130730072402.jpg?fit=520%2C329&ssl=1",
        "category": "Chinese",
        
      },
    
  ]

  return (
    <>

      <div className=" pt-20 pb-12">
        <h1 className='text-4xl font-bold text-center mt-5 pt-4'>Delicious Breakfast</h1>
        <img
                className=" justify-center items-center flex m-auto py-3"
                src="https://i.ibb.co/jGJmSrw/separater.png"
                alt=""
              />
        <div className="flex max-w-[1400px] m-auto   items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 pb-5 ">
          {breakfasts?.map((breakfast) => (
          <>
         <div className="pt-3  flex md:flex-row  flex-col">
                <div className=" pt-3 ">
                  <div className="group w-[250px] h-[150px] rounded-sm  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
                    <div className="h-full">
                      <img
                        className="w-[300px] h-[170px]  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 "
                        src={breakfast?.image}
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d9770640] group-hover:from-[#d9770640] group-hover:via-[#d9770640] group-hover:to-black/70"></div>
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
     

    </>
  );
};

export default Recipe;