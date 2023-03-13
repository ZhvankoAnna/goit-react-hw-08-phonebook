import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, refresh } from './auth-operation';

const initialState = {
  user: {},
  isLogin: false,
  token: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
        state.isLogin = true;
      })
      .addCase(signup.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
        state.isLogin = true;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.token = null;
        state.user = {};
        state.isLogin = false;
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isLogin = true;
      })
      .addCase(refresh.rejected, handleRejected);
  },
});

export default authSlice.reducer;
