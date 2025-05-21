// src/pages/PageOne.js
import React from "react";
import { useSelector } from "react-redux";
import CommonHeader from "../CommonHeader";
// import Header from "../components/Header";

const PageOne = () => {
  const { header, parties, productDetails, emi } = useSelector(
    (state) => state.agreement
  );

  return (
    <div
      className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
      style={{ minHeight: "297mm" }}
    >
      <CommonHeader />
    </div>
  );
};

export default PageOne;
