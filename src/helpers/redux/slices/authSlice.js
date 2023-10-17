import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: "",
  photoUser: "",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setPhotoUser: (state, action) => {
      state.photoUser = action.payload;
    },
    setData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearData: (state, action) => {
      return initialState;
    },
  },
});

export const {
    setAccessToken,
    setUser,
    setPhotoUser,
    setData,
    clearData,
} = authSlice.actions;

export default authSlice.reducer;
