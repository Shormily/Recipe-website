import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
   
  } from 'recharts';
  import { PieChart, Pie} from 'recharts';

const Linebar = () => {
    const data = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380,
          
        },
      ];
      const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ];
    return (
        <>
        <div className='mt-12 flex-container linechat  '>
          <ResponsiveContainer  lg:width={700} md:width={200}
           height={400}>
          <ComposedChart
          
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
            
          }}
        >
          <CartesianGrid   stroke="#fff" />
          <XAxis dataKey="name" scale="band" stroke="#fff"/>
          <YAxis stroke="#fff" />
          <Tooltip stroke="#fff" />
          <Legend stroke="#fff" />
          <Area type="monotone" dataKey="amt" fill="#ef4444" stroke="#fff" />
          <Bar dataKey="pv" barSize={20} fill="#fff" />
          <Line type="monotone" dataKey="uv" stroke="#fff" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
          </ResponsiveContainer>
       
        <div className=''>
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#ef4444" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} stroke='#fde047' fill="#fff" label />
        </PieChart>
        </div>
        </div>
             
        </>
    );
};

export default Linebar;