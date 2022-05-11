import React from 'react';
import { IAuthError, IRegisterError } from '../interfaces/user';
import { IRegister, ILogin } from '../services/requests/requests';

export const setFormState = (
  type: 'email' | 'name' | 'password',
  value: string,
  setState:
    | React.Dispatch<React.SetStateAction<IRegister>>
    | React.Dispatch<React.SetStateAction<ILogin>>,
  setErrorState:
    | React.Dispatch<React.SetStateAction<IRegisterError>>
    | React.Dispatch<React.SetStateAction<IAuthError>>
) => {
  if (type === 'password') {
    setState((prevState: any) => {
      return { ...prevState, password: value };
    });
    setErrorState((prevState: any) => {
      return { ...prevState, password: value.length < 6 ? true : false };
    });
  }

  if (type === 'name') {
    setState((prevState: any) => {
      return { ...prevState, name: value };
    });
    setErrorState((prevState: any) => {
      return { ...prevState, name: value.length === 0 ? true : false };
    });
  }

  if (type === 'email') {
    setState((prevState: any) => {
      return { ...prevState, email: value };
    });
    setErrorState((prevState: any) => {
      return { ...prevState, email: value.includes('@') ? false : true };
    });
  }
};
