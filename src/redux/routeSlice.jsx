import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../config/base_url";

const initialState = {
  selectedMap: null,
  studentList: [],
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
