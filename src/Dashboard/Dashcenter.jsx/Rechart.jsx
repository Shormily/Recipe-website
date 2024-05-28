import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

const Rechart = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
      
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 8,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 18,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
      
    },
  ];

      const renderCustomizedLabel = (props) => {
        const { x, y, width, height, value } = props;
        const radius = 10;
      
        return (
          <g>
            <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
            <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
              {value.split(' ')[1]}
            </text>
          </g>
        );
      };
    return (
        <div className='barchart py-5 pl-5' >
          <ResponsiveContainer>
          <BarChart
          width={450}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
          // className='w-full h-full'
          
        >
          <CartesianGrid  strokeDasharray="3 3" 
              stroke="#fff" />
          <XAxis dataKey="name"   stroke="#fff" />
          <YAxis   stroke="#fff"/>
          <Tooltip  />
          <Legend />
          <Bar dataKey="pv" fill="#fff" minPointSize={5}>
            <LabelList dataKey="name"  content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="uv" fill="#ef4444" minPointSize={10} />
        </BarChart>
          </ResponsiveContainer>
          
        </div>
    );
};

export default Rechart;