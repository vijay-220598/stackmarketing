// HerbalOrders.jsx
import React from "react";
import TopCountriesSales from "./TopCountriesSales";
import BestShopSellers from "./BestShopSellers";

const herbalOrders = [
  {
    image:
      "https://png.pngtree.com/png-clipart/20250103/original/pngtree-oatmeal-on-a-bowl-isolate-transparent-background-png-image_18674743.png",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    price: "$99.00",
    date: "5 June 2025",
  },
  {
    image:
      "https://w7.pngwing.com/pngs/513/987/png-transparent-quaker-instant-oatmeal-breakfast-cereal-quaker-oats-company-breakfast-food-breakfast-recipe-thumbnail.png",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    price: "$86.00",
    date: "5 June 2024",
  },
  {
    image: "https://www.pngmart.com/files/22/Oats-PNG-Free-Download.png",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    price: "$69.00",
    date: "5 Aug 2024",
  },
  {
    image:
      "https://www.pepsicoproductfacts.com/content/image/products/3338ecee794de911_00030000570425_C1L1.png?r=20250616",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    price: "$90.00",
    date: "5 June 2024",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMEmwpK-U1xCzvDHS2g8p27Fu69VxmPYJvAUxcVjsXG_yoFFoSevU7XTa3kBIVJyNV-z0&usqp=CAU",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    price: "$49.00",
    date: "5 June 2023",
  },
  {
    image:
      "https://wallpapers.com/images/hd/quaker-instant-oatmeal-regular-box-fj1twanpqofw9otc.jpg",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    price: "$88.00",
    date: "5 June 2024",
  },

  {
    image:
      "https://storage.googleapis.com/images-lnb-prd-8936dd0.lnb.prd.v8.commerce.mi9cloud.com/product-images/zoom/00030000567319.png",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    price: "$75.00",
    date: "22 may 2024",
  },
];

const Harbalorders = () => {
  return (
    <div className="flex flxe-row gap-3 ">
      <div className="bg-gray-50 rounded-xl p-6 w-130 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-green-800">Orders</h2>
          <select className="text-sm border rounded-md px-3 py-1 text-gray-600">
            <option>Week</option>
            <option>Month</option>
            <option>Year</option>
          </select>
        </div>
        <div className="space-y-5 mt-12">
          {herbalOrders.map((item, index) => (
            <div key={index} className="flex items-center justify-between ">
              {/* Image + Name + Quantity */}
              <div className="flex items-center gap-4 w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800 truncate max-w-[150px]">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-400">{item.quantity}</p>
                </div>
              </div>

              {/* Price */}
              <div className="w-1/4 text-right font-semibold text-gray-800">
                {item.price}
              </div>

              {/* Date */}
              <div className="w-1/4 text-right text-sm text-gray-600">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg shadow-md w-150 mx-auto">
        <BestShopSellers />
      </div>
    </div>
  );
};

export default Harbalorders;
