import { IUserStore } from './user';
import { ICatalogStore } from './catalog';

export interface IAppStore {
  readonly userStore: IUserStore;
  readonly catalogStore: ICatalogStore;
}
