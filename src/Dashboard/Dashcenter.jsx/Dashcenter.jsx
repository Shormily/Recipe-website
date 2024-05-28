import "./Dashcenter.css";
import { MdOutlineMessage } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import Rechart from "./Rechart";
import Linebar from "./Linebar";
import Doublechart from './Doublechart';

const Dashcenter = () => {
  const data = [
    { subject: "Math", A: 150, B: 150, fullMark: 180 },
    { subject: "English", A: 200, B: 160, fullMark: 40 },
    { subject: "Physics", A: 120, B: 160, fullMark: 150 },
    { subject: "History", A: 200, B: 100, fullMark: 100 },
    { subject: "Geography", A: 100, B: 100, fullMark: 0 },
    { subject: "Chinese", A: 190, B: 200, fullMark: 150 },
  ];

  return (
    <>
      <div className="flex-container bg-[#fff] max-w-[1440px]  m-auto">
        <div className="  banner-text w-full lg:w-[70%]">
          <div className="pt-8 gap-8  flex-container">
            {" "}
            <div className="cardesh">
              <p className="text-white font-normal text-center text-[16px] ">
                Avg First Reply Time
              </p>
              <p className="text-center pt-8 text-4xl">
                30 <sub className="text-[16px]">h</sub> 15{" "}
                <sub className="text-[16px]">min</sub>
              </p>
            </div>
            <div className="cardesh">
              <p className="text-white font-normal text-center text-[16px] ">
                Avg Full Resolve Time
              </p>
              <p className="text-center pt-8 text-4xl">
                22 <sub className="text-[16px]">h</sub> 40{" "}
                <sub className="text-[16px]">min</sub>
              </p>
            </div>
            <div>
              <div className="dashbtn mb-4 flex">
                <p className="px-4 pt-2 flex  ">
                  <MdOutlineMessage className="Dashicn p-2 " />{" "}
                  <small className="pt-1 ">message</small>
                  <p className=" flex pl-24 mt-1.5">
                    <span className="parcent ">-20%</span>
                  </p>
                </p>
              </div>
              <div className="dashbtn  flex">
                <p className="px-4 pt-2 flex  ">
                  <TfiEmail className="Dashicn p-2 " />{" "}
                  <small className="pt-1 ">message</small>
                  <p className=" flex pl-24 mt-1.5">
                    <span className="parcent ">+33%</span>
                  </p>
                </p>
              </div>
            </div>
          </div>
         
          
          <Linebar/>
        <Doublechart/>
        
       
        </div>
        <div className="lg:max-w-[40%]   pl-12  ">
          <div className=" mt-8 mb-8 polargrid ">
            <RadarChart
             
              cx="50%"
              cy="50%"
              outerRadius="80%"
              width={450}
              height={300}
              data={data}
              stroke="#fff" 
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" fill="#fff"
              stroke="#fff" />
              <PolarRadiusAxis angle={10} domain={[7, 150]} />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#fde047"
                fill="#fde047"
                fillOpacity={0.8}
              />
              <Radar
                name="Lily"
                dataKey="B"
                stroke="#d8b4fe"
                fill="#ef4444"
                fillOpacity={0.8}
              />
            </RadarChart>
          </div>

          <Rechart />
        </div>
      </div>
    </>
  );
};

export default Dashcenter;
