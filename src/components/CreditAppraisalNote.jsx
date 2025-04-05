import React from "react";

const CreditAppraisalNote = () => {
  const [formData, setFormData] = React.useState({
    borrowerName: "श्री. शार्दुल पांडुरंग सौम्यश्री",
    mobileNumber: "९४०४८५४५७३",
    address: "रा. राहुड ता. चांदवड जि. नाशिक",
    occupation: "शेती",
    totalIncome: "३०,०००/-",
    loanAmount: "५०,०००/-",
    loanReason: "नवीन BAJAJ PLATINA 100 घेण्यासाठी",
    annualIncome: "२,००,०००/-",
    guarantors: ["सौ. सुमिता केशव पवार", "श्री. बाळु त्रिंबक कांबळे"],
    loanLimit: "५०,०००/-",
    approvedAmount: "५०,०००/-",
  });

  const tableData = [
    ["१", "कर्ज रक्कम", formData.loanAmount, "loanAmount"],
    ["२", "कर्ज मर्यादा रुपये", formData.loanLimit, "loanLimit"],
    ["३", "मंजूर हायरपर्चेस रक्कम रुपये", formData.approvedAmount, "approvedAmount"],
    ["४", "कर्जाचे कारण", formData.loanReason, "loanReason"],
    ["५", "कर्जाची मुदत / महिन्ये / वर्षे", "३ वर्ष"],
    ["६", "व्याज दर [स.ध.अ.]", "११%"],
    ["७", "हप्ता रक्कम रुपये [प्रतिमहिना]", "१४८०/-"],
  ];

  const handleInputChange = (field, value) => {
    console.log("Field:", field, "Value:", value);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTableChange = (index, value) => {
    const updatedTable = [...formData.tableData];
    updatedTable[index][2] = value;
    setFormData((prev) => ({ ...prev, tableData: updatedTable }));
  };

  return (
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
        <p>
          <strong>कर्जदाराचे नाव:</strong>{" "}
          <input
            type="text"
            value={formData.borrowerName}
            onChange={(e) => handleInputChange("borrowerName", e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </p>
        <p>
          <strong>मोबाईल नंबर:</strong>{" "}
          <input
            type="text"
            value={formData.mobileNumber}
            onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </p>
        <p>
          <strong>संपूर्ण पत्ता:</strong>{" "}
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </p>
        <p>
          <strong>व्यवसाय:</strong>{" "}
          <input
            type="text"
            value={formData.occupation}
            onChange={(e) => handleInputChange("occupation", e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </p>
        <p>
          <strong>संपूर्ण उत्पन्न:</strong>{" "}
          <input
            type="text"
            value={formData.totalIncome}
            onChange={(e) => handleInputChange("totalIncome", e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </p>
        <p>
          <strong>कर्ज रक्कम:</strong>{" "}
          <input
            type="text"
            value={formData.loanAmount}
            onChange={(e) => handleInputChange("loanAmount", e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </p>
        <p>
          <strong>कर्ज मागणीचे कारण:</strong>{" "}
          <input
            type="text"
            value={formData.loanReason}
            onChange={(e) => handleInputChange("loanReason", e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </p>
        <p>
          <strong>वार्षिक उत्पन्न:</strong>{" "}
          <input
            type="text"
            value={formData.annualIncome}
            onChange={(e) => handleInputChange("annualIncome", e.target.value)}
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
            <th className="border border-black px-4 py-2 text-left">अ.क्र.</th>
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
  );
};

export default CreditAppraisalNote;
