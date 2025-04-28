import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";

const LoanInstructions = () => {
  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        {/* Instructions */}
        <div className="space-y-2">
          <p>
            १. आपल्या शाखेच्या भागभांडवल योजना व विविध योजना यामधून नवीन सदस्य
            नोंदणीसाठी हे अभियान राबविण्यात येत आहे.
          </p>
          <p>
            २. योजनेअंतर्गत नवीन सदस्य नोंदणी करून, सदस्याचे भागभांडवल रु.
            ५०००/- व मुदत ठेव रु. १००००/- घेतले जाईल.
          </p>
          <p>
            ३. योजनेच्या यशस्वी अंमलबजावणीसाठी शाखाधिकारी यांनी स्वतंत्र वेळ
            देऊन लाभार्थ्यांना माहिती द्यावी.
          </p>
          <p>४. योजनेत सहभागी अधिकाऱ्यांना प्रोत्साहनपर बक्षीस देण्यात येईल.</p>
          <p>५. प्रत्येक अधिकाऱ्याने किमान २५ नवीन सदस्य जोडावेत.</p>
          <p>६. नवीन सदस्याची यादी नमूद नमुन्यात भरून द्यावी.</p>
          <p>७. योजनेसाठी अंतिम दिनांक : १५/०४/२०२५</p>
        </div>

        {/* Signature */}
        <p className="text-right font-semibold mt-6">
          प्रमुख अधिकारी / व्यवस्थापक
        </p>

        {/* Divider */}
        <hr className="my-6" />

        {/* Document Metadata */}
        <div className="flex justify-between text-sm mb-4">
          <span>दिनांक : २५/०३/२०२५</span>
          <span>शाखा / क्षेत्र : ___________________</span>
        </div>

        {/* Table */}
        <div>
          <h3 className="font-semibold mb-2">
            नोंदणी केलेल्या नवीन सदस्यांची यादी :
          </h3>
          <table className="w-full table-auto border border-black text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-black px-2 py-1">अ.क्र.</th>
                <th className="border border-black px-2 py-1">
                  सदस्याचे पूर्ण नाव
                </th>
                <th className="border border-black px-2 py-1">मोबाईल नंबर</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-2 py-1 text-center">१</td>
                <td className="border border-black px-2 py-1">
                  संपर्कित सदस्य नाव
                </td>
                <td className="border border-black px-2 py-1">९८७६५४३२१०</td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 text-center">२</td>
                <td className="border border-black px-2 py-1">
                  दुसरे सदस्य नाव
                </td>
                <td className="border border-black px-2 py-1">९१२३४५६७८९</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LoanInstructions;
