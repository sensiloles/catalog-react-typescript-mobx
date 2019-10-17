import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../stores/AppStore';
import Login from '../Login';
// import Catalog from '../Catalog';
import { Store } from '../../types';
import './App.scss';

export const App = observer(
  (): React.ReactElement<HTMLElement> => {
    const store: Store = useContext<Store>(AppStoreContext);
    const { isLogged } = store.user;

    return (
      <div className="app">
        {isLogged ? <div>Entrance success</div> : <Login />}
      </div>
    );
  }
);
