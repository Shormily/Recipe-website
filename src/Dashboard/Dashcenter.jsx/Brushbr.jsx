import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from 'recharts';
  
  

const Brushbr = () => {
    const data01 = [
        { x: 10, y: 30 },
        { x: 30, y: 200 },
        { x: 45, y: 100 },
        { x: 50, y: 400 },
        { x: 70, y: 150 },
        { x: 100, y: 250 },
      ];
      const data02 = [
        { x: 30, y: 20 },
        { x: 50, y: 180 },
        { x: 75, y: 240 },
        { x: 100, y: 100 },
        { x: 120, y: 190 },
      ];
    return (
        <>
         <ResponsiveContainer width="100%" height={290}><ScatterChart
          margin={{
            top: 10,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {/* <CartesianGrid /> */}
          <XAxis type="number" dataKey="x"  name="stature" unit="cm" stroke="#fff"/>
          <YAxis type="number"  dataKey="y" name="weight" unit="kg" stroke="#fff"/>
          <ZAxis type="number" range={[100]} stroke="#fff"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data01} fill="#fff" line shape="cross" />
          <Scatter name="B school" data={data02} fill="#ef4444" line shape="diamond" />
        </ScatterChart></ResponsiveContainer>
         
        </>
    );
};

export default Brushbr;