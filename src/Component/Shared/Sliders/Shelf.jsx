import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Grid, Navigation } from 'swiper/modules';
const Shelf = () => {
    const breakfasts = [
        {
            "id": "1",
            "title": "Rick Grimis",
            "price": "10.99",
            "image": "https://i.ibb.co/pRZ6fq7/chef-1.jpg",
            "category": "Thai",

        },
        {
            "id": "2",
            "title": "ELina Decrise",
            "price": "29",
            "image": "https://i.ibb.co/tMrJ87f/chef-2-1.jpg",
            "category": "Mexican",

        },
        {
            "id": "3",
            "title": "Santa Golue",
            "price": "8.99",
            "image": "https://i.ibb.co/fM2H52c/chef-3.jpg",
            "category": "Middle Eastern",

        },
        {
            "id": "4",
            "title": "Cold Cofee",
            "price": "7.99",
            "image": "https://i.ibb.co/pRZ6fq7/chef-1.jpg",
            "category": "French",

        },
        {
            "id": "5",
            "title": "Tikkia chop",
            "price": "13.99",
            "image": "https://i.ibb.co/tMrJ87f/chef-2-1.jpg",

        },
        {
            "id": "6",
            "title": "Vegetable Stir Fry",
            "price": 9.99,
            "image": "https://i.ibb.co/fM2H52c/chef-3.jpg",
            "category": "Chinese",

        },
        {
            "id": "7",
            "title": "Cold Cofee",
            "price": "7.99",
            "image": "https://i.ibb.co/pRZ6fq7/chef-1.jpg",
            "category": "French",

        },
        {
            "id": "8",
            "title": "Tikkia chop",
            "price": "13.99",
            "image": "https://i.ibb.co/tMrJ87f/chef-2-1.jpg",

        },
        {
            "id": "9",
            "title": "Vegetable Stir Fry",
            "price": 9.99,
            "image": "https://i.ibb.co/fM2H52c/chef-3.jpg",
            "category": "Chinese",

        },

    ]
    return (
        <div className='max-w-[1150px] m-auto pb-12'>
            <div className=""> <h1 className="text-center font-medium text-4xl  pb-4">Meet Our Passonate Chief</h1>
           
              <img
                className=" justify-center items-center flex m-auto "
                src="https://i.ibb.co/jGJmSrw/separater.png"
                alt=""
              />
             

            </div>
            <Swiper slidesPerView={3}

                grid={{
                    rows: 2,
                }}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Navigation]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    580: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    550: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    440: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    460: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    420: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    415: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    410: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    409: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    389: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    321: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    310: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    377: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    426: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    430: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >

                {breakfasts?.map((breakfast) => (
                    <>
                        <SwiperSlide className='justify-center items-center m-auto'>
                            <div className="  ">
                                <div className=" ">
                                    <div className="group my-8 rounded-full  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/10">
                                        <div className="h-full">
                                            <img
                                                className="w-full   object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125 "
                                                src={breakfast?.image}
                                                alt=""
                                            />
                                        </div>
                                        <div className="absolute inset-0 p-5 bg-gradient-to-b from-transparent via-transparent to-[#d9770640] group-hover:from-[#d9770640] group-hover:via-[#d9770640] group-hover:to-black/70"></div>
                                    </div>
                                </div>
                                <p className="mt-2  text-center font-medium px-3 ft-text  cursor-pointer">
                                    <p className="text-[20px]">{breakfast?.title}</p> 
                                  
                                    <p className='text-[#7f1d1d]'>{breakfast?.category}</p>
                                </p>
                            </div>

                        </SwiperSlide>
                    </>
                ))}

            </Swiper>
        </div>
    );
};

export default Shelf;
