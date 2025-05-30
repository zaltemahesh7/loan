import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import { useSelector, useDispatch } from "react-redux";
import {
  addGuarantor,
  updateUserField,
} from "@/redux/user/userSlice";

const CreditAppraisalNote = () => {
  const { userInfo, guarantors } = useSelector((state) => state.agreement);
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    dispatch(updateUserField({ field, value }));
  };

  const handleGuarantorChange = (index, value) => {
    const updated = [...guarantors];
    updated[index] = value;
    dispatch(addGuarantor(updated));
  };

  const handleAddGuarantor = () => {
    const updated = [...guarantors, ""];
    dispatch(addGuarantor(updated));
  };

  const handleRemoveGuarantor = (index) => {
    const updated = guarantors.filter((_, i) => i !== index);
    dispatch(addGuarantor(updated));
  };

  const tableData = [
    ["१", "कर्ज रक्कम", userInfo?.loanAmount, "loanAmount"],
    ["२", "कर्ज मर्यादा रुपये", userInfo?.loanLimit, "loanLimit"],
    ["३", "मंजूर हायरपर्चेस रक्कम रुपये", userInfo?.approvedAmount, "approvedAmount"],
    ["४", "कर्जाचे कारण", userInfo?.loanReason, "loanReason"],
    ["५", "कर्जाची मुदत / महिन्ये / वर्षे", userInfo?.loanDuration, "loanDuration"],
    ["६", "व्याज दर [स.ध.अ.]", userInfo?.interestRate, "interestRate"],
    ["७", "हप्ता रक्कम रुपये [प्रतिमहिना]", userInfo?.emiAmount, "emiAmount"],
  ];

  return (
    <NavigationWrapper routes={routes}>
      <div className="container mx-auto font-sans p-10 leading-relaxed text-[16px]">
        <h1 className="text-center text-2xl font-bold mb-0">
          दि चांदवड मर्चंट्स को-ऑपरेटिव बँक लि.
        </h1>
        <h2 className="text-center text-xl mb-0">
          कामधेनू, चांदवड जि. नाशिक (४३३१०४)
        </h2>
        <h2 className="text-center text-xl mb-0">
          हायरपर्चेस कर्ज मंजुरीपूर्व रिपोर्ट
        </h2>
        <h1 className="text-center text-2xl font-bold underline mt-2">
          CREDIT APPRAISAL NOTE
        </h1>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>कर्जदाराचे खाते क्रमांक:</strong>
              <input
                type="text"
                value={userInfo?.borrowerAccountNo || ""}
                onChange={(e) => !isNaN(e.target.value) && handleInputChange("borrowerAccountNo", e.target.value)}
                className="border px-2 py-1 w-full"
              />
            </div>
            <div>
              <strong>तारीख:</strong>
              <input
                type="date"
                value={userInfo?.date }
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="border px-2 py-1 w-full"
              />
            </div>
          </div>

          <div>
            <strong>कर्ज प्रकार:</strong>
            <select
              value={userInfo?.loanType || ""}
              onChange={(e) => handleInputChange("loanType", e.target.value)}
              className="border px-2 py-1 w-full"
            >
              <option value="" disabled>कर्ज प्रकार निवडा</option>
              <option value="हायरपर्चेस कर्ज">हायरपर्चेस कर्ज</option>
            </select>
          </div>

          <div>
            <strong>कर्जदाराचे नाव:</strong>
            <input
              type="text"
              value={userInfo?.borrowerName || ""}
              onChange={(e) => handleInputChange("borrowerName", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </div>

          <div>
            <strong>मोबाईल नंबर:</strong>
            <input
              type="text"
              value={userInfo?.mobileNumber || ""}
              onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </div>

          <div>
            <strong>संपूर्ण पत्ता:</strong>
            <input
              type="text"
              value={userInfo?.address || ""}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </div>

          <div>
            <strong>व्यवसाय:</strong>
            <input
              type="text"
              value={userInfo?.occupation || ""}
              onChange={(e) => handleInputChange("occupation", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </div>

          <div>
            <strong>संपूर्ण उत्पन्न:</strong>
            <input
              type="text"
              value={userInfo?.totalIncome || ""}
              onChange={(e) => handleInputChange("totalIncome", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </div>

          <div>
            <strong>कर्ज मागणीचे कारण:</strong>
            <input
              type="text"
              value={userInfo?.loanReason || ""}
              onChange={(e) => handleInputChange("loanReason", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </div>

          <div>
            <strong>वार्षिक उत्पन्न:</strong>
            <input
              type="text"
              value={userInfo?.annualIncome || ""}
              onChange={(e) => handleInputChange("annualIncome", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </div>

          <div>
            <strong>जामीनदार:</strong>
            {guarantors.map((g, i) => (
              <div key={i} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={g}
                  onChange={(e) => handleGuarantorChange(i, e.target.value)}
                  className="border px-2 py-1 w-full"
                />
                <button
                  onClick={() => handleRemoveGuarantor(i)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >X</button>
              </div>
            ))}
            <button
              onClick={handleAddGuarantor}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >जामीनदार जोडा</button>
          </div>
        </div>

        <table className="w-full border border-black mt-6 border-collapse">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2 text-left">अ.क्र.</th>
              <th className="border border-black px-4 py-2 text-left">विवरण</th>
              <th className="border border-black px-4 py-2 text-left">हायरपर्चेस लोन</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(([no, desc, value, name]) => (
              <tr key={no}>
                <td className="border border-black px-4 py-2">{no}</td>
                <td className="border border-black px-4 py-2">{desc}</td>
                <td className="border border-black px-4 py-2">
                  <input
                    type="text"
                    value={value || ""}
                    name={name}
                    onChange={(e) => handleInputChange(name, e.target.value)}
                    className="border px-2 py-1 w-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </NavigationWrapper>
  );
};

export default CreditAppraisalNote;