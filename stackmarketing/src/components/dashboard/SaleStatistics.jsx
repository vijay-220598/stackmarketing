import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Earnings from "./Earnings";

const data = [
  { month: "Jan", sales: 20, visitors: 35, products: 30 },
  { month: "Feb", sales: 25, visitors: 50, products: 40 },
  { month: "Mar", sales: 35, visitors: 55, products: 25 },
  { month: "Apr", sales: 40, visitors: 45, products: 60 },
  { month: "May", sales: 28, visitors: 60, products: 45 },
  { month: "Jun", sales: 38, visitors: 52, products: 80 },
  { month: "Jul", sales: 55, visitors: 75, products: 20 },
  { month: "Aug", sales: 45, visitors: 60, products: 40 },
  { month: "Sep", sales: 50, visitors: 70, products: 0 },
];

const SaleStatistics = () => {
  return (
    <>
      <div className="flex flex-row gap-5">
        <div className="bg-white p-4 rounded-xl shadow-md  w-160">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-xl font-bold text-green-900">
                Sale Statistics
              </h2>
              <p className="text-sm text-gray-400">
                Top traffic channels metrics.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-green-600 text-white rounded">
                Week
              </button>
              <button className="px-3 py-1 text-sm border rounded">
                Month
              </button>
              <button className="px-3 py-1 text-sm border rounded">Year</button>
            </div>
          </div>

          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#6BB741"
                  strokeWidth={2}
                  dot
                />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="#2F4225"
                  strokeWidth={2}
                  dot
                />
                <Line
                  type="monotone"
                  dataKey="products"
                  stroke="#FC9154"
                  strokeWidth={2}
                  dot
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="w-140">
          <Earnings />
        </div>
      </div>
    </>
  );
};

export default SaleStatistics;
