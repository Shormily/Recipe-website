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
        {
            "id": "7",
            "title": "Cold Cofee",
            "price": "7.99",
            "image": "https://i.dailymail.co.uk/1s/2018/11/01/18/5668494-0-image-a-4_1541098633929.jpg",
            "category": "French",
           
          },
          {
            "id": "8",
            "title": "Tikkia chop",
            "price": "13.99",
            "image": "https://www.kworldnow.com/wp-content/uploads/2021/08/Korean-desserts-2-1024x576.jpg ",
           
          },
          {
            "id": "9",
            "title": "Vegetable Stir Fry",
            "price": 9.99,
            "image": "https://i0.wp.com/ulzza.com/wp-content/uploads/2018/10/2013072917110983854_3_59_20130730072402.jpg?fit=520%2C329&ssl=1",
            "category": "Chinese",
            
          },
      
    ]
    return (
        <div className='max-w-[1150px] m-auto'>
            <Swiper   slidesPerView={3}
               
               grid={{
                 rows: 2,
               }}
               spaceBetween={20}
               pagination={{
                 clickable: true,
               }}
               modules={[Grid,Navigation]}
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
                 460:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 420:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 415:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 410:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 409:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 400:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 389:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 321:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 310:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 377:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 426:{
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 430:{
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
                <SwiperSlide>
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
                    </SwiperSlide>
        <SwiperSlide><img className='rounded-full' src="https://i.ibb.co/pRZ6fq7/chef-1.jpg" alt="chef-1"/></SwiperSlide>
        <SwiperSlide><img className='rounded-full ' src="https://i.ibb.co/tMrJ87f/chef-2-1.jpg" alt="chef-1"/></SwiperSlide>
        <SwiperSlide><img className='rounded-full' src="https://i.ibb.co/fM2H52c/chef-3.jpg" alt="chef-1"/></SwiperSlide>
        <SwiperSlide><img className='rounded-full' src="https://i.ibb.co/pRZ6fq7/chef-1.jpg" alt="chef-1"/></SwiperSlide>
        <SwiperSlide><img className='rounded-full' src="https://i.ibb.co/tMrJ87f/chef-2-1.jpg" alt="chef-1"/></SwiperSlide>
        <SwiperSlide><img className='rounded-full' src="https://i.ibb.co/fM2H52c/chef-3.jpg" alt="chef-1"/></SwiperSlide> <SwiperSlide><img className='rounded-full' src="https://i.ibb.co/pRZ6fq7/chef-1.jpg" alt="chef-1"/></SwiperSlide>
        <SwiperSlide><img className='rounded-full' src="https://i.ibb.co/tMrJ87f/chef-2-1.jpg" alt="chef-1"/></SwiperSlide>
        <SwiperSlide><img className='rounded-full' src="https://i.ibb.co/fM2H52c/chef-3.jpg" alt="chef-1"/></SwiperSlide>
      </Swiper> 
        </div>
    );
};

export default Shelf;
