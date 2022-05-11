export interface IUser {
  id: number;
  name: string;
  email: string;
  location: string;
  createdat: string;
}

export interface IAuthError {
  password: boolean;
  email: boolean;
}

export interface IRegisterError extends Omit<IAuthError, ''> {
  name: boolean;
}
