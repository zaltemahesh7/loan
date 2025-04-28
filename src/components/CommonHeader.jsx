import React from "react";
import BankLogo from "../assets/chandvad_merchant.png"; // Adjust the path as necessary

const CommonHeader = () => {
  return (
    <div className="px-10 ">
      <div className=" flex items-center justify-between border-b max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed">
        <div>
            <img src={BankLogo} alt="Bank Logo" className="w-32 h-auto" />
        </div>
        <div className="text-center pb-4">
          <h1 className="text-xl font-bold">
            दि चांदवड मर्चंट्स को - ऑपरेटिव्ह बँक लि.
          </h1>
          <p className="text-sm">कामशेत, चांदवड जि. नाशिक (४२२२१०)</p>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
