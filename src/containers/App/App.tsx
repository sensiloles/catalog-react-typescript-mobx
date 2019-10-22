import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import Catalog from '../Catalog';
import Login from '../Login';
import './App.scss';

export const App = observer(
  (): React.ReactElement<HTMLElement> => {
    const { userStore } = useStores();

    return (
      <div className="app">{!userStore.isLogged ? <Catalog /> : <Login />}</div>
    );
  }
);
