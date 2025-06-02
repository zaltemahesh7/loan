import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";

const VehicleLoanAgreement = () => {
  return (
    <>
      <div
      className="print-a4 mx-auto bg-white font-sans text-sm leading-relaxed"
      style={{
        height: "297mm",
        width: "210mm",
        padding: "1in",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div className="text-center font-bold text-base mb-6">
        (प्रॉमिसरी नोट)
      </div>

      <div className="flex justify-between mb-4">
        <div>रक्कम रू : {"९९,०००/-"}</div>
        <div>दिनांक : {"__ / __ / ____"}</div>
      </div>

      <div className="mb-6">
        लिहून घेणार – { "दि. चांदवड मर्चन्टस् को. ऑप बँक लि., चांदवड"} <br />
        ठिकाण – { "ता. चांदवड, जि. नाशिक"}
      </div>

      <div className="mb-6">
        <div className="font-semibold">नाव / राहणार / लिहून देणार:</div>
        <ol className="list-decimal ml-6 mt-2 space-y-1">
          {/* {borrowers.length > 0 ? (
            borrowers.map((b, idx) => (
              <li key={idx}>
                श्री. {b.name} – रा. {b.address}
              </li>
            ))
          ) : ( */}
            <>
              <li>श्री. सलीम शाबीर शेख – रा. चांदवड, ता. चांदवड</li>
              <li>श्री. हमजा मुश्ताक शेख – रा. चांदवड, ता. चांदवड</li>
              <li>श्री. फिरोजखान मन्सुरखान पठाण – रा. चांदवड, ता. चांदवड</li>
            </>
          {/* )} */}
        </ol>
      </div>

      <div className="mt-4">
        कारणे वचन चिठ्ठी (प्रॉमिसरी नोट) लिहून देतो की, तुम्हांस किंवा तुम्ही लिहून
        द्याल त्यास मागणी केल्या बरोबर { "दि. चांदवड मर्चन्टस् को-ऑप. बँक लि. चांदवड"} येथे किंवा मागणी होईल त्या ठिकाणी रक्कम रुपये{" "}
        { "९९,०००/-"} (अक्षरी रुपये { "नव्यांनो हजार मात्र"}) दरमहा व्याज
        आकारणीचे पद्धतीप्रमाणे सदर रकमेवर द.सा.द.शे बँक रेट पेक्षा जास्त परंतु
        कमीत कमी व्याजाचे दराने होईल. त्या व्याजासह देऊ असे आम्ही सर्व मिळून
        संयुक्तपणे आणि व्यक्ती वचन देतो. भरणा पावला त्या बदल तक्रार नाही.
      </div>

      <div className="mt-10 space-y-4">
        <div>कर्जदार – ___________________________________________</div>
        <div>जामीनदार – __________________________________________</div>
        <div>जामीनदार – __________________________________________</div>
      </div>
    </div>
    </>
  );
};

export default VehicleLoanAgreement;
