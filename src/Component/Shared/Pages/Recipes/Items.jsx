

const Items = () => {
    const breakfasts = [
        {
          "id": "1",
          "title": "Pad Thaier",
          "price": "10.99",
          "image": "https://i.ibb.co/K61QZFD/breakfast-1.jpg",
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
          "image": "https://i.ibb.co/86Gk25Y/breakfast-7.jpg",
          "category": "Middle Eastern",
          
        },
        {
          "id": "4",
          "title": "Cold Cofee",
          "price": "7.99",
          "image": "https://i.ibb.co/CzNMkLN/dinner-3.jpg",
          "category": "French",
         
        },
        {
          "id": "5",
          "title": "Tikkia chop",
          "price": "13.99",
          "image": "https://i.ibb.co/P5ZnhHM/breakfast-6.jpg",
         
        },
        {
          "id": "6",
          "title": "Vegetable Stir Fry",
          "price": 9.99,
          "image": "https://i.ibb.co/5MhtKSd/breakfast-8.jpg",
          "category": "Chinese",
          
        },
      
    ]
    const dinners = [
        {
          "id": "1",
          "title": "Pad Thaier",
          "price": "10.99",
          "image": "https://i.ibb.co/qgt4rCX/dish-14.jpg",
          "category": "Thai",
          
        },
        {
          "id": "2",
          "title": "Beef Wellington",
          "price": "29",
          "image": "https://i.ibb.co/n8cZh97/dish-15.jpg",
          "category": "Mexican",
         
        },
        {
          "id": "3",
          "title": "Falafel Wrap",
          "price": "8.99",
          "image": "https://i.ibb.co/SB9ScjF/dish-16.jpg",
          "category": "Middle Eastern",
          
        },
        {
          "id": "4",
          "title": "Cold Cofee",
          "price": "7.99",
          "image": "https://i.ibb.co/qgt4rCX/dish-14.jpg",
          "category": "French",
         
        },
        {
          "id": "5",
          "title": "Tikkia chop",
          "price": "13.99",
          "image": "https://i.ibb.co/ykgNLhD/dish-18.jpg",
         
        },
        {
          "id": "6",
          "title": "Vegetable Stir Fry",
          "price": 9.99,
          "image": "https://i.ibb.co/XSsy0GR/dinner-4.jpg",
          "category": "Chinese",
          
        },
      
    ]
    return (
        <>
            <div className="bg-[#d1d5db4b] pt-20 pb-12">
        <h1 className='text-4xl font-bold text-center mt-5 pt-4'>Delicious Lunch</h1>
        <img
                className=" justify-center items-center flex m-auto py-3"
                src="https://i.ibb.co/jGJmSrw/separater.png"
                alt=""
              />
        <div className="flex max-w-[1400px] m-auto   items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 pb-5 ">
          {breakfasts?.map((breakfast) => (
          <>
         <div className="pt-3 felx-row">
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
                <p className="text-justify  pt-3 font-medium px-3 ft-text hover:text-[#7f1d1d] cursor-pointer">
                          <p className="text-[20px]">{breakfast?.title}</p>
                          <p className='pt-2'>Price <span className='font-2xl pt-2'>${breakfast?.price}</span></p>    
              <p className="py-1"> Lecture: Towards  a <br />silent aircraft</p>   
                  <br />
                
                </p>
              </div>
         
         
          </>
          ))}
          


        </div>
      
          
        </div>
            </div>
            <div className=" pt-20 pb-12">
        <h1 className='text-4xl font-bold text-center mt-5 pt-4'>Delicious Dinner</h1>
        <img
                className=" justify-center items-center flex m-auto py-3"
                src="https://i.ibb.co/jGJmSrw/separater.png"
                alt=""
              />
        <div className="flex max-w-[1400px] m-auto   items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 pb-5 ">
          {dinners?.map((dinner) => (
          <>
         <div className="pt-3  flex md:flex-row  flex-col">
                <div className=" pt-3 ">
                  <div className="group w-[250px] h-[150px] rounded-sm  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
                    <div className="h-full">
                      <img
                        className="w-[300px] h-[170px]  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 "
                        src={dinner?.image}
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d9770640] group-hover:from-[#d9770640] group-hover:via-[#d9770640] group-hover:to-black/70"></div>
                  </div>
                </div>
                <p className="text-justify  pt-5 font-medium px-3 ft-text hover:text-[#7f1d1d] cursor-pointer">
                  <p className="text-[20px]">{dinner?.title}</p> <br />
                  Lecture: Towards <br /> a silent aircraft
                  <br />
                <p className='pt-4'>From <span className='font-2xl pt-2'>${dinner?.price}</span></p>  
                </p>
              </div>
         
         
          </>
          ))}
          


        </div>
      
          
        </div>
      </div>
        </>
    );
};

export default Items;