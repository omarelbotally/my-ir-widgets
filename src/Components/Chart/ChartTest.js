import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Open: 89",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "High: 99.9",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Low: 98.1",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Close: 99.9",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jun 8th",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const ChartTest = () => {
  return (
    <div className="chart-test"  >
      <ResponsiveContainer width="100%" height={600}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tick={{ display: "none" }} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#3f5d34" fill="#3f5d34" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTest;
