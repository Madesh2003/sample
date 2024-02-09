import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { SoldProductsProvider } from './contexts/revenuecontext';
import AuthContextProvider from "./contexts/AuthContext";
import { ProductsProvider } from './contexts/Productcountcontext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SoldProductsProvider>
          <ContextProvider>
          <ProductsProvider>
            <App />
            </ProductsProvider>
          </ContextProvider>
      </SoldProductsProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);