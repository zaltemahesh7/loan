import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";
import { useSelector } from "react-redux";

const VehicleLoanAgreement = () => {
  const user = useSelector((state) => state.agreement);

  return (
    <>
      <div
        className="max-w-3xl mx-auto max-h-[297mm] bg-white p-1 px-20 font-sans text-xs leading-tight overflow-y-auto"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        <div className="text-center font-bold text-base my-6">
          (प्रॉमिसरी नोट)
        </div>

        <div className="flex justify-between mb-4">
          <div>रक्कम रू : {user?.userInfo?.approvedAmount}</div>
          <div>दिनांक : {user?.userInfo?.date}</div>
        </div>

        <div className="mb-6">
          लिहून घेणार – {"दि. चांदवड मर्चन्टस् को. ऑप बँक लि., चांदवड"} <br />
          ठिकाण – {"ता. चांदवड, जि. नाशिक"}
        </div>

        <div className="mb-6">
          <div className="font-semibold">नाव / राहणार / लिहून देणार:</div>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>{user?.userInfo?.borrowerName}</li>
            {user?.guarantors?.length > 0 ? (
              user?.guarantors.map((b, idx) => <li key={idx}>{b}</li>)
            ) : (
              <></>
            )}
          </ol>
        </div>

        <div className="mt-4">
          कारणे वचन चिठ्ठी (प्रॉमिसरी नोट) लिहून देतो की, तुम्हांस किंवा तुम्ही
          लिहून द्याल त्यास मागणी केल्या बरोबर दि चांदवड मर्चन्टस् को - ऑप . बँक
          लि . चांदवड. येथे किंवा मागणी होईल त्या ठिकाणी रक्कम रुपये{" "}
          {user?.userInfo?.approvedAmount} (
          {user?.userInfo?.approvedAmountInWord}) दरमहा व्याज आकारणीचे
          पद्धतीप्रमाणे सदर रकमेवर द.सा.द.शे 2% बँक रेट पेक्षा जास्त परंतु कमीत
          कमी {user?.userInfo?.interestRate} व्याजाचे दराने होईल. त्या व्याजासह
          देऊ असे आम्ही सर्व मिळून संयुक्तपणे आणि व्यक्ती वचन देतो भरणा पावला
          त्या बदल तक्रार नाही.
        </div>

        <div className="mt-10 space-y-4">
          <div>
            कर्जदार - {user?.userInfo?.borrowerName}{" "}
            ___________________________________________
          </div>
          {user?.guarantors?.length > 0
            ? user?.guarantors.map((b, idx) => (
                <div key={idx}>
                  जामीनदार - {b} __________________________________________
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default VehicleLoanAgreement;
