import { fetchIntstance } from "./authAPI";

export const fetchContacts = () => {
  return fetchIntstance.get('/contacts');
};

export const addContact = data => {
  return fetchIntstance.post('/contacts', data);
};

export const deleteContact = id => {
  return fetchIntstance.delete(`/contacts/${id}`);
};

export const editContact = ({id, props}) => {
  return fetchIntstance.patch(`/contacts/${id}`, props);
};