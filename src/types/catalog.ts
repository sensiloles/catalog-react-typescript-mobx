export interface ICatalogStore {
  categories: ICategories;
  products: IProducts;
  getCategory: (id: number) => ICategory;
  // addProduct: (product: IProduct) => void;
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
