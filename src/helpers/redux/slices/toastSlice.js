import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  error: null,
  onClose: null,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return {
        ...state,
        message: action.payload,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    setClose: (state, action) => {
      return {
        ...state,
        onClose: action.payload,
      };
    },
  },
});

export const {
    setMessage,
    setError,
    setClose,
} = toastSlice.actions;

export default toastSlice.reducer;
