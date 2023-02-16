import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userProfile(profile) {
      state.user = profile;
    },
  },
});

export const { userProfile } = userSlice.actions;

export default userSlice.reducer;
