import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import CommonHeader from "./CommonHeader";
import { useSelector } from "react-redux";

const LoanInstructions = () => {
  const user = useSelector((state) => state.agreement);

  return (
    <>
      <div
        className="max-w-3xl mx-auto bg-white p-8 font-sans text-sm leading-relaxed"
        style={{ minHeight: "297mm" }}
      >
        <CommonHeader />
        <br />
        <p>
          &nbsp; जर कोणी बँकेकडून घेतलेली सदर वस्तू जप्त केली गेली, तर तात्काळ
          संपूर्ण रकमेची भरपाई माझ्याकडून किंवा माझ्या वारसाकडून मागणी करता
          येईल. तसेच सदर <strong>{user?.userInfo?.borrowedVehicle}</strong>{" "}
          बँकेने ताब्यात घेऊन, त्याची / तिची विक्री करून त्या विक्रीच्या
          रकमेमधून विक्रीसाठी लागणारे खर्च वजा जाता, जी रक्कम शिल्लक राहील,
          त्यातून बँकेचे कर्ज फेडून घेण्याचा बँकेस अग्राधिकार राहील.
        </p>

        <p>
          विक्री केलेल्या वस्तूसंदर्भात बँकेचे मॅनेजर किंवा इतर अधिकारी यांनी
          सही करून दिलेला हिशोब हा बरोबर आहे, असे समजण्यात येईल आणि त्या
          संदर्भात कोणतीही तक्रार केली जाणार नाही.
        </p>

        <p>
          अशा रीतीने सदर वस्तूची विक्री करून विक्रीच्या रकमेमधूनही माझ्याकडे
          काही रक्कम उरली असल्यास, हिशोबपत्रकासहित माझ्याकडे मागणी केल्यास
          उरलेली रक्कम बिनतक्रारी परत दिली जाईल. आणि जर काही कारणास्तव बँकेतील
          माझ्या इतर कोणत्याही खात्यातून नाव नोंदवण्याचा बँकेस अधिकार राहील. जर
          बँकेच्या रकमेची पूर्ण फेड न होऊ शकली, तर ती रक्कम बँकेने माझ्याकडून
          किंवा माझ्या जामीनदाराकडून एकत्रितपणे किंवा स्वतंत्रपणे, जातीक, स्थावर
          किंवा जंगम मालमत्ता विकून, आपली संपूर्ण रक्कम व त्यासाठी लागणाऱ्या
          संपूर्ण खर्चासह वसूल करावी.
        </p>

        <p>
          सदर वस्तूच्या विक्रीमधून बँकेचे संपूर्ण देयक, खर्च इत्यादी वसूल होऊनही
          काही रक्कम शिल्लक राहिल्यास, ती रक्कम मात्र बँकेकडे असलेल्या माझ्या
          कॅश क्रेडिट खाते, हंडी, डिस्काउंटिंग किंवा तत्सम इतर कोणत्याही
          प्रकारच्या कर्ज खात्यात येरझार असलेल्या रकमेपोटी किंवा माझ्यावर
          झालेल्या कोणत्याही हकमनाम्याच्या आधारे जमा करून घेण्याचा बँकेस पूर्ण
          अधिकार राहील.
        </p>

        <p>
          संपूर्ण व्यवहार पूर्ण करूनही विक्रीच्या रकमेतून काही रक्कम शिल्लक
          राहिल्यास, बँकेत सदर रक्कम अनामत खात्यात बिनव्याजी पडून राहील. आणि ती
          माझ्या लेखी सूचनेप्रमाणे रक्कम परत देण्याचा अधिकार राहील.
        </p>

        <p>
          या करारनाम्यात नमूद केलेल्या कोणत्याही अटींचा भंग झाल्यास वस्तू
          बँकेच्या ताब्यात घेणे आवश्यक असल्यास, ताबा घेताना किंवा तत्पूर्वी
          त्यासाठी लेखी नोटीस देण्याची गरज नाही. कोणतीही लेखी नोटीस न देता
          बँकेच्या अधिकृत अधिकाऱ्यास ती वस्तू ताब्यात घेण्याचा हक्क राहील.
        </p>

        <p>
          कोणत्याही कारणाने, दंडमत्तेने, खाली नमूद केलेली{" "}
          <strong>{user?.userInfo?.borrowedVehicle}</strong> ही वस्तू बँकेच्या
          प्रत्यक्ष ताब्यात असताना, तिचे काही घटवट, मोडतोड, नादुरुस्ती, अस्मानी
          / सुलतानी संकट, चोरी इत्यादी झाल्यास, त्याबाबत कोणतीही जबाबदारी बँकेवर
          राहणार नाही.
        </p>

        <p>
          या करारनाम्यात दिलेल्या माझ्या पत्यावर जर काही बदल झाला असेल व त्याची
          लेखी माहिती जर बँकेकडे पोहोचली असेल, तर अशा बदललेल्या पत्यावर पाठवलेली
          लेखी नोटीस ही बँकेने पोस्टाने पाठवावी. आणि ती पोस्टाने पाठवलेली नोटीस
          मला मिळालेली असे समजण्यात येईल.
        </p>

        <p>
          बँकेचे सध्याचे आणि पुढे येणारे नियम, उपनियम, परिपत्रके इत्यादी
          कर्जाच्या बाबतीत मी मान्य करतो आणि त्याप्रमाणे वागण्यास मी बांधील
          राहीन.
        </p>

        <p className="signature">कर्जदाराची सही: ____________</p>
      </div>
    </>
  );
};

export default LoanInstructions; 
