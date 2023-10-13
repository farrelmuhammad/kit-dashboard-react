import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  requestUpdateNotification: true,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    requestUpdateNotification: (state, action) => {
      state.requestUpdateNotification = action.payload;
    },
    clearData: (state, action) => {
      return initialState;
    },
  },
});

export const {
    setNotifications,
    setLoading,
    setData,
    requestUpdateNotification,
    clearData,
} = notificationSlice.actions;

export default notificationSlice.reducer;
