import axios from 'axios';
import { alertFunc } from 'shared/services/alertFunc';

export const fetchIntstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (fetchIntstance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  fetchIntstance.defaults.headers.Authorization = '';
};

export const signup = async data => {
  try {
    const { data: result } = await fetchIntstance.post('/users/signup', data);
    setToken(result.token);
    console.log(result)
    return result;
  } catch (error) {
    console.log("ERROR!!!")
    alertFunc("Something went wrong, please try again!");
  }
};

export const login = async data => {
  const { data: result } = await fetchIntstance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const result = await fetchIntstance.post('/users/logout');
  setToken();
  return result;
};

export const current = async data => {
  try {
    setToken(data);
    const { data: result } = await fetchIntstance.get('users/current');
    return result;
  } catch (error) {
    console.log('ALARM!!!');
    setToken();
    throw error;
  }
};
