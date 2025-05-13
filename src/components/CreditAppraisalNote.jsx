import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import { routes } from "@/constent";
import { useSelector, useDispatch } from "react-redux";
import { updateUserField } from "@/redux/user/userSlice";


const CreditAppraisalNote = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    date: new Date().toISOString().split("T")[0],
    borrowerAccountNo: "",
    borrowerName: "",
    mobileNumber: "",
    address: "",
    occupation: "",
    totalIncome: "",
    loanAmount: "",
    loanReason: "",
    annualIncome: "",
    guarantors: [""],
    loanType: "",
    loanLimit: "",
    approvedAmount: "",
    loanDuration: "",
    interestRate: "",
    emiAmount: "",
  });

  const tableData = [
    ["१", "कर्ज रक्कम", formData.loanAmount, "loanAmount"],
    ["२", "कर्ज मर्यादा रुपये", formData.loanLimit, "loanLimit"],
    [
      "३",
      "मंजूर हायरपर्चेस रक्कम रुपये",
      formData.approvedAmount,
      "approvedAmount",
    ],
    ["४", "कर्जाचे कारण", formData.loanReason, "loanReason"],
    [
      "५",
      "कर्जाची मुदत / महिन्ये / वर्षे",
      formData.loanDuration,
      "loanDuration",
    ],
    ["६", "व्याज दर [स.ध.अ.]", formData.interestRate, "interestRate"],
    ["७", "हप्ता रक्कम रुपये [प्रतिमहिना]", formData.emiAmount, "emiAmount"],
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    dispatch(updateUserField({ field, value }));
  };

  console.log(user)

  const handleTableChange = (index, value) => {
    const updatedTable = [...formData.tableData];
    updatedTable[index][2] = value;
    setFormData((prev) => ({ ...prev, tableData: updatedTable }));
  };

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
              <strong>कर्जदाराचे खाते क्रमांक:</strong>{" "}
              <input
                type="text"
                value={user?.userInfo?.borrowerAccountNo}
                placeholder="कर्जदाराचे खाते क्रमांक"
                onChange={(e) => {
                  if (isNaN(e.target.value)) return;
                  handleInputChange("borrowerAccountNo", e.target.value);
                }}
                className="border px-2 py-1 w-full"
              />
            </div>
            <div>
              <strong>तारीख:</strong>{" "}
              <input
                type="date"
                value={formData.date}
                onChange={(e) => {
                  handleInputChange("date", e.target.value);
                }}
                placeholder="DD/MM/YYYY"
                className="border px-2 py-1 w-full"
              />
            </div>
          </div>
          <p>
            <strong>कर्ज प्रकार:</strong>{" "}
            <select
              value={formData.loanType}
              onChange={(e) => handleInputChange("loanType", e.target.value)}
              className="border px-2 py-1 w-full"
            >
              <option value="" disabled>
                कर्ज प्रकार निवडा
              </option>
              <option value="हायरपर्चेस कर्ज">हायरपर्चेस कर्ज</option>
              {/* <option value="व्यक्तिगत कर्ज">व्यक्तिगत कर्ज</option>
              <option value="व्यवसाय कर्ज">व्यवसाय कर्ज</option>
              <option value="गृह कर्ज">गृह कर्ज</option>
              <option value="शिक्षण कर्ज">शिक्षण कर्ज</option>
              <option value="वाहन कर्ज">वाहन कर्ज</option>
              <option value="कृषी कर्ज">कृषी कर्ज</option>
              <option value="इतर">इतर</option> */}
            </select>
          </p>
          <p>
            <strong>कर्जदाराचे नाव:</strong>{" "}
            <input
              type="text"
              value={formData.borrowerName}
              placeholder="कर्जदाराचे नाव"
              onChange={(e) =>
                handleInputChange("borrowerName", e.target.value)
              }
              className="border px-2 py-1 w-full"
            />
          </p>
          <p>
            <strong>मोबाईल नंबर:</strong>{" "}
            <input
              type="text"
              value={formData.mobileNumber}
              placeholder="मोबाईल नंबर"
              onChange={(e) =>
                handleInputChange("mobileNumber", e.target.value)
              }
              className="border px-2 py-1 w-full"
            />
          </p>
          <p>
            <strong>संपूर्ण पत्ता:</strong>{" "}
            <input
              type="text"
              value={formData.address}
              placeholder="संपूर्ण पत्ता"
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </p>
          <p>
            <strong>व्यवसाय:</strong>{" "}
            <input
              type="text"
              value={formData.occupation}
              placeholder="व्यवसाय"
              onChange={(e) => handleInputChange("occupation", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </p>
          <p>
            <strong>संपूर्ण उत्पन्न:</strong>{" "}
            <input
              type="text"
              value={formData.totalIncome}
              placeholder="संपूर्ण उत्पन्न"
              onChange={(e) => handleInputChange("totalIncome", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </p>
          <p>
            <strong>कर्ज रक्कम:</strong>{" "}
            <input
              type="text"
              value={formData.loanAmount}
              placeholder="कर्ज रक्कम"
              onChange={(e) => handleInputChange("loanAmount", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </p>
          <p>
            <strong>कर्ज मागणीचे कारण:</strong>{" "}
            <input
              type="text"
              value={formData.loanReason}
              placeholder="कर्ज मागणीचे कारण"
              onChange={(e) => handleInputChange("loanReason", e.target.value)}
              className="border px-2 py-1 w-full"
            />
          </p>
          <p>
            <strong>वार्षिक उत्पन्न:</strong>{" "}
            <input
              type="text"
              value={formData.annualIncome}
              placeholder="वार्षिक उत्पन्न"
              onChange={(e) =>
                handleInputChange("annualIncome", e.target.value)
              }
              className="border px-2 py-1 w-full"
            />
          </p>
          <div>
            <strong>जामीनदार:</strong>{" "}
            {formData.guarantors.map((guarantor, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={guarantor}
                  placeholder="जामीनदाराचे नाव"
                  onChange={(e) => {
                    const updatedGuarantors = [...formData.guarantors];
                    updatedGuarantors[index] = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      guarantors: updatedGuarantors,
                    }));
                  }}
                  className="border px-2 py-1 w-full"
                />
                <button
                  onClick={() => {
                    const updatedGuarantors = formData.guarantors.filter(
                      (_, i) => i !== index
                    );
                    setFormData((prev) => ({
                      ...prev,
                      guarantors: updatedGuarantors,
                    }));
                  }}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  X
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  guarantors: [...prev.guarantors, ""],
                }))
              }
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              जामीनदार जोडा
            </button>
          </div>
        </div>

        <table className="w-full border border-black mt-6 border-collapse">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2 text-left">
                अ.क्र.
              </th>
              <th className="border border-black px-4 py-2 text-left">विवरण</th>
              <th className="border border-black px-4 py-2 text-left">
                हायरपर्चेस लोन
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(([no, desc, value, name], index) => (
              <tr key={no}>
                <td className="border border-black px-4 py-2">{no}</td>
                <td className="border border-black px-4 py-2">{desc}</td>
                <td className="border border-black px-4 py-2">
                  <input
                    type="text"
                    value={value}
                    name={name}
                    placeholder={desc}
                    onChange={(e) => handleInputChange(name, e.target.value)}
                    //   onChange={(e) => handleTableChange(index, e.target.value)}
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
