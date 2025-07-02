import React from "react";
import chart from "../../../image/02.png";

const sellers = [
  {
    name: "Robert",
    purchases: "75 Purchases",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    category: "Food, Grocery",
    amount: "$2,000",
    chart: "https://ibb.co/rRL7GCNJ",
  },
  {
    name: "mark Henri",
    purchases: "75 Purchases",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    category: "Juice, Grocery",
    amount: "$1,000",
    chart: "https://i.ibb.co/tcw3tBx/chart.png",
  },
  {
    name: "Krisob Kadri",
    purchases: "75 Purchases",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    category: "Food, Grocery",
    amount: "$1,999",
    chart: "https://i.ibb.co/tcw3tBx/chart.png",
  },
  {
    name: "Koriana Joo",
    purchases: "75 Purchases",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    category: "Food, Grocery",
    amount: "$1,250",
    chart: "https://i.ibb.co/tcw3tBx/chart.png",
  },
  {
    name: "Marlee",
    purchases: "75 Purchases",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    category: "Food, Grocery",
    amount: "$5,653",
    chart: "https://i.ibb.co/tcw3tBx/chart.png",
  },
  {
    name: "John Brush",
    purchases: "75 Purchases",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    category: "Food, Grocery",
    amount: "$2,600",
    chart: "https://i.ibb.co/tcw3tBx/chart.png",
  },
  {
    name: "Robert",
    purchases: "75 Purchases",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    category: "Food, Grocery",
    amount: "$1,999",
    chart: "https://i.ibb.co/tcw3tBx/chart.png",
  },
];

const BestShopSellers = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-5 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-green-900">Best Shop Sellers</h2>
        <select className="text-sm border rounded-md px-3 py-1 text-gray-600">
          <option>Week</option>
          <option>Month</option>
        </select>
      </div>

      <p className="text-sm text-gray-400 mb-4">Top Products List</p>

      <div className="space-y-4">
        {sellers.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-2 rounded-lg hover:shadow-sm transition-all"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 w-1/3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm text-gray-800 capitalize">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400">{item.purchases}</p>
              </div>
            </div>

            {/* Category */}
            <div className="w-1/3 text-sm text-gray-700">{item.category}</div>

            {/* Amount + Chart */}
            <div className="flex items-center gap-5 justify-end w-1/3">
              <p className="text-sm font-semibold text-gray-800">
                {item.amount}
              </p>
              <img
                src={chart}
                alt="chart"
                className="w-15 h-10 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestShopSellers;
