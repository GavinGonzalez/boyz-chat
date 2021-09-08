import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import { CookiesProvider } from 'react-cookie';
import DataProvider from './contexts/DataProvider';

ReactDOM.render(

  <CookiesProvider>
  <React.StrictMode>
    <DataProvider>
      <App/>
    </DataProvider>
  </React.StrictMode>
  </CookiesProvider>,

  document.getElementById('root')
);

