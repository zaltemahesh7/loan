import React from "react";
import LoanSanctionLetter from "./LoanSanctionLetter";
import LoanInstructions from "./LoanInstructions";
import LoanSuretyForm from "./LoanSuretyForm";
import VehicleLoanAgreement from "./VehicleLoanAgreement";
import InsurableInterestDeclaration from "./InsurableInterestDeclaration";
import LoanRecoveryNotice from "./LoanRecoveryNotice";
import LoanApprovalLetter from "./LoanApprovalLetter";
import PromissoryNote from "./PromissoryNote";
import LoanAgreementChecklist from "./LoanAgreementChecklist";
import CommonHeader from "./CommonHeader";
import { useSelector } from "react-redux";

const BankNotice = () => {
  const user = useSelector((state) => state.agreement);
  // console.log(user);
  return (
    <>
      <div
        className="max-w-3xl mx-auto max-h-[297mm] bg-white p-1 px-20 font-sans text-xs leading-tight overflow-y-auto"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        <div className="mt-4">
          <h2 className="font-semibold text-center text-base mb-1">
            हायरपर्चेस करारनामा
          </h2>
          <p className="font-bold mb-1">
            लिहून घेणर: दि चांदवड मचचन्टस्को - ऑप . बँक दि . चांदवड
          </p>
          <p className="font-bold mb-1">
            लिहून देणार: {user?.userInfo?.borrowerName}
          </p>
          <p className="font-bold mb-1">
            व्यवसाय: {user?.userInfo?.occupation}
          </p>
          <p className="font-bold mb-1 text-end">
            मंजूर रक्कम: {user?.userInfo?.approvedAmount}
          </p>
          <p className="font-bold mb-1">
            संपूर्ण पत्ता : {user?.userInfo?.address}
          </p>
          <div>
            <p className="font-bold mb-1">जामीनदाराची नावे:</p>
            <ol className="list-decimal pl-4 mb-1">
              {user?.guarantors?.map((guarantor, index) => (
                <li key={index}>{guarantor}</li>
              ))}
            </ol>
          </div>
          <p className="mb-1">
            खरेदी / तारण दिलेल्या वाहनाचा तपशील:{" "}
            <strong>{user?.userInfo?.borrowedVehicle}</strong>
          </p>
          <p className="mb-2">
            <strong>अधिकृत विक्रत्याचे नाव: - {user?.userInfo?.seller}</strong>
          </p>
        </div>

        <div className="content text-justify space-y-2">
          <p>
            माझ्या लेखी मागणीप्रमाणे बँकेने मला{" "}
            <strong>{user?.userInfo?.borrowedVehicle}</strong> ही दुचाकी
            घेण्यासाठी दिनांक <strong>{user?.userInfo?.date}</strong> रोजी ठराव
            क्र. <strong>६</strong> अन्वये
            <strong>
              {" "}
              ₹ {user?.userInfo?.approvedAmount} (अक्षरी :{" "}
              {user?.userInfo?.approvedAmountInWord}){" "}
            </strong>
            इतकी रक्कम चेकद्वारे मंजूर केली आहे.
          </p>
          <p>
            १) मी आजपासून दिनांक <strong>{user?.userInfo?.date}</strong> पर्यंत
            मासिक हप्ता <strong>₹ {user?.userInfo?.emiAmount}/-</strong> प्रमाणे
            सदर कर्जाची परतफेड करीन.
          </p>
          <p>
            २) सदर कर्ज मला <strong>{user?.userInfo?.borrowedVehicle}</strong>{" "}
            खरेदीसाठी मंजूर करण्यात आले आहे.
          </p>
          <p>
            ३) नमूद केलेले दोन जामीनदार या कर्जासाठी जामीन राहण्यास तयार
            असल्याच्या अटीवर हे कर्ज मंजूर करण्यात आले आहे.
          </p>
          <p>
            वर नमूद केल्याप्रमाणे बँकेकडून घेतलेल्या कर्जाची परतफेड मी नियमितपणे
            करीन. मी स्वतः हप्त्याची रक्कम न भरल्यास माझ्या चालू बचत खात्यातून
            बँकेस ती रक्कम वसूल करण्याचा पूर्ण हक्क असेल.
          </p>
          <p>
            बँकेने हा चेक मला <strong>{user?.userInfo?.borrowedVehicle}</strong>{" "}
            खरेदी केल्यानंतरच दिला असून, या करारान्वये सदर कर्जाची रक्कम मी रोख
            स्वरूपात वापरल्याबाबतची हमी दिली आहे. वाहन खरेदी करताना त्यातील भाग,
            अ‍ॅक्सेसरीज, डिलिव्हरीचे सामान, हत्यारे किंवा स्पेअर पार्ट्स यांचाही
            समावेश असेल, हे मला मान्य आहे.
          </p>
          <p>
            या करारानुसार, बँकेच्या रकमेची संपूर्ण परतफेड होईपर्यंत{" "}
            <strong>{user?.userInfo?.borrowedVehicle}</strong> वाहन मी कोणत्याही
            प्रकारे विक्री, गहाण, दान, हस्तांतरण, किंवा अदलाबदल करणार नाही.
          </p>
          <p>
            वाहन वापरण्याच्या ठिकाणी कोणताही बदल झाल्यास त्यापूर्वी बँकेची लेखी
            परवानगी घेईन. परवानगीशिवाय वाहन हलवणार नाही. माझा पत्ता बदलल्यास तो
            मी बँकेस लेखी कळवीन. वाहनाचा वापर मी काळजीपूर्वक करून त्याची देखभाल
            करीन.
          </p>
          <p>
            कोणत्याही कारणाने वाहनास इजा झाल्यास त्याबाबतची माहिती मी बँकेस
            तातडीने देईन व स्वतःच्या खर्चाने दुरुस्ती करून घेईन.
          </p>
        </div>
      </div>

      <LoanSanctionLetter />
      <LoanInstructions />
      <LoanSuretyForm />
      <VehicleLoanAgreement />
      <InsurableInterestDeclaration />
      {/* <LoanRecoveryNotice /> */}
      {/* <LoanApprovalLetter /> */}
      {/* <PromissoryNote /> */}
      {/* <LoanAgreementChecklist /> */}

      <div className="text-right mt-4 fixed bottom-4 right-4 print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
        >
          Print
        </button>
      </div>
    </>
  );
};

export default BankNotice;
