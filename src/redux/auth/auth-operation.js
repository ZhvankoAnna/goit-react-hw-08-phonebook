import { createAsyncThunk } from '@reduxjs/toolkit';
import { alertFunc } from 'shared/services/alertFunc';
import * as api from '../../shared/api/authAPI';

export const signup = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      alertFunc('Somethink went wrong, try again');
      return rejectWithValue(response.statusText);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      alertFunc('Somethink went wrong, try again');
      return rejectWithValue(response.statusText);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await api.logout();
    } catch ({ response }) {
      alertFunc('Somethink went wrong, try again');
      return rejectWithValue(response.statusText);
    }
  }
);

export const refresh = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.current(auth.token);
      return result;
    } catch ({ response }) {
      alertFunc('Somethink went wrong, try again');
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
