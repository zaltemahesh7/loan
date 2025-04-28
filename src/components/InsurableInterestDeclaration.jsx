import { routes } from "@/constent";
import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import CommonHeader from "./CommonHeader";

const InsurableInterestDeclaration = () => {
  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />

        {/* Title */}
        <h2 className="text-center font-semibold text-lg underline mb-6">
          इन्शुरन्स इंटरेस्ट संदर्भात जाहीरनामा
        </h2>

        {/* Body */}
        <div className="space-y-4">
          <p>
            मी खाली सही करणारा, बँकेकडून कर्ज घेऊन BAJAJ PLATINA 100 (किंवा
            तत्सम वाहन) घेऊन ते वापरत आहे. सदर वाहन बँकेच्या अर्थसाहाय्याने
            घेतले असून ते कर्ज पूर्ण फेडेपर्यंत बँकेची मालकी राहील.
          </p>

          <p>
            या वाहनाचे संपूर्ण विमा संरक्षण घेताना, बँकेचे हक्क व मालकी दर्शविणे
            बंधनकारक आहे. विमा पॉलिसीत बँकेचे नाव Insurable Interest म्हणून नमूद
            करणे गरजेचे आहे. अपघात, चोरी, किंवा इतर नुकसानीसाठी विमा कंपनी कडून
            मिळणारी रक्कम बँकेस आधी दिली जाईल.
          </p>

          <p>
            जर वाहनाचा विमा घेताना बँकेचा उल्लेख नसेल तर बँकेस नुकसान भरपाई
            मिळणार नाही आणि कर्जदाराला जबाबदार धरले जाईल.
          </p>

          <p>
            मी या अटी व शर्ती समजून घेतल्या असून यासाठी पूर्णतः जबाबदार असेन.
            बँकेस कोणताही आर्थिक नुकसान होऊ नये म्हणून मी विमा वेळेत भरवेल व
            आवश्यक सर्व कागदपत्रे बँकेस सादर करीन.
          </p>

          <p>
            वरील सर्व माहिती मला समजलेली असून मी माझ्या संपूर्ण शुद्धीत व
            इच्छेने ही जाहीरनामा लिहित आहे.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 space-y-2">
          <p>दिनांक: ____ / ____ / २०२५</p>
          <p>कर्जदाराचे नाव: _______________________________</p>
          <p>सही: _______________________________</p>
        </div>
      </div>
    </>
  );
};

export default InsurableInterestDeclaration;
