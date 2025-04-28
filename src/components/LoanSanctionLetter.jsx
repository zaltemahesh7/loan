import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";

const LoanSanctionLetter = () => {
  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        {/* Date and Ref */}
        <div className="flex justify-between mb-4">
          <div>
            <p>शाखा / क्षेत्र : ____________</p>
            <p>क्रमांक : ______ / २०२४-२५</p>
          </div>
          <div>
            <p>दिनांक : २६ / ०३ / २०२५</p>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center font-bold text-lg mb-4 underline">
          कर्ज मंजुरी पत्र
        </h2>

        {/* To Section */}
        <p className="mb-4">
          श्री.________________________ <br />
          श्री.________________________ <br />
          ता.________________________ <br />
          जि. नाशिक
        </p>

        {/* Subject */}
        <p className="mb-4">
          विषय : आपला दिनांक १०/०३/२५ चा कर्ज अर्ज नमूद संदर्भाने खालील प्रमाणे
          मंजूर करण्यात आलेला आहे.
        </p>

        {/* Table */}
        <table className="w-full table-fixed border border-black mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black px-2 py-1">अ.क्र.</th>
              <th className="border border-black px-2 py-1">कर्ज प्रकार</th>
              <th className="border border-black px-2 py-1">कर्ज वस्तू</th>
              <th className="border border-black px-2 py-1">किंमत</th>
              <th className="border border-black px-2 py-1">आपली भागभांडवल</th>
              <th className="border border-black px-2 py-1">बँकेचे कर्ज</th>
              <th className="border border-black px-2 py-1">व्याज दर</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-2 py-1 text-center">१</td>
              <td className="border border-black px-2 py-1">H.P. LOAN</td>
              <td className="border border-black px-2 py-1">
                BAJAJ PLATINA 100 (दुचाकी)
              </td>
              <td className="border border-black px-2 py-1 text-right">
                रु. ७५,०००/-
              </td>
              <td className="border border-black px-2 py-1 text-right">
                रु. १०,०००/-
              </td>
              <td className="border border-black px-2 py-1 text-right">
                रु. ६५,०००/-
              </td>
              <td className="border border-black px-2 py-1 text-right">१३%</td>
            </tr>
          </tbody>
        </table>

        {/* Terms */}
        <div className="mb-4">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              वरील नमूद वस्तू दिनांक ____ पर्यंत खरेदी करून बँकेत बिल सादर
              करावे.
            </li>
            <li>कर्ज रक्कम थेट विक्रेत्याच्या खात्यात जमा केली जाईल.</li>
            <li>वस्तू खरेदी न केल्यास मंजूर कर्ज रक्कम रद्द करण्यात येईल.</li>
            <li>
              कर्ज मंजुरीच्या अटी, नियम व कार्यपद्धतीचे पालन करणे बंधनकारक
              राहील.
            </li>
            <li>कर्ज फेडीचा कालावधी ३६ महिने राहील.</li>
            <li>कर्ज हप्ता दरमहा रुपये ____ इतका राहील.</li>
            <li>व्याज दर १३% वार्षिक राहील.</li>
            <li>कर्ज वसुली सुनिश्चित करण्यासाठी हमीदाराची जबाबदारी राहील.</li>
          </ol>
        </div>

        {/* Signature */}
        <p className="text-right font-semibold mt-6">
          व्यवस्थापक / कार्यकारी अधिकारी
        </p>

        {/* Footer Note */}
        <p className="mt-6 border-t pt-4 text-center italic">
          कर्जाची अटी व नियम वाचून, समजून कर्ज स्वीकारण्यात आले आहे.
        </p>
      </div>
    </>
  );
};

export default LoanSanctionLetter;
