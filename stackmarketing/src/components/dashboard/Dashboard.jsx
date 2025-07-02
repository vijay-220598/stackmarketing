import { IconArrowNarrowUp } from "@tabler/icons-react";
import React from "react";
import money from "../../../image/money.png";
import Topproducts from "./Topproducts";

const Dashboard = () => {
  const status = [
    {
      label: "Revenue",
      value: "$1280",
      change: "50.8%",
      color: "text-green-500",
      curveColor: "text-green-500",
    },
    {
      label: "Revenue",
      value: "158",
      change: "50.8%",
      color: "text-green-500",
      curveColor: "text-red-400",
    },
    {
      label: "Revenue",
      value: "358",
      change: "50.8%",
      color: "text-green-500",
      curveColor: "text-gray-600",
    },
    {
      label: "Revenue",
      value: "$89k",
      change: "50.8%",
      color: "text-green-500",
      curveColor: "text-yellow-500",
    },
  ];

  return (
    <>
      <div className="px-10">
        <div className="text-3xl text-gray-600 font-bold">
          <h2>Overview</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-100 mt-3">
          {status.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col  min-h-[120px]"
            >
              <p className="text-gray-500">{stat.label}</p>
              <div className="flex gap-3 mt-4">
                <div className="flex flex-row">
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <IconArrowNarrowUp className={`${stat.color} text-sm`} />
                    <span className={`${stat.color} text-sm`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`${stat.curveColor} text-2xl font-bold`}>
                  <img src={money} alt="money" className="w-10 h-5 mt-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Topproducts />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
