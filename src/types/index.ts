export interface Store {
  user: UserData;
  categories: object;
  products: object;
  authUser: (login: string, password: string, cb: () => void) => void;
}

export interface UserData {
  data: User | {};
  error: string;
  dataIsLoading: boolean;
  isLogged: boolean;
}

export interface User {
  id?: number | undefined;
  login: string;
  password: string;
  firstName?: string;
}
