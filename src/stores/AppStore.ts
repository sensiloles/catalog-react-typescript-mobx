import { UserStore } from './UserStore';
import { CatalogStore } from './CatalogStore';
import { IAppStore, IUserStore, ICatalogStore } from '../types';

export class AppStoreModel implements IAppStore {
  readonly _userStore: IUserStore;

  readonly _catalogStore: ICatalogStore;

  constructor() {
    this._userStore = UserStore(this as IAppStore);
    this._catalogStore = CatalogStore(this as IAppStore);
  }
}

export function AppStore(): IAppStore {
  return new AppStoreModel();
}
