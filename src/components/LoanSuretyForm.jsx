import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";

const LoanSuretyForm = () => {
  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        {/* Reference numbers and date */}
        <div className="flex justify-between text-sm mb-4">
          <span>रजि. नं. १०४३४</span>
          <span>दिनांक: ०१/०४/२०२५</span>
        </div>

        {/* Title */}
        <h2 className="text-center font-bold text-lg mb-4 underline">
          नमुना 'क' नियम ५४ (१)
        </h2>

        {/* Declaration Body */}
        <p className="mb-4">
          मी श्री.{" "}
          <span className="underline px-4">_________________________</span>{" "}
          यांचे पुत्र श्री.{" "}
          <span className="underline px-4">_________________</span> रा.{" "}
          <span className="underline px-4">________________</span> ता. चांदवड
          जि. नाशिक हा खाली लिहिलेल्या अटींवर एकूण रकमेचा कर्ज धारक / आहे / नाही
          असा जामीनदार म्हणून नाव देत आहे.
        </p>

        <p className="mb-4">
          मी खालील जामीनदारांचे संमतीपत्र अटींनुसार देत आहे :
        </p>

        <ol className="list-decimal pl-5 space-y-1 mb-4">
          <li>नाव, पत्ता, सही, मोबाईल नंबर – जामीनदार क्रमांक 1</li>
          <li>जामीनदार क्रमांक 2</li>
          <li>जामीनदार क्रमांक 3</li>
        </ol>

        {/* Legal Clause */}
        <p className="mb-4">
          महाराष्ट्र सहकारी संस्था नियम १९६१ चे नियम ५४(१) अन्वये उपरोक्त नमूद
          कर्जदारास मी यासाठी जामीन देत असून, दि. चांदवड मर्चंट्स को-ऑपरेटिव्ह
          बँक लि. यांची जबाबदारी माझ्यावर राहील.
        </p>

        {/* Footer Info */}
        <div className="mt-6">
          <p className="mb-2">ठिकाण : चांदवड</p>
          <p className="mb-2">दिनांक : ____ / ____ / २०२४</p>
          <p className="mt-4 font-semibold">सही</p>
        </div>
      </div>
    </>
  );
};

export default LoanSuretyForm;
