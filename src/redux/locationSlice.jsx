import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    selectedMap: null,
  },
  reducers: {
    setMap: (state, action) => {
      state.selectedMap = action.payload;
    },
  },
});

export const { setMap } = locationSlice.actions;
export default locationSlice.reducer;
