import React from "react";

const Footer = () => {
  return (
    <footer className=" py-4">
      <div className="text-center bg-[#fafafa] mb-4">
        <h3 className="text-xl font-bold mb-0.5 pt-4">
          Supporting Organizations
        </h3>
        <div className="w-12 h-0.5 bg-black mx-auto mb-14" />

        <div className="flex flex-wrap max-w-4xl mx-auto justify-around md:justify-between items-center gap-6 md:gap-10 pb-15 px-4 md:px-10">
          <img
            src="https://static.wixstatic.com/media/e6f22e_0d85db60e80f4c3dba541969cea6010c~mv2.png"
            alt="EAFO"
            className="h-6 md:h-10 object-contain"
          />
          <img
            src="https://static.wixstatic.com/media/e6f22e_52f4d169105b4000b967f882ba858459~mv2.png"
            alt="ECRC"
            className="h-10 md:h-17 object-contain"
          />
          <img
            src="https://static.wixstatic.com/media/e6f22e_05679ffe1f6b46fd8dfbdc733c319524~mv2.png"
            alt="FIRMST"
            className="h-14 md:h-22 object-contain"
          />
          <h4 className="text-xl md:text-2xl font-semibold text-blue-900">
            Dr. Soma
          </h4>
        </div>
      </div>
      <div className="text-center  text-[0.9rem]">
        &copy; 2202-2025 by Dr. Soma. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
