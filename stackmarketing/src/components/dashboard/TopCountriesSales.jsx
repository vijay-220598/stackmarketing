import React from "react";
import { IconTrendingUp } from "@tabler/icons-react"; 

const countrySales = [
  {
    flag: "https://flagcdn.com/w40/us.png",
    name: "USA",
    sales: "6,546",
    date: "04 Jul 2024",
  },
  {
    flag: "https://flagcdn.com/w40/fr.png",
    name: "France",
    sales: "6,546",
    date: "04 Jul 2024",
  },
  {
    flag: "https://flagcdn.com/w40/in.png",
    name: "India",
    sales: "6,546",
    date: "04 Jul 2024",
  },
  {
    flag: "https://flagcdn.com/w40/de.png",
    name: "Germany",
    sales: "6,546",
    date: "04 Jul 2024",
  },
  {
    flag: "https://flagcdn.com/w40/jp.png",
    name: "Japan",
    sales: "6,546",
    date: "04 Jul 2024",
  },
  {
    flag: "https://flagcdn.com/w40/kr.png",
    name: "Korea",
    sales: "6,546",
    date: "04 Jul 2024",
  },
  {
    flag: "https://flagcdn.com/w40/ca.png",
    name: "Canada",
    sales: "6,546",
    date: "04 Jul 2024",
  },
  {
    flag: "https://flagcdn.com/w40/bt.png",
    name: "Bhutan",
    sales: "6,546",
    date: "04 Jul 2024",
  },
];

const TopCountriesSales = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-5 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-green-900">
          Top Countries Sales
        </h2>
        <select className="text-sm border rounded-md px-3 py-1 text-gray-600">
          <option>Week</option>
          <option>Month</option>
        </select>
      </div>

      <p className="text-sm text-gray-400 mb-4">Top Products List</p>

      <div className="space-y-4">
        {countrySales.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2">
            {/* Flag + Country Name */}
            <div className="flex items-center gap-2 w-1/3">
              <img
                src={item.flag}
                alt={item.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-sm font-medium text-gray-700 capitalize truncate">
                {item.name}
              </p>
            </div>

            {/* Growth Icon */}
            <div className="text-green-600">
              <IconTrendingUp className="text-sm" />
            </div>

            {/* Sales */}
            <div className="text-sm font-medium text-gray-800">
              {item.sales}
            </div>

            {/* Date */}
            <div className="text-sm text-gray-500">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCountriesSales;
