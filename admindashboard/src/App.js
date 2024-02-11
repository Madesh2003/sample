import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Sidebar } from './components';
import { Ecommerce, Orders, Products, Customers } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Soldproductschart from './pages/Soldproducts.chart';
import Notfound from './pages/Pagenotfound';
import Topsellingproductsgrid from './pages/Topsellingproducts';
import Categorychart from './pages/Categorychart';
import { AuthContext } from './contexts/AuthContext';
import Login from './pages/Login';
import ProductUpdatation from './pages/Productupdate';
import Addproducts from './pages/Addproducts';
import UpdateProduct from './pages/UpdateProduct';
import ProductDetail from './pages/ProductDetail';
import Signup from './pages/Signup';
import Addproduct from './pages/Addproduct';
import EventSchedular from './pages/EventSchedular';
import ProductUpdate from './pages/UpdateProduct';


const App = () => {
  const { setCurrentMode, currentMode, activeMenu } = useStateContext();
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
  {!isLoggedIn ? (
    <>
      <Route element={<Login />} path='/' />
      <Route element={<Signup />} path='/signup' />
    </>
  ) : (
    <>
      <Route path="/dashboard" element={<Ecommerce />} />
      <Route path="/topsellingproducts" element={<Topsellingproductsgrid />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/area" element={<Soldproductschart />} />
      <Route path="/bar" element={<Categorychart />} />
      <Route path='/addproduct' element={<Addproduct />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productName/update" element={<ProductUpdate />} />
      <Route path="/events" element={<EventSchedular />} />

    </>
  )}
    <Route element={<Notfound />} path='*' />
</Routes>

    </BrowserRouter>
  );
};

export default App;