import { Link } from "react-router-dom";
import Naves from "../Navbars/Naves";
import Footer from "../Footer";


const Reservation = () => {
    const reservations = [
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
    const breakfasts = [
        {
            name: "Pastries",
            price: "$25",
           
        },
        {
            name: "Cromesouis",
            price: "$55",
           
        }, {
            name: "Soupe ",
            price: "$35",
           
        }, {
            name: "Bouillabaisse",
            price: "$45",
           
        }, {
            name: "  Croissant",
            price: "$19",
           
        }, {
            name: "Baguette",
            price: "$65",
           
        }, {
            name: "Canard",
            price: "$75",
           
        }, {
            name: "Vegetarian",
            price: "$25",
           
        }, {
            name: "Risotto ",
            price: "$45",
           
        },

    ]
    return (
        <>
            <Naves/>
            <div className="home-sections">
            <div className=" ">
            <p className="text-center mt-12 justify-center m-auto items-center text-5xl text-white font-bold">Reservation</p>



            <div className="justify-center gap-1 text-white items-center m-auto flex mt-8">
              <Link to={'/'} className="hover:opacity-50 nav-link cursor-default">
                Home  /
              </Link>
              <Link to={'/reservation'}>
                Reservation
              </Link>
            </div>

          </div>
            </div>
            <div className="py-12">
                <h1 className="text-center text-4xl font-semibold py-3 pt-5">
                    Always Delicious
                </h1>
                <img
                    className=" justify-center items-center flex m-auto pt-3"
                    src="https://i.ibb.co/jGJmSrw/separater.png"
                    alt=""
                />
                <div className="max-w-[1400px] m-auto">
                    <div className="grid md:grid-cols-3 gap-12 grid-cols-1 px-5">
                        {breakfasts?.map((breakfast) => (<>
                            <div className=" flex md:flex-row  flex-col gap-4">
                                <div className="">{breakfast?.name}</div>
                            <div className="w-full  m-auto  ">
                                <div
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#d4d4d8",
                                        height: "2px",
                                    }}
                                />
                            </div>
                                <div className="">{breakfast?.price}
                                
                                </div>
                                
                     </div>
                        </>))}
                       

                    </div>
                    
               
                </div>


        </div>
        <h1 className="text-center text-4xl font-semibold pt-5">
                   Reservation Food
                </h1>
                <img
                    className=" justify-center items-center flex m-auto py-3"
                    src="https://i.ibb.co/jGJmSrw/separater.png"
                    alt=""
                />
           <div className="flex max-w-[1400px] m-auto  mb-24 items-center justify-center"><div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-5 ">
            {reservations?.map((reservation) => (
              <>
                
         <div className="pt-3   flex md:flex-row  flex-col">
                <div className=" pt-3 ">
                  <div className="group w-[250px] h-[150px] rounded-sm  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
                    <div className="h-full">
                      <img
                        className="w-[300px] h-[170px]  object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 "
                        src={reservation?.image}
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d9770640] group-hover:from-[#d9770640] group-hover:via-[#d9770640] group-hover:to-black/70"></div>
                  </div>
                </div>
                <p className="text-justify  pt-5 font-medium px-3 ft-text hover:text-[#7f1d1d] cursor-pointer">
                  <p className="text-[20px]">{reservation?.title}</p> <br />
                  Lecture: Towards <br /> a silent aircraft
                  <br />
                <p className='pt-4'>From <span className='font-2xl pt-2'>${reservation?.price}</span></p>  
                </p>
              </div>
         
         
          </>
          ))}
            </div></div>
            
            <Footer/>
        </>
    );
};

export default Reservation;