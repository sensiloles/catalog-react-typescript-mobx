import { observable, action } from 'mobx';
import getUser from '../data/users';
import { IAppStore, IUserStore, IUserData } from '../types';

class UserStoreModel implements IUserStore {
  readonly _appStore: IAppStore;

  @observable login = '';

  @observable error = '';

  @observable dataIsLoading = false;

  @observable isLogged = false;

  constructor(AppStore: IAppStore) {
    this._appStore = AppStore;
  }

  @action async authUser(login: string, password: string, cb: () => void) {
    this.dataIsLoading = true;
    try {
      const userData: IUserData = await getUser({ login, password });
      this.login = userData.login;
      this.dataIsLoading = false;
      this.isLogged = true;
      this.error = '';
      cb();
    } catch (e) {
      this.error = e.message;
      this.dataIsLoading = false;
      cb();
    }
  }
}

export function UserStore(appStore: IAppStore): IUserStore {
  return new UserStoreModel(appStore);
}
