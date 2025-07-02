import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", earning: 200 },
  { month: "Feb", earning: 550 },
  { month: "Mar", earning: 230 },
  { month: "Apr", earning: 720 },
  { month: "May", earning: 370 },
  { month: "Jun", earning: 720 },
  { month: "Jul", earning: 290 },
  { month: "Aug", earning: 420 },
];

const Earnings = () => {
  return (
    <div className="bg-white p-2 rounded-xl shadow-md w-full  mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-green-900">Earnings</h2>
          <p className="text-sm text-gray-400">Top traffic channels metrics.</p>
        </div>
        <div>
          <button className="border px-4 py-1 text-sm rounded-md">Week</button>
        </div>
      </div>

      <div className="w-full h-75 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earning" fill="#6BB741" barSize={30} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Earnings;
