import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-between gap-30 bg-white shadow-md border border-gray-200 rounded-none p-4">
        <div className="font-semibold">
          <h3>Copyright © 2025 All Right Reserved.</h3>
        </div>
        <div className="flex flxe-row gap-3 font-semibold">
          <h4>Terms</h4>
          <h4>Privacy</h4>
          <h4>Help</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
