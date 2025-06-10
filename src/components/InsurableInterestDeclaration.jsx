import { routes } from "@/constent";
import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import CommonHeader from "./CommonHeader";
import { useSelector } from "react-redux";

const InsurableInterestDeclaration = () => {
  const user = useSelector((state) => state.agreement);

  return (
    <>
      <div
        className="max-w-3xl mx-auto max-h-[297mm] bg-white p-1 px-20 font-sans text-xs leading-tight overflow-y-auto"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold">
            कर्जप्रकार: {user?.userInfo?.loanType}
          </h1>
          <h2 className="text-lg font-medium mt-1">
            {user?.userInfo?.loanType}
          </h2>
        </div>

        <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
          <li>अर्जदाराचे संपूर्ण नांव : {user?.userInfo?.borrowerName}</li>
          <li>
            राहण्याचा पत्ता : सुभाष नगरमधील पुण्या, अहमदनगर ता.पाथर्डी
            जि.अहमदनगर
          </li>
          <li>व्यवसाय : खासगी</li>
          <li>
            बँकेकडून कर्जाने घ्यावयाची वस्तू : {user?.userInfo?.borrowedVehicle}
          </li>
          <li>किंमत रुपये : ₹ {user?.userInfo?.vehiclePrice}</li>
          <li>
            मूळ किंमतीच्या /व्हॅल्यूएशननुसार मंजूर करावे. <br />
            किंवा रुपये {user?.userInfo?.approvedAmount} मंजूर करावे.
          </li>
          <li>
            व्याजाचा दर द. सा द. शे. {user?.userInfo?.interestRate} टक्के राहील.
          </li>
          <li>परत फेडीची मुदत {user?.userInfo?.loanDuration} राहील.</li>
          <li>
            मासिक हप्ता रुपये {user?.userInfo?.loanDuration} प्रमाणे राहील.
          </li>
          <li>कॉम्प्रिहेन्सिन्ह विमा घेणेत यावा.</li>
          <li>मिळाल्यानंतर व पासून वाहन वितरीत होईल.</li>
          <li>आर सी बुक बँकेचे नावावर करण्यात यावे.</li>
          <li>
            अर्जदारास हायरपर्चेस कर्ज रक्कम रु {user?.userInfo?.approvedAmount}{" "}
            (अक्षरी रुपये {user?.userInfo?.approvedAmountInWord}) मंजूर करणेस
            शिफारस करण्यात येत आहे
          </li>
        </ol>

        <div className="mt-10 flex justify-between text-sm">
          <div>
            <p>कर्जलिपिक</p>
          </div>
          <div>
            <p className="text-center font-bold">★ शाखा व्यवस्थापक ★</p>
          </div>
          <div className="text-right">
            <p>मुख्य कार्यकारी अधिकारी</p>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-6 pt-4 text-sm leading-relaxed">
          <div className="flex items-center justify-center">
            <p className="text-center font-bold">★ संचालक मंडळाचा शेरा ★</p>
          </div>
          <p>
            अर्जदार श्री.सलीम शाबीर शेख यांच्या कर्ज मागणी अर्जाचा विचार करून
            त्यांना रक्कम रु ७३,०००/- (अक्षरी रुपये त्र्याहत्तर हजार मात्र) चे
            कर्ज मंजूर करण्यात येत आहे.कर्जाची रक्कम अदा करण्यात यावी.
          </p>
          <p className="mt-2">संचालक मंडळ सभा.क्र.२३ वी</p>
          <p className="mt-2">ठराव क्र: ६ </p>
          <p className="mt-1">तारीख : {user?.userInfo?.date}</p>
          <div className="mt-1 flex justify-end">
            <div className="flex flex-col justify-center items-center">
              <p>चेअरमन </p>
              <p>दि चांदवड मर्चन्टस् को ऑपरेटिव्ह बँक लि चांदवड</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsurableInterestDeclaration;
