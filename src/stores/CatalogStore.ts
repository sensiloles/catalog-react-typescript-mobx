import { observable, action } from 'mobx';
import {
  IAppStore,
  ICatalogStore,
  ICategories,
  ICategory,
  IProducts
} from '../types';

class CatalogStoreModel implements ICatalogStore {
  @observable categories: ICategories = {
    1: { name: 'test' },
    2: { name: 'test2' },
    3: { name: 'test3' }
  };

  @observable products: IProducts = [
    { id: 1, name: 'test product 1', categoryId: 2 },
    { id: 2, name: 'test product 2', categoryId: 2 },
    { id: 3, name: 'test product 4', categoryId: 3 }
  ];

  private _nextId = 4;

  public constructor(private appStore: IAppStore) {
    console.log(appStore);
  }

  public getCategory(id: number): ICategory {
    return this.categories[id];
  }

  // public getProducts(): IProducts {
  //   return this.products;
  // }
}

export function CatalogStore(appStore: IAppStore): ICatalogStore {
  return new CatalogStoreModel(appStore);
}
