import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";

const LoanRecoveryNotice = () => {
  return (
    <NavigationWrapper routes={routes}>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-2xl text-sm leading-relaxed">
        {/* Header */}
        <div className="text-center border-b pb-4 mb-6">
          <h1 className="text-xl font-bold">
            दि चांदवड मर्चंट्स को-ऑप. बँक लि., चांदवड
          </h1>
          <p>कामशेत, चांदवड जि. नाशिक (422210)</p>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold underline mb-4">
          कर्ज वसुली सूचना
        </h2>

        {/* Body Content */}
        <div className="space-y-4">
          <p>
            जर कोणतीही आर्थिक अडचण असल्यामुळे वेळेवर हप्ता न भरता ठराविक कालावधी
            उलटत गेल्यास बँकेस जबाबदार धरता येणार नाही. आपण घेतलेले कर्ज हे
            BAJAJ PLATINA 100 वाहन खरेदीसाठी असून, त्याचे सर्व अधिकार कर्ज
            फेडेपर्यंत बँकेकडे राहतील.
          </p>

          <p>
            जर वेळेवर हप्ता भरण्यात अयशस्वी ठरलात, तर बँकेस कायदेशीर कारवाईचा
            अधिकार असेल. यात वाहनाची जप्ती, विक्री किंवा इतर वसुलीची कार्यवाही
            केली जाऊ शकते. या प्रकारची कार्यवाही केल्यानंतर उरलेली रक्कमही
            आपल्याला भरणे बंधनकारक राहील.
          </p>

          <p>
            कर्ज फेडण्याची संपूर्ण जबाबदारी आपली राहील. कर्जदार म्हणून आपणास या
            सर्व अटी समजून घेतल्या आहेत व आपण त्या मान्य करत आहात.
          </p>

          <p>
            या कर्जातून घेतलेले BAJAJ PLATINA 100 वाहन कोणालाही विकण्याचा, गहाण
            ठेवण्याचा किंवा दुसऱ्याला वापरण्यास देण्याचा अधिकार आपल्याकडे राहणार
            नाही.
          </p>

          <p>
            आपल्याकडून संपूर्ण कर्जाची रक्कम मिळाल्यानंतरच वाहनाचा मालकी हक्क
            आपल्याला मिळेल.
          </p>

          <p className="mt-6 font-semibold">धन्यवाद,</p>
          <p className="font-medium">प्रशासकीय अधिकारी</p>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default LoanRecoveryNotice;
