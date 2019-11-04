import React from 'react';
import { storesContext } from '../contexts';
import { IUserStore, ICatalogStore } from '../types';

const useStores = (): {
  userStore: IUserStore;
  catalogStore: ICatalogStore;
} => React.useContext(storesContext);

export default useStores;
