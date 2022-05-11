import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://restapi.adequateshop.com/api/',
  timeout: 1000,
});
