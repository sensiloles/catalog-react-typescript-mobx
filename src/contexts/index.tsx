import React from 'react';
import { UserStore, CatalogStore } from '../stores';
import { CATEGORIES, PRODUCTS } from '../data/catalog';
import { IUserStore, ICatalogStore } from '../types';

export const storesContext: React.Context<{
  userStore: IUserStore;
  catalogStore: ICatalogStore;
}> = React.createContext({
  userStore: UserStore(),
  catalogStore: CatalogStore({
    categories: CATEGORIES,
    products: PRODUCTS
  })
});
