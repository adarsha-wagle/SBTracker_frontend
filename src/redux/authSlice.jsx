import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../config/base_url";
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const registerParent = createAsyncThunk(
  "auth/registerParent",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, data, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("Welcome Admin!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return response.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Something went wrong!!";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return rejectWithValue(errorMessage);
    }
  }
);
export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, data, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("Welcome Admin!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return response.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Something went wrong!!";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerParent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerParent.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerParent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
