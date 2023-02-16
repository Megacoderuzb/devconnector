import { configureStore } from "@reduxjs/toolkit";
import addEduReducer from "./slices/addedu";
import dashboardReducer from "./slices/dashboard";
import addExpReducer from "./slices/addexp";

const store = configureStore({
  reducer: {
    addEdu: addEduReducer,
    user: dashboardReducer,
    addExp: addExpReducer,
  },
});

export default store;
