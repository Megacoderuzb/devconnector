import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  education: {
    learn: "",
    fromDate: "",
    toDate: "",
  },
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload: { learn, fromDate, toDate } }) {
      state.info = { learn, fromDate, toDate };
    },
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
