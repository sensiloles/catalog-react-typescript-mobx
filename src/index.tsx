import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App/App';

const render = (): void => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();
