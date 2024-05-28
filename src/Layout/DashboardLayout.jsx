import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";

const DashboardLayout = () => {

    return (
        <>
            <div className="dash-design  banner-text overflow-x-auto w-full">
                <div className="flex  gap-6   h-full w-full">
                    <div>
                        <Sidebar />
                    </div>
                    <div className="m-3 text-xl w-full    font-semibold  ">

                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;