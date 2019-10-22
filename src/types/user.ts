export interface IUserStore {
  login: string;
  error: string;
  dataIsLoading: boolean;
  isLogged: boolean;
  authUser: (login: string, password: string, cb: () => void) => void;
}

export interface IUser {
  login: string;
  password: string;
}

export interface IUserData {
  login: string;
}
