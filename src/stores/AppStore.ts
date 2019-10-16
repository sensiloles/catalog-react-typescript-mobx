import { observable, action } from 'mobx';
import { createContext, Context } from 'react';
import getUser from '../data/users';
import { Store } from '../types';

class AppStore implements Store {
  @observable user = {
    data: {},
    error: '',
    dataIsLoading: false,
    isLogged: false
  };

  @observable categories = {};

  @observable products = {};

  @action authUser(login: string, password: string, cb: () => void) {
    this.user.dataIsLoading = true;

    try {
      getUser({ login, password })
        .then(data => {
          this.user.data = data;
          this.user.dataIsLoading = false;
          this.user.isLogged = true;
          this.user.error = '';
        })
        .catch(e => {
          this.user.error = e.message;
          this.user.dataIsLoading = false;
          cb();
        });
    } catch (e) {
      this.user.error = e.message;
      this.user.dataIsLoading = false;
      cb();
    }
  }
}

export const AppStoreContext: Context<Store> = createContext<Store>(
  new AppStore()
);
