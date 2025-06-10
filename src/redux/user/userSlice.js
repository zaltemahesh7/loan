import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
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
    loanType: "",
    loanLimit: "",
    approvedAmount: "",
    approvedAmountInWord: "",
    loanDuration: "",
    interestRate: "",
    emiAmount: "",
    borrowedVehicle: "",
    vehiclePrice: "",
    seller: "",
  },
  guarantors: [""],
};

const userSlice = createSlice({
  name: "agreement",
  initialState,
  reducers: {
    updateUserField: (state, action) => {
      const { field, value } = action.payload;
      state.userInfo[field] = value;
    },
    addGuarantor: (state, action) => {
      const payload = action.payload;
      if (typeof payload === "string") {
        state.guarantors.push(payload);
      } else if (Array.isArray(payload)) {
        state.guarantors = payload;
      }
    },
    removeGuarantor: (state, action) => {
      const index = action.payload;
      state.guarantors.splice(index, 1);
    },
    resetForm: (state) => {
      state.userInfo = initialState.userInfo;
      state.guarantors = [""];
    },
  },
});

export const { updateUserField, addGuarantor, removeGuarantor, resetForm } =
  userSlice.actions;

export default userSlice.reducer;
