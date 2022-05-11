import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IUser } from '../../interfaces/user';
import { api } from '../api/api';

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends Omit<ILogin, ''> {
  name: string;
}

export interface IAuthResponse {
  message:
    | 'success'
    | 'invalid username or password'
    | 'The email address you have entered is already registered';
  data: {
    Id: number;
    Name: string;
    Email: string;
    Token: string;
  };
}

export interface IUsersResponse {
  page: number;
  per_page: number;
  totalrecord: number;
  total_pages: number;
  data: IUser[];
}

export const RequestsUser = {
  async register(dataRegister: IRegister) {
    const response: AxiosResponse<IAuthResponse> = await api.post(
      'authaccount/registration',
      dataRegister
    );
    return response.data;
  },

  async login(dataLogin: ILogin) {
    const response: AxiosResponse<IAuthResponse> = await api.post(
      'authaccount/login',
      dataLogin
    );
    return response.data;
  },

  async getUsers(page: number, token: string) {
    const config: AxiosRequestConfig = {
      headers: { Authorization: token },
      params: { page },
    };

    const response: AxiosResponse<IUsersResponse> = await api.get(
      'users',
      config
    );
    return response;
  },
};
