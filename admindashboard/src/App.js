import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Ecommerce, Products } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Soldproductschart from './pages/Soldproducts.chart';
import Notfound from './pages/Pagenotfound';
import Topsellingproductsgrid from './pages/Topsellingproducts';
import Categorychart from './pages/Categorychart';
import { AuthContext } from './contexts/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductUpdate from './pages/UpdateProduct';
import CustomerDetails from './pages/CustomerDetails';
import AddProduct from './pages/Addproduct';
import WorldMapChart from './pages/Charts/RaderChart';
import Subcategory from './pages/Subcategory';
import Order from './pages/Order';
import Scheduler from './pages/Calendar';
import Countrymap from './pages/CountryMap';
import CustomerDetailsPage from './pages/CustomerDetailsPage';
import ViewProduct from './pages/ViewProduct';

const App = () => {
  const { setCurrentMode } = useStateContext();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentMode]);

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Ecommerce />} />
            <Route path="/topsellingproducts" element={<Topsellingproductsgrid />} />
            <Route exact path="/customerdetails" element={<CustomerDetails />} />
            <Route path="/customerdetails/customer/:customeremail" element={<CustomerDetailsPage />} />
            <Route path="/area" element={<Soldproductschart />} />
            <Route path="/bar" element={<Categorychart />} />
            <Route path="/subcategory" element={<Subcategory />} />
            <Route path="/order" element={<Order />} />
            <Route path="/countries" element={<Countrymap />} />
            <Route path="/events" element={<Scheduler />} />
            <Route path="/products/addproduct" element={<AddProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productName/view" element={<ViewProduct />} /> 
            <Route path="/products/:productName/update" element={<ProductUpdate />} />
           
            <Route path='*' element={<Notfound />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
