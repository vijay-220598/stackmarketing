import React from "react";
import { IconTrendingUp } from "@tabler/icons-react"; // ← Importing arrow icon
import Harbalorders from "./Harbalorder";

const herbalProducts = [
  {
    image:
      "https://www.jiomart.com/images/product/original/rvly5vcsjl/avira-tulsi-drops-natural-immunity-booster-cough-cold-panchtulsi-drop-20ml-pack-of-1-product-images-orvly5vcsjl-p596948615-0-202301051326.png?im=Resize=(420,420)",
    name: "Tulsi Drops",
    quantity: "100 ml",
    coupon: "6543",
    percent: "4.5%",
    price: "₹249",
  },
  {
    image:
      "https://organicindia.com/cdn/shop/files/Neem_Front.png?v=1748346238",
    name: "Neem Capsules",
    quantity: "60 pcs",
    coupon: "8741",
    percent: "6.2%",
    price: "₹349",
  },
  {
    image:
      "https://wallpapers.com/images/hd/forever-aloe-vera-products-lineup-q38arporsv6a72iw.jpg",
    name: "Aloe Vera Juice",
    quantity: "500 ml",
    coupon: "3210",
    percent: "5.1%",
    price: "₹299",
  },
  {
    image:
      "https://png.pngtree.com/png-vector/20240121/ourmid/pngtree-ashwagandha-is-a-traditional-herbal-remedy-avail-png-image_11505261.png",
    name: "Ashwagandha Powder",
    quantity: "250 g",
    coupon: "7625",
    percent: "4.8%",
    price: "₹199",
  },
  {
    image:
      "https://png.pngtree.com/png-vector/20240911/ourmid/pngtree-triphala-ayurvedic-powder-heap-on-transparent-backdrop-png-image_13751429.png",
    name: "Triphala Churna",
    quantity: "300 g",
    coupon: "2105",
    percent: "5.0%",
    price: "₹229",
  },
];

const Topproducts = () => {
  return (
    <div className="flex flex-row gap-5">
      <div className="rounded-lg p-6 shadow-md w-180 mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-1">
          Top Herbal Products
        </h2>
        <p className="text-gray-500 mb-4">Top Products List</p>

        <div className="space-y-4">
          {herbalProducts.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              {/* Image + Name */}
              <div className="flex items-center gap-4 w-1/4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">{item.name}</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="w-1/4 text-center">
                <p className="text-sm text-gray-400">{item.quantity}</p>
              </div>

              {/* Coupon */}
              <div className="w-1/4 text-center">
                <p className="text-sm font-medium text-gray-500">Coupon Code</p>
                <p className="font-semibold text-indigo-600">{item.coupon}</p>
              </div>

              {/* Percent + Price + Icon */}
              <div className="w-1/4 text-center flex flex-col items-center">
                <p className="text-sm font-semibold text-green-600 flex items-center gap-1">
                  {item.percent}
                </p>
                <p className="text-gray-700">{item.price}</p>
              </div>
              <IconTrendingUp className="text-green-600 text-base" />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg shadow-md w-120 mx-auto">
        <Harbalorders />
      </div>
    </div>
  );
};

export default Topproducts;
