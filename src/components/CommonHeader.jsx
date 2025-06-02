import React from "react";
import BankLogo from "../assets/chandvad_merchant.png"; // Adjust the path as necessary

const CommonHeader = () => {
  return (
    <div>
      <div className=" flex items-center justify-between border-b max-w-3xl mx-auto bg-white p-5 pt-0 font-sans text-sm leading-relaxed">
        <div>
          <img src={BankLogo} alt="Bank Logo" className="w-32 h-auto" />
        </div>
        <div className="text-center pb-4">
          <h1 className="text-xl font-bold">
            दि चांदवड मर्चन्टस् को - ऑप . बँक लि . चांदवड
          </h1>
          <p className="text-sm">‘कामधेनु’,चांदवड जि.नाशिक (४२३१०१)</p>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
