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
import Addproducts from './pages/Addproducts';
import ProductDetail from './pages/ProductDetail';


const Main = () => {
  const { setCurrentMode, currentMode, activeMenu } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentMode]);

  return (
    <BrowserRouter>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
          <div className="flex relative dark:bg-main-dark-bg">
            {activeMenu ? (
              <div className="w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-64 w-full  '
                  : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                <Routes>
                  <Route path="/dashboard" element={<Ecommerce />} />
                  <Route path="/topsellingproducts" element={<Topsellingproductsgrid />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/area" element={<Soldproductschart />} />
                  <Route path="/bar" element={<Categorychart />} />
                  <Route path='/addproduct' element={<Addproducts />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/productupdatation" element={<ProductDetail />} />
                </Routes>
              </div>
            </div>
          </div>          
      </div>
    </BrowserRouter>
  );
};

export default Main;