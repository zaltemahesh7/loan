import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";
import { useSelector } from "react-redux";

const LoanSanctionLetter = () => {
  const user = useSelector((state) => state.agreement);

  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white px-20 font-sans text-xs leading-tight overflow-y-auto"
        style={{ minHeight: "297mm", maxHeight: "297mm" }}
      >
        <CommonHeader />
        <br />
        <div className="content text-justify space-y-2">
          <p>
            बँकेच्या रकमेची संपूर्ण परतफेड होईपर्यंत सदर{" "}
            <strong>{user?.userInfo?.borrowedVehicle}</strong> ज्या ठिकाणी
            ठेवलेली असेल त्या त्या ठिकाणी बँकेच्या अधिकृत इसमास तपासणीसाठी
            येण्याचा हक्क असेल. आगाऊ नोटीस किंवा माझी परवानगी आवश्यक नसेल.
            कोणतीही मनाई करणार नाही. विचारलेली माहिती देईन.
          </p>
          <p>
            या करारनाम्यानुसार बँकेच्या रकमेची परतफेड होईपर्यंत बँकेच्या
            सूचनेप्रमाणे <strong>{user?.userInfo?.borrowedVehicle}</strong> चे
            विमा संरक्षण बँकेच्या नावाने, मान्य असलेल्या कंपनीत करीन. सर्व हप्ते
            वेळेवर भरेन.
          </p>
          <p>
            विम्याची पॉलिसी आणि हप्त्याच्या पावत्या बँकेत सादर करीन. बँकेचा
            "Insurable Interest" मान्य आहे.
          </p>
          <p>
            मी हप्ते न भरल्यास, बँक पॉलिसीचे हप्ते भरून त्या रकमेवर कर्ज व्याज
            दराने व्याज आकारू शकते. मी ते मान्य करतो.
          </p>
          <p>
            अशा प्रकारे भरलेले हप्ते कायदेशीर असून बँकेवर बंधनकारक नसतील. विमा
            भरपाई मिळाल्यास, आधी बँकेची थकलेली रक्कम वसूल केली जाईल.
          </p>
          <p>
            <strong>{user?.userInfo?.borrowedVehicle}</strong> ची लायसन्स,
            नोंदणी, कर भरणे माझी जबाबदारी आहे. न भरल्यास नुकसानभरपाई देईन.
          </p>
          <p>
            हप्ता वेळेवर न भरल्यास किंवा अटींचा भंग केल्यास, बँकेचे अधिकारी
            वाहनाचा ताबा घेऊ शकतात. नोटीस देणे आवश्यक नाही.
          </p>
          <p>
            कोणताही हप्ता न भरल्यास मला थकबाकीदार समजले जाईल, हे मी मान्य करतो.
          </p>
          <p>
            कर्जावर{" "}
            <strong>{user?.userInfo?.interestRate} वार्षिक व्याजदराने</strong>{" "}
            व्याज लागेल. थकित रकमेवर <strong>२% दंड व्याज</strong> आकारण्यात
            येईल.
          </p>
          <p>हप्ता वेळेवर न भरल्याने बँकेस अंमलबजावणीस अडथळा येणार नाही.</p>
          <p>
            या करारनाम्यातील अटींचा भंग झाल्यास, विमा हप्ते बँकेने भरल्यास, सर्व
            जबाबदारी माझी राहील.
          </p>
        </div> 
      </div>
    </>
  );
};

export default LoanSanctionLetter;
