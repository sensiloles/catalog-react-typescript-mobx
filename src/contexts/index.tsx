import React from 'react';
import { AppStore, UserStore, CatalogStore } from '../stores';

export const storesContext = React.createContext({
  appStore: new AppStore(),
  userStore: new UserStore(new AppStore()),
  catalogStore: CatalogStore(new AppStore())
});
