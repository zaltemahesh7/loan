import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";

const VehicleLoanAgreement = () => {
  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        {/* Title */}
        <h2 className="text-center font-bold text-lg underline mb-4">
          हस्तपत्र करारनामा
        </h2>

        {/* Parties & Loan Info */}
        <p className="mb-2">
          दिनांक: <span className="underline px-2">___/___/२०२५</span>
        </p>
        <p className="mb-2">
          कर्जदाराचे नाव: श्री{" "}
          <span className="underline px-4">_____________________</span> रा.{" "}
          <span className="underline px-4">__________________</span>
        </p>
        <p className="mb-2">कर्ज रक्कम: ₹ ५०,०००/-</p>
        <p className="mb-4">
          प्राप्त केलेली वाहनाची माहिती:{" "}
          <span className="font-semibold">BAJAJ PLATINA 100</span> (मारुती
          क्रमांक : <span className="underline">________________</span>)
          विक्रेता: MAYUR WHEELS, MALEGAON
        </p>

        {/* Agreement Terms */}
        <div className="space-y-3">
          <p>
            मी वरील नमूद कर्जासाठी घेतलेल्या BAJAJ PLATINA 100 या वाहनाचा वापर
            फक्त वैयक्तिक / कर्जविषयक उद्दिष्टासाठी करणार असून ते पूर्णपणे
            बँकेच्या मालकीचे असेल.
          </p>
          <p>
            मी बँकेच्या परवानगीशिवाय वाहन कोणालाही विकणार नाही किंवा तिसऱ्या
            पक्षाला देणार नाही.
          </p>
          <p>
            माझ्याकडून मासिक हप्ता नियमितपणे फेडला जाईल. हप्ता थकवल्यास बँकेस
            वाहन जप्त करण्याचा पूर्ण अधिकार राहील.
          </p>
          <p>
            वाहनाची सर्व जबाबदारी, देखभाल व विमा हप्ता भरण्याची जबाबदारी माझी
            राहील. कुठल्याही अपघात किंवा नुकसानीसाठी बँक जबाबदार राहणार नाही.
          </p>
          <p>संपूर्ण कर्जाची रक्कम फेडल्यानंतरच वाहनावरचा हक्क मला मिळेल.</p>
        </div>

        {/* Footer Info */}
        <div className="mt-6">
          <p className="mb-2">कर्जदाराची सही: __________________________</p>
          <p className="mb-2">साक्षीदार:</p>
          <ul className="list-disc list-inside pl-4">
            <li>साक्षीदार १: __________________________</li>
            <li>साक्षीदार २: __________________________</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default VehicleLoanAgreement;
