// import React from "react";
// import { IconTrendingUp } from "@tabler/icons-react"; // ← Importing arrow icon
// import Harbalorders from "./Harbalorder";

// const herbalProducts = [
//   {
//     image:
//       "https://www.jiomart.com/images/product/original/rvly5vcsjl/avira-tulsi-drops-natural-immunity-booster-cough-cold-panchtulsi-drop-20ml-pack-of-1-product-images-orvly5vcsjl-p596948615-0-202301051326.png?im=Resize=(420,420)",
//     name: "Tulsi Drops",
//     quantity: "100 ml",
//     coupon: "6543",
//     percent: "4.5%",
//     price: "₹249",
//   },
//   {
//     image:
//       "https://organicindia.com/cdn/shop/files/Neem_Front.png?v=1748346238",
//     name: "Neem Capsules",
//     quantity: "60 pcs",
//     coupon: "8741",
//     percent: "6.2%",
//     price: "₹349",
//   },
//   {
//     image:
//       "https://wallpapers.com/images/hd/forever-aloe-vera-products-lineup-q38arporsv6a72iw.jpg",
//     name: "Aloe Vera Juice",
//     quantity: "500 ml",
//     coupon: "3210",
//     percent: "5.1%",
//     price: "₹299",
//   },
//   {
//     image:
//       "https://png.pngtree.com/png-vector/20240121/ourmid/pngtree-ashwagandha-is-a-traditional-herbal-remedy-avail-png-image_11505261.png",
//     name: "Ashwagandha Powder",
//     quantity: "250 g",
//     coupon: "7625",
//     percent: "4.8%",
//     price: "₹199",
//   },
//   {
//     image:
//       "https://png.pngtree.com/png-vector/20240911/ourmid/pngtree-triphala-ayurvedic-powder-heap-on-transparent-backdrop-png-image_13751429.png",
//     name: "Triphala Churna",
//     quantity: "300 g",
//     coupon: "2105",
//     percent: "5.0%",
//     price: "₹229",
//   },
// ];

// const Topproducts = () => {
//   return (
//     <div className="flex flex-row gap-5">
//       <div className="rounded-lg p-6 shadow-md w-180 mx-auto">
//         <h2 className="text-2xl font-bold text-green-800 mb-1">
//           Top Products
//         </h2>
//         <p className="text-gray-500 mb-4">Top Products List</p>

//         <div className="space-y-4">
//           {herbalProducts.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
//             >
//               {/* Image + Name */}
//               <div className="flex items-center gap-4 w-1/4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-14 h-14 rounded object-cover"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-700 text-sm">{item.name}</p>
//                 </div>
//               </div>

//               {/* Quantity */}
//               <div className="w-1/4 text-center">
//                 <p className="text-sm text-gray-400">{item.quantity}</p>
//               </div>

//               {/* Coupon */}
//               <div className="w-1/4 text-center">
//                 <p className="text-sm font-medium text-gray-500">Coupon Code</p>
//                 <p className="font-semibold text-indigo-600">{item.coupon}</p>
//               </div>

//               {/* Percent + Price + Icon */}
//               <div className="w-1/4 text-center flex flex-col items-center">
//                 <p className="text-sm font-semibold text-green-600 flex items-center gap-1">
//                   {item.percent}
//                 </p>
//                 <p className="text-gray-700">{item.price}</p>
//               </div>
//               <IconTrendingUp className="text-green-600 text-base" />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="rounded-lg shadow-md w-120 mx-auto">
//         <Harbalorders />
//       </div>
//     </div>
//   );
// };

// export default Topproducts;

// TopProducts.jsx
import React from "react";
import { IconTrendingUp } from "@tabler/icons-react"; // Up arrow icon
import Harbalorders from "./Harbalorder";
import TopCountriesSales from "./TopCountriesSales";
import BestShopSellers from "./BestShopSellers";

const topProducts = [
  {
    image:
      "https://png.pngtree.com/png-clipart/20250103/original/pngtree-oatmeal-on-a-bowl-isolate-transparent-background-png-image_18674743.png",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    coupon: "2415",
    brandLogo:
      "https://static.vecteezy.com/system/resources/previews/035/767/491/non_2x/food-logo-silhouette-black-color-illustration-vector.jpg",
    percent: "5.29%",
    price: "$79.00",
  },
  {
    image:
      "https://w7.pngwing.com/pngs/513/987/png-transparent-quaker-instant-oatmeal-breakfast-cereal-quaker-oats-company-breakfast-food-breakfast-recipe-thumbnail.png",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    coupon: "2415",
    brandLogo:
      "https://img.freepik.com/premium-vector/vector-fresh-food-typography-logo-design-premium-vector_44695-1022.jpg?semt=ais_hybrid&w=740",
    percent: "5.29%",
    price: "$79.00",
  },
  {
    image: "https://www.pngmart.com/files/22/Oats-PNG-Free-Download.png",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    coupon: "2415",
    brandLogo:
      "https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-shopefood-logo-png-image_6472274.png",
    percent: "5.29%",
    price: "$79.00",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMEmwpK-U1xCzvDHS2g8p27Fu69VxmPYJvAUxcVjsXG_yoFFoSevU7XTa3kBIVJyNV-z0&usqp=CAU",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    coupon: "2415",
    brandLogo:
      "https://marketplace.canva.com/EAGKDhXEhoY/1/0/1600w/canva-brown-and-white-simple-modern-professional-catering-logo-Dvz9NG3gqk0.jpg",
    percent: "5.29%",
    price: "$79.00",
  },
  {
    image:
      "https://wallpapers.com/images/hd/quaker-instant-oatmeal-regular-box-fj1twanpqofw9otc.jpg",
    name: "Quaker Oats Healthy Meal...",
    quantity: "500 Items",
    coupon: "2415",
    brandLogo:
      "https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-design_23-2149676465.jpg",
    percent: "5.29%",
    price: "$79.00",
  },
];

const TopProducts = () => {
  return (
    <div className="flex flex-row gap-5">
      <div className="bg-gray-50 rounded-xl p-6 w-180 mx-auto">
        <h2 className="text-xl font-bold text-green-900 mb-1">Top Products</h2>
        <p className="text-gray-400 text-sm mb-5">Top Products List</p>
        <div className="space-y-4">
          {topProducts.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-2 rounded-lg hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 w-1/3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-700 truncate max-w-[150px]">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">{item.quantity}</p>
                </div>
              </div>

              {/* Coupon */}
              <div className="w-1/6 text-center">
                <p className="text-sm font-medium text-gray-500">Coupon Code</p>
                <p className="text-indigo-600 font-semibold text-sm">
                  {item.coupon}
                </p>
              </div>

              {/* Brand Logo */}
              <div className="w-1/6 flex justify-center">
                <img
                  src={item.brandLogo}
                  alt="brand"
                  className="w-20 h-15 object-contain"
                />
              </div>

              {/* Percent + Arrow */}
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

      <div className="rounded-lg shadow-md w-110 mx-auto">
        <TopCountriesSales />
      </div>
    </div>
  );
};

export default TopProducts;
