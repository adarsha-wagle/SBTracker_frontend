import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../config/base_url";

const initialState = {
  selectedMap: null,
  studentList: [
    {
      _id: "651f9f5f9a3be976d6691c4c",
      name: "Nimesh Pandey",
      studentClass: "8",
      image: "uploads/1c678e8be1795ba611188b737702df1a",
      v: 0,
      studentPickUp: {
        pickUpLocation: {
          type: "Point",
          coordinates: {
            longitude: 85.789654,
            latitude: 27.563265,
            _id: "651f9f5f9a3be976d6691c4f",
          },
          areaName: "sanepa",
        },
        _id: "651f9f5f9a3be976d6691c4e",
        studentID: "651f9f5f9a3be976d6691c4c",
        v: 0,
      },
    },
  ],
  isLoading: false,
  error: null,
};

export const fetchStudentListAsync = createAsyncThunk(
  "location/fetchStudentListAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/school/student/location`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Something went wrong";
      return rejectWithValue(errorMessage);
    }
  }
);

const routeSlice = createSlice({
  name: "route",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStudentListAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.studentList = action.payload;
      })
      .addCase(fetchStudentListAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default routeSlice.reducer;
