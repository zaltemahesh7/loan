import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";
import { useSelector } from "react-redux";

const PromissoryNote = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        {/* Loan Info */}
        <div className="text-center flex flex-col items-center m-4 gap-3">
          <p className=" text-2xl font-semibold">  वचन चिठ्ठी   </p>
          <p className=" text-2xl font-semibold">  (प्रॉमिसरी नोट)   </p>
        </div>
        <div className="mb-4">
          <p>
            <strong>रक्कम रु.:</strong> ₹{user?.userInfo?.approvedAmount}/-
          </p>
          <p>
            <strong>दिनांक:</strong> <input type="date" name="date" id="date" value={user?.userInfo?.date} />
          </p>
        </div>

        {/* Lender Info */}
        <div className="mb-4">
          <p>
            <strong>संपुर्ण रक्कम:</strong> दि. चांदवड मर्चंट्स को-ऑप बँक लि.,
            शाखा नं. चांदवड जि. नाशिक
          </p>
        </div>

        {/* Borrowers */}
        <div className="mb-4">
          <p className="font-semibold underline">नाव</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>श्री. शुभांगी देशराज लोणारे</li>
            <li>श्री. देशराज लोणारे</li>
            <li>श्री. अजय निवृत्ती खलसे</li>
          </ol>
        </div>

        {/* Body */}
        <div className="space-y-4">
          <p>
            वरील रक्कम पावती (प्रॉमिसरी नोट) द्वारे सिद्ध करतो की, आम्ही सदर
            रक्कम दिलेल्या तारखे पासून "दि चांदवड मर्चंट्स को-ऑप बँक लि." या
            बँकेस अदा करू. या रक्कमेवर ठरवलेले व्याज लागू राहील.
          </p>
          <p>
            सदर रक्कम ही दुपट्ट वाहन खरेदीसाठी वापरण्यात आली आहे. हप्त्याने
            परतफेड केली जाईल, अन्यथा बँकेस जप्तीचा किंवा कायदेशीर कारवाईचा
            अधिकार राहील. कर्ज पूर्ण फेडेपर्यंत वाहनाचे हक्क बँकेकडे राहतील.
          </p>
        </div>

        {/* Signatures */}
        <div className="mt-6">
          <p className="font-semibold">कर्जदार:</p>
          <div className="h-10 border-b w-1/2 mb-4" />

          <p className="font-semibold">जामीनदार १:</p>
          <div className="h-10 border-b w-1/2 mb-4" />

          <p className="font-semibold">जामीनदार २:</p>
          <div className="h-10 border-b w-1/2" />
        </div>
      </div>
    </>
  );
};

export default PromissoryNote;
