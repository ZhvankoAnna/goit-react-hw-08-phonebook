import { createAsyncThunk } from '@reduxjs/toolkit';
import { alertFunc } from 'shared/services/alertFunc';
import * as api from 'shared/api/contactsAPI';

export const getAllContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.fetchContacts();
      return data;
    } catch ({ response }) {
      alertFunc("Somethink went wrong, try again")
      return rejectWithValue(response);
    }
  }
);

const isDublicate = (contacts, { name }) => {
  const normalizeName = name.toLowerCase();
  const dublicate = contacts.find(
    item => item.name.toLowerCase() === normalizeName
  );
  return Boolean(dublicate);
};

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContact(data);
      return result;
    } catch ({ response }) {
      alertFunc("Something went wrong, please try again!")
      return rejectWithValue(response);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(contacts.items, data)) {
        alertFunc(`${data.name} is already in contacts!`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (data, { rejectWithValue }) => {
    try {
      await api.deleteContact(data);
      return data;
    } catch ({ response }) {
      alertFunc("Something went wrong, please try again!")
      return rejectWithValue(response);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/edit',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.editContact(data);
      return result;
    } catch ({ response }) {
      alertFunc("Something went wrong, please try again!")
      return rejectWithValue(response);
    }
  }
);