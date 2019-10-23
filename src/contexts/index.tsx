import React from 'react';
import { AppStore, UserStore, CatalogStore } from '../stores';

export const storesContext = React.createContext({
  appStore: AppStore(),
  userStore: UserStore(AppStore()),
  catalogStore: CatalogStore(AppStore())
});
