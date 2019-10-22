import { UserStore } from './UserStore';
import { CatalogStore } from './CatalogStore';
import { IAppStore, IUserStore, ICatalogStore } from '../types';

export class AppStore implements IAppStore {
  readonly userStore: IUserStore;

  readonly catalogStore: ICatalogStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.catalogStore = CatalogStore(this);
  }
}
