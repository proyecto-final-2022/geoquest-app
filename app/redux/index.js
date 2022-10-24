import { configureStore } from "@reduxjs/toolkit";
import Quest from "./slices/quest";


const store = configureStore({
  reducer: {
    quest: Quest.reducer
  }
});
  
export default store;
