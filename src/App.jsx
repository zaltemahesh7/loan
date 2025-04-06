import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import CreditAppraisalNote from "./components/CreditAppraisalNote";
import BankNotice from "./components/BankNotice";
import LoanSanctionLetter from "./components/LoanSanctionLetter";
import LoanInstructions from "./components/LoanInstructions";
import LoanSuretyForm from "./components/LoanSuretyForm";
import VehicleLoanAgreement from "./components/VehicleLoanAgreement";
import InsurableInterestDeclaration from "./components/InsurableInterestDeclaration";
import LoanRecoveryNotice from "./components/LoanRecoveryNotice";
import LoanApprovalLetter from "./components/LoanApprovalLetter";
import PromissoryNote from "./components/PromissoryNote";
import LoanAgreementChecklist from "./components/LoanAgreementChecklist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreditAppraisalNote />} />
        <Route path="/bank-notice" element={<BankNotice />} />
        <Route path="/loan-sanction-letter" element={<LoanSanctionLetter />} />
        <Route path="/loan-instructions" element={<LoanInstructions />} />
        <Route path="/loan-surety-form" element={<LoanSuretyForm />} />
        <Route
          path="/vehicle-loan-agreement"
          element={<VehicleLoanAgreement />}
        />
        <Route
          path="/insurable-interest-declaration"
          element={<InsurableInterestDeclaration />}
        />
        <Route path="/loan-recovery-notice" element={<LoanRecoveryNotice />} />
        <Route path="/loan-approval-letter" element={<LoanApprovalLetter />} />
        <Route path="/promissory-note" element={<PromissoryNote />} />
        <Route
          path="/loan-agreement-checklist"
          element={<LoanAgreementChecklist />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
