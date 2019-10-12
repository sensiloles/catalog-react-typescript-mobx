import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { CatalogStore } from './Store';
import App from './containers/App';

const catalogStore = new CatalogStore();
const stores = {
  catalogStore
};

const render = (): void => {
  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

render();
