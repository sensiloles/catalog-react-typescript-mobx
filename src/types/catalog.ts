export interface ICatalogStore {
  categories: ICategories;
  products: IProducts;
  getCategory: (id: number) => ICategory;
}

export interface ICategories {
  [key: number]: ICategory;
}

export interface ICategory {
  name: string;
}

export type IProducts = IProduct[];

export interface IProduct {
  id: number;
  name: string;
  categoryId: number;
}
