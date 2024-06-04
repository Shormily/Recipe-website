
import { Outlet } from 'react-router-dom';

import ScrollToTop from "react-scroll-to-top";
import { BsArrowUp } from 'react-icons/bs';

const MainLayout = () => {
    return (
        <>
        
            <Outlet />
          
            <ScrollToTop
        style={{
          boxShadow: "none",
          backgroundColor: "#eab308",
          borderRadius: "2%",
          right: 50,
          zIndex: 20,
        }}
        component={
          <BsArrowUp
            style={{ fontSize: "30px", margin: "0 auto", color: "white" }}
          />
        }
        smooth
        top={500}
      />
          
        </>
    );
};

export default MainLayout;