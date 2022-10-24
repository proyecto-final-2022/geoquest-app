import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scene: 0,
  objects: {}
};


const questSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {
    set: (_state, action) => {
      return {
        ...action.payload
      };
    },
  }
});

export default questSlice;
