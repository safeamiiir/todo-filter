import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRoot from './AppRoot';

ReactDOM.render(
  <React.StrictMode>
    <AppRoot />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
