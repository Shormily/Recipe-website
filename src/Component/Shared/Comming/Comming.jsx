
import { Link } from 'react-router-dom';
import Naves from '../Navbars/Naves';

const Comming = () => {
    return (
        <>
            <Naves />
            <div className="homes">

                <div className="h-[90vh] justify-center items-center flex">
                    <div className=" text-center  text-white">
                        <h1 className='text-6xl text-white mb-2'>Comming Soon</h1>
                        <button className="bg-[#14532d] px-8  w-64 cursor-pointer  py-4 my-10 text-sm font-bold text-[#fff] hover:bg-[#000] hover:text-[#fff]">
                        <Link to={'/'} className="hover:opacity-50 nav-link cursor-default text-[20px]">
                           Back To Home
                        </Link>
                       
            </button>
                       
                    </div>
                    <br />

                </div>
            </div>

        </>
    );
};

export default Comming;