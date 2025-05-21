import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
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
import { Button } from "./ui/button";
import { useSelector } from "react-redux";

const BankNotice = () => {
  const user = useSelector((state) => state.agreement);
  console.log(user);
  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        <div className="mt-6">
          <h2 className="font-semibold text-center text-lg mb-2">
            हायरपर्चेस करारनामा
          </h2>
          <p className=" font-bold mb-2">
            लिहून घेणर: दि चांदवड मचचन्टस्को - ऑप . बँक दि . चांदवड
          </p>
          <p className=" font-bold mb-2">
            लिहून देणार: दि चांदवड मचचन्टस्को - ऑप . बँक दि . चांदवड
          </p>
          <p className=" font-bold mb-2">
            व्यवसाय: {user?.userInfo?.occupation}
          </p>
          <p className=" font-bold mb-2 text-end">
            मंजूर रक्कम: {user?.userInfo?.approvedAmount}
          </p>
          <p className=" font-bold mb-2">
            संपूर्ण पत्ता : मु.पो.नाईकवाडी पुरा,चांदवड ता.चांदवड जि.नाशिक
          </p>
          <div>
            <p className=" font-bold mb-2">जामीनदाराची नावे:</p>
            <ol>
              {user?.guarantors?.map((guarantor, index) => (
                <li key={index}>
                  {index + 1}. {guarantor}
                </li>
              ))}
            </ol>
          </div>
          <p>
            खरेदी / तारण दिलेल्या वाहनाचा तपशील:{" "}
            <strong>{user?.userInfo?.borrowedVehicle}</strong>
          </p>
          <br />
          <p>
            <strong>अधिकृत विक्रत्याचे नाव: - {user?.userInfo?.seller}</strong>
          </p>
        </div>
        <div className="content">
          माझ्या लेखी मागणीप्रमाणे बँकेने मला{" "}
          <strong>{user?.userInfo?.borrowedVehicle}</strong> ही दुचाकी
          घेण्यासाठी दिनांक <strong>{user?.userInfo?.date}</strong> रोजी ठराव
          क्र. <strong>६</strong> अन्वये{" "}
          <strong>
            ₹ {user?.userInfo?.approvedAmount} (अक्षरी :{" "}
            {user?.userInfo?.approvedAmountInWord}){" "}
          </strong>
          इतकी रक्कम चेकद्वारे मंजूर केली आहे.
          <br />
          <br />
          १) मी आजपासून दिनांक <strong>{user?.userInfo?.date}</strong> पर्यंत
          मासिक हप्ता <strong>₹ {user?.userInfo?.emiAmount}/-</strong> प्रमाणे
          सदर कर्जाची परतफेड करीन.
          <br />
          <br />
          २) सदर कर्ज मला <strong>
            {user?.userInfo?.borrowedVehicle}
          </strong>{" "}
          खरेदीसाठी मंजूर करण्यात आले आहे.
          <br />
          <br />
          ३) अजाणते नमूद केलेले दोन जामीनदार या कर्जासाठी जामीन राहण्यास तयार
          असल्याच्या अटीवर हे कर्ज मंजूर करण्यात आले आहे.
          <br />
          <br />
          वर नमूद केल्याप्रमाणे बँकेकडून घेतलेल्या कर्जाची परतफेड मी नियमितपणे
          करीन. मी स्वतः हप्त्याची रक्कम न भरल्यास माझ्या चालू बचत खात्यातून
          बँकेस ती रक्कम वसूल करण्याचा पूर्ण हक्क असेल.
          <br />
          <br />
          बँकेने हा चेक मला <strong>
            {user?.userInfo?.borrowedVehicle}
          </strong>{" "}
          खरेदी केल्यानंतरच दिला असून, या करारान्वये सदर कर्जाची रक्कम मी रोख
          स्वरूपात वापरल्याबाबतची हमी दिली आहे. वरील वाहन खरेदी करताना त्यातील
          भाग, अ‍ॅक्सेसरीज, डिलिव्हरीचे सामान, हत्यारे किंवा इतर स्पेअर पार्ट्स
          यांचाही समावेश असेल, हे मला मान्य आहे.
          <br />
          <br />
          या करारानुसार, बँकेच्या रकमेची संपूर्ण परतफेड होईपर्यंत खाली नमूद
          केलेले <strong>{user?.userInfo?.borrowedVehicle}</strong> वाहन मी
          कोणत्याही प्रकारे विक्री, गहाण, दान, हस्तांतरण, किंवा अदलाबदल करणार
          नाही. वाहनावर कोणताही ताबा देणार नाही किंवा बँकेच्या हिताला बाधा येईल
          असे कोणतेही कृत्य करणार नाही.
          <br />
          <br />
          खरेदी केलेले <strong>{user?.userInfo?.borrowedVehicle}</strong> मी
          केवळ वरील उद्देशासाठी वापर करीन. वाहन वापरण्याच्या ठिकाणी कोणताही बदल
          झाल्यास त्यापूर्वी मी बँकेची लेखी परवानगी घेईन. परवानगीशिवाय वाहन
          हलवणार नाही. माझा पत्ता बदलल्यास तो मी बँकेस लेखी कळवीन. वाहनाचा वापर
          मी काळजीपूर्वक करून त्याची चांगली देखभाल करीन. बँकेची लेखी संमती
          घेतल्याशिवाय त्यात कोणताही फेरबदल करणार नाही.
          <br />
          <br />
          कोणत्याही कारणाने वाहनास इजा झाल्यास त्याबाबतची माहिती मी बँकेस
          तातडीने देईन व स्वतःच्या खर्चाने दुरुस्ती करून घेईन. त्यासाठी बँकेस
          कोणतीही जबाबदारी राहणार नाही.
        </div>

        {/* <div className="mt-8 border-t pt-4">
          <h2 className="font-semibold text-lg mb-2">
            मुख्य अधिकारी अधिकारांचा यांचा अभियान :
          </h2>
          <p className="text-sm mb-2">
            अपूर्ण व शिथील पुनर्भरण संप्रकांच्या यादीत उल्लेख असलेल्या
            खातेदारांना भेट देऊन त्यांच्याकडून कर्ज वसुली करावी.
          </p>
          <ul className="list-disc pl-5 text-sm mb-4">
            <li>
              रु. १०,००,०००/- पेक्षा जास्त रक्कम वसूल करणाऱ्या अधिकाऱ्यांना
              दुचाकी मिळेल.
            </li>
          </ul>
          <p className="text-right text-sm font-semibold mt-2">
            मुख्य अधिकारी अधिकार
          </p>
        </div> */}
      </div>
      <LoanSanctionLetter />
      <LoanInstructions />
      <LoanSuretyForm />
      <VehicleLoanAgreement />
      <InsurableInterestDeclaration />
      <LoanRecoveryNotice />
      <LoanApprovalLetter />
      <PromissoryNote />
      <LoanAgreementChecklist />

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
