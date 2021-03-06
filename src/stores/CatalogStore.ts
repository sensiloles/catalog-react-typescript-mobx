import { observable, action } from 'mobx';
import {
  ICatalogStore,
  ICategories,
  ICategory,
  IProducts,
  IProduct
} from '../types';
import { getMaxOfArray } from '../utils';

interface CatalogStoreProps {
  categories: ICategories;
  products: IProducts;
}

class CatalogStoreModel implements ICatalogStore {
  @observable categories: ICategories;

  @observable products: IProducts;

  _nextCategoryId: number;

  _nextProductId: number;

  public constructor({ categories, products }: CatalogStoreProps) {
    this.categories = categories;
    this.products = products;
    this._nextCategoryId =
      getMaxOfArray(Object.keys(this.categories).map(id => Number(id))) + 1;
    this._nextProductId =
      getMaxOfArray(
        this.products.map((product: IProduct) => Number(product.id))
      ) + 1;

    this.bindMethods();
  }

  public bindMethods(): void {
    this.removeCategory = this.removeCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  @action public removeCategory(categoryId: number): void {
    delete this.categories[categoryId];
  }

  @action public editCategory(categoryId: number, props: ICategory): void {
    Object.keys(props).forEach((prop: string) => {
      this.categories[categoryId][prop as keyof ICategory] =
        props[prop as keyof ICategory];
    });
  }

  @action public addCategory(props: ICategory): void {
    const newCategory: ICategory = {} as any;

    Object.keys(props).forEach((prop: string) => {
      newCategory[prop as keyof ICategory] = props[prop as keyof ICategory];
    });

    this.categories[this._nextCategoryId] = newCategory;
    this._nextCategoryId += 1;
  }

  @action public addProduct({ name, categoryId }: Omit<IProduct, 'id'>): void {
    this.products.push({
      id: this._nextProductId,
      name,
      categoryId
    });

    this._nextProductId += 1;
  }

  @action public removeProduct(productId: number): void {
    const newData = this.products.filter(product => product.id !== productId);
    this.products = newData;
  }

  @action public editProduct(props: IProduct): void {
    const { id, name, categoryId } = props;
    this.products = this.products.map(
      (product: IProduct): IProduct => {
        if (product.id === id) {
          return {
            id,
            name,
            categoryId
          };
        }
        return product;
      }
    );
  }

  public getProduct(id: number): IProduct {
    const result = this.products.filter(
      (product: IProduct) => product.id === id
    )[0];

    if (!result) throw new Error('Product not found');

    return result;
  }
}

export function CatalogStore(catalogData: CatalogStoreProps): ICatalogStore {
  return new CatalogStoreModel(catalogData);
}
