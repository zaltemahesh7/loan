import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";

const LoanApprovalLetter = () => {
  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        {/* Recipient Details */}
        <div className="mb-6 space-y-1">
          <p>आपली कर्जमंजुरी:</p>
          <p>१) सौ. शुभांगी देशराज लोणारे</p>
          <p>२) श्री. देशराज लोणारे, नाशिक</p>
          <p>३) श्री. अजय निवृत्ती खलसे</p>
        </div>

        {/* Body */}
        <div className="space-y-4">
          <p>
            वरील सर्व नावीनामे आपले वाहन कर्ज मंजुरीसंदर्भात पाठवले गेले आहेत.
            दिनांक २५/०८/२०२५ रोजी ₹५०,०००/- इतके कर्ज मंजूर झाले आहे. सदर
            कर्जाची वापराची मर्यादा फक्त BAJAJ PLATINA १०० (दुप्पट वाहन) पर्यंत
            मर्यादित आहे.
          </p>
          <p>
            सदर कर्जाची परतफेड नियमितपणे हप्त्याद्वारे करावी लागेल. जर आपण
            परतफेडीमध्ये कसूर केली, तर बँकेस जप्ती व कायदेशीर कारवाई करण्याचा
            पूर्ण हक्क असेल.
          </p>
          <p>
            आपण या अटी समजून घेतल्या आहेत आणि बँकेच्या नियमांप्रमाणे पूर्ण
            सहकार्य करण्यास तयार आहात अशी अपेक्षा आहे.
          </p>
          <p>
            ही कर्जमंजुरी आपल्याला देण्यात येत आहे याची कृपया नोंद घ्यावी.
            भविष्यात कोणतीही अडचण उद्भवू नये म्हणून सर्व नियमांचे पालन करावे.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-8 space-y-4">
          <p>बँक</p>
          <div className="flex justify-between">
            <span>सही: ____________________</span>
            <span>दिनांक: ____ / ____ / २०२५</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanApprovalLetter;
