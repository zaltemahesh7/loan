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

const BankNotice = () => {
  const handlePrint = () => {
    const printContent = document.querySelector(".max-w-3xl");
    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 0;
            }
            body {
              margin: 0;
              font-family: sans-serif;
            }
            .max-w-3xl {
              max-width: 210mm;
              margin: auto;
              padding: 20mm;
              background: white;
            }
          </style>
        </head>
        <body>${printContent.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">
            शाखा व्यवस्थापक / क्षेत्रीयप्रमुख प्रमुख यांचा अभियान :
          </h2>
          <p className="text-sm mb-2">
            अपूर्ण व शिथील पुनर्भरण संप्रकांच्या यादीत उल्लेख असलेल्या खातेदार
            लोकांना भेटी देऊन त्यांना अजमावून खात्री करावी. BAJAJ PLATINA 100
            दुचाकी वाहन (किंमत रु. ६५,०००/-) एकत्रित वसुली रकमेच्या आधारे मिळणार
            :
          </p>
          <ul className="list-disc pl-5 text-sm mb-4">
            <li>
              रु. २५,००,०००/- पेक्षा जास्त रक्कम वसूल करणाऱ्या शाखा
              व्यवस्थापक/क्षेत्रीय प्रमुख यांना दुचाकी मिळेल.
            </li>
            <li>
              रु. १५,००,०००/- ते रु. २५,००,०००/- पर्यंत वसुली केल्यास रोख रक्कम
              रु. १०,०००/-
            </li>
          </ul>
          <p className="text-right text-sm font-semibold mt-2">
            कार्यकारी अधिकारी / व्यवस्थापक प्रमुख
          </p>
        </div>

        <div className="mt-8 border-t pt-4">
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
        </div>
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
      
      <Button onClick={handlePrint}>Print</Button>
    </>
  );
};

export default BankNotice;
