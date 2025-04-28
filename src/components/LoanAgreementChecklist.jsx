import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";

const LoanAgreementChecklist = () => {
  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        {/* Applicant Info */}
        <div className="mb-4">
          <p>अर्जदाराचे संपूर्ण नाव: श्रीमती शुभांगी देशराज लोणारे</p>
          <p>ठिकाणाचा पत्ता: मुळगाव – पळशी, ता.चांदवड जि.नाशिक</p>
          <p>हप्ता: ५८०/-</p>
          <p>कर्जाचा प्रकार: वाहन कर्ज – दुचाकी (BAJAJ PLATINA 100)</p>
          <p>कर्जाची रक्कम: ₹५०,०००/-</p>
          <p>फायनान्सिंग डीलर: MAYUR WHEELS, MALEGAON</p>
          <p>दाखल तारीख: २५/०१/२०१७</p>
        </div>

        {/* Checklist */}
        <div className="mt-4 mb-6">
          <h3 className="font-semibold underline mb-2">
            दाखल करण्यात आलेले दस्तऐवज:
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>कर्ज अर्ज</li>
            <li>प्रॉमिसरी नोट</li>
            <li>हप्ता पट्टी</li>
            <li>वाहन बिल</li>
            <li>वाहन विमा पॉलिसी</li>
            <li>आर. सी. बुक</li>
            <li>ड्रायव्हिंग लायसन्स</li>
            <li>पॅन कार्ड</li>
            <li>आधार कार्ड</li>
            <li>जामीनदार अर्ज (२ जणांचे)</li>
            <li>बँक पासबुक झेरॉक्स</li>
            <li>रजिस्टर्ड हप्ता करारनामा (कर्जदार व बँक यांच्यात करारनामा)</li>
            <li>दोन जणांचे फोटो</li>
          </ol>
        </div>

        {/* Signatures */}
        <div className="grid grid-cols-3 gap-4 text-center mt-6">
          <p className="border-t pt-2">कार्यवाह</p>
          <p className="border-t pt-2">शाखा व्यवस्थापक</p>
          <p className="border-t pt-2">मुख्य कार्यकारी अधिकारी</p>
        </div>

        {/* Footer Note */}
        <div className="text-xs mt-8 border-t pt-4 text-gray-600">
          <p>
            नोंद: वरील सर्व कागदपत्रे तपासून पूर्ण असल्याची खात्री करून
            शाखेमार्फत प्रस्ताव सादर करावा.
          </p>
          <p className="mt-2">तारीख: २५/०१/२०१७</p>
        </div>
      </div>
    </>
  );
};

export default LoanAgreementChecklist;
