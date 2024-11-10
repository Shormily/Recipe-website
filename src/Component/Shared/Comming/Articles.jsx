import { Link } from "react-router-dom";
import Naves from "../Navbars/Naves";
import Footer from "../Footer";


const Articles = () => {
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
            "image": "https://i.ibb.co/nCcQbFf/WK36-Lamb-small.png",

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

            <Naves />

            <div className="product-about"></div>



            <div className=" gap-12 justify-center items-center m-auto  max-w-[1200px]  px-8">
            <h1 className='text-4xl font-bold text-center pt-12'>Articles For Resturent</h1>
        <img
                className=" justify-center items-center flex m-auto py-3 pb-8"
                src="https://i.ibb.co/jGJmSrw/separater.png"
                alt=""
              />
                <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-4 pb-8">
                    {breakfasts?.map((breakfast) => (
                        <>
                            <img className="p-1 shadow-lg bg-gray-100 h-32 w-full" src={breakfast?.image} alt="product image" />
                        </>
                    ))}
                </div>
                <div className="">
                    <img className="p-2 shadow-lg bg-gray-100 h-full w-full" src="https://i.ibb.co/Yj4v4Ft/dish-5.jpg" alt="product image" />
                </div>
                <div className="">
                    <h1 className="text-4xl font-medium py-12">Articles For Resturent</h1>
                    <div className="mb-24">

                        <p className="text-lg font-normal  text-[15px] m-auto text-justify max-w-[1200px] pt-1">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom lineLeverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User Generated content in real-time will have multiple touchpoints for offshoring.

                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the Information highway will close the loop on focusing solely on hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs fromthe bottom line..</p>
                        <br />
                        <p className="text-lg font-normal  text-[15px] m-auto text-justify max-w-[1200px] pt-1">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom lineLeverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User Generated content in real-time will have multiple touchpoints for offshoring.

                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the Information highway will close the loop on focusing solely on hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs fromthe bottom line..</p>

                        <br />
                        <p className="text-lg font-normal  text-[15px] m-auto text-justify max-w-[1200px] pt-1">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom lineLeverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User Generated content in real-time will have multiple touchpoints for offshoring.

                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the Information highway will close the loop on focusing solely on hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs fromthe bottom line..</p>
                    </div>

                </div>
            </div>

            <div className="product-about"></div>
            <Footer />
        </>
    );
};

export default Articles;
