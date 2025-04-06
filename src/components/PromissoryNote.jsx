import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";

const PromissoryNote = () => {
  return (
    <NavigationWrapper routes={routes}>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md text-sm leading-relaxed">
        {/* Header */}
        <div className="text-center border-b pb-4 mb-6">
          <h1 className="text-lg font-bold">
            दि चांदवड मर्चंट्स को-ऑप. बँक लि., चांदवड
          </h1>
          <p className="text-sm">कामशेत, चांदवड जि. नाशिक (४२२२१०)</p>
          <h2 className="mt-4 text-md font-semibold underline">
            चेक शिर्षक (प्रॉमिसरी नोट)
          </h2>
        </div>

        {/* Loan Info */}
        <div className="mb-4">
          <p>
            <strong>रक्कम रु.:</strong> ₹५०,०००/-
          </p>
          <p>
            <strong>दिनांक:</strong> ___ / ___ / २०२५
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
    </NavigationWrapper>
  );
};

export default PromissoryNote;
