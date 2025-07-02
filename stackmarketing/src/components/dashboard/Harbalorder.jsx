// HerbalOrders.jsx
import React from "react";

const herbalOrders = [
  {
    image:
      "https://www.jiomart.com/images/product/original/rvly5vcsjl/avira-tulsi-drops-natural-immunity-booster-cough-cold-panchtulsi-drop-20ml-pack-of-1-product-images-orvly5vcsjl-p596948615-0-202301051326.png?im=Resize=(420,420)",
    name: "Tulsi Drops",
    quantity: "500 Items",
    price: "$99.00",
    date: "5 June 2025",
  },
  {
    image:
      "https://organicindia.com/cdn/shop/files/Neem_Front.png?v=1748346238",
    name: "Neem Capsules",
    quantity: "500 Items",
    price: "$86.00",
    date: "5 June 2024",
  },
  {
    image:
      "https://wallpapers.com/images/hd/forever-aloe-vera-products-lineup-q38arporsv6a72iw.jpg",
    name: "Aloe Vera Juice",
    quantity: "500 Items",
    price: "$69.00",
    date: "5 Aug 2024",
  },
  {
    image:
      "https://png.pngtree.com/png-vector/20240121/ourmid/pngtree-ashwagandha-is-a-traditional-herbal-remedy-avail-png-image_11505261.png",
    name: "Ashwagandha Powder",
    quantity: "500 Items",
    price: "$49.00",
    date: "5 June 2023",
  },
  {
    image:
      "https://png.pngtree.com/png-vector/20240911/ourmid/pngtree-triphala-ayurvedic-powder-heap-on-transparent-backdrop-png-image_13751429.png",
    name: "Triphala Churna",
    quantity: "500 Items",
    price: "$88.00",
    date: "5 June 2024",
  },
];

const Harbalorders = () => {
  return (
    <div className="rounded-xl p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-green-800">Orders</h2>
        <select className="border p-3 rounded-md text-sm text-gray-600">
          <option>Week</option>
          <option>Month</option>
          <option>Year</option>
        </select>
      </div>

      <div className="space-y-5 mt-12">
        {herbalOrders.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
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
  );
};

export default Harbalorders;
