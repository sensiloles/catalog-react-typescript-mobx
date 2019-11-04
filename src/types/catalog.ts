export interface ICatalogStore {
  categories: ICategories;
  products: IProducts;
  removeCategory: (categoryId: number) => void;
  editCategory: (categoryId: number, props: ICategory) => void;
  addCategory: (props: ICategory) => void;
  addProduct: (props: Omit<IProduct, 'id'>) => void;
  removeProduct: (productId: number) => void;
  editProduct: (props: IProduct) => void;
}

export interface ICategories {
  [prop: number]: ICategory;
}

export interface ICategory {
  name: string;
}

export type IProducts = IProduct[];

export interface IProduct {
  id?: number;
  name: string;
  categoryId: number;
}
