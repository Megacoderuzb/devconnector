import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  exp: {
    company: "",
    fromDate: "",
    toDate: "",
  },
};

const addExpSlice = createSlice({
  name: "addexp",
  initialState,
  reducers: {
    newExp(state, { payload: { company, fromDate, toDate } }) {
      state.info = { company, fromDate, toDate };
    },
  },
});

export const { newExp } = addExpSlice.actions;

export default addExpSlice.reducer;
// {
//   newExp(state, { payload: { company, fromDate, toDate } }) {
//     state.info.company = {company,fromDate,toDate},
//   }
// }
// status: "",
// bio: "",
// skills: [],
// date: "",
// website: "",
// githubusername: "",
// user: {},
// social: {},
// location: "",
// education: [],
// expirience: [],
