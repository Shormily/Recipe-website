import Footer from '../Component/Shared/Footer';
import { Outlet } from 'react-router-dom';
import Naves from '../Component/Shared/Navbars/Naves';

const MainLayout = () => {
    return (
        <>
           {/* <Naves/> */}
            <Outlet/>
           {/* <Footer/>  */}
        </>
    );
};

export default MainLayout;