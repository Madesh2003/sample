import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from ".././contexts/AuthContext";
import { setSessionStorageData } from ".././Storage/Sessionstorage";
import { useStateContext } from '../contexts/ContextProvider';
import { Navbar, Sidebar } from '../components';
import { ProductsContext } from '../contexts/Productcountcontext'


export default function Addproduct() {
    const { fetchProducts } = useContext(ProductsContext);


    const { setCurrentMode, currentMode, activeMenu } = useStateContext();

useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentMode]);

    const [productName, setProductName] = useState('')
    const [brandName, setBrandName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [offeredPrice, setOfferedPrice] = useState(0)
    const [offerName, setOfferName] = useState('')
    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')
    const [images, setImages] = useState('')
    const [stocks, setStocks] = useState(0)

    const navigate = useNavigate()

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8000/product/create", {
            productName,
            productDescription,
            brandName,
            productPrice,
            offeredPrice,
            offerName,
            category,
            subcategory,
            images,
            stocks
          });
          alert('Created successfully');
          fetchProducts(); 
        } catch (err) {
          console.log(err);
          alert('Fill all the required fields');
        }
      };

  
    

    return (
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
        <div className=" flex mt-15 flex-wrap justify-center ">
          <div className="bg-white shadow-xl p-8 uppercase tracking-wider w-full dark:text-gray- 200 dark:bg-secondary-dark-bg m-3 rounded-2xl">
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Logo
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSignup}>
                        <div>
                            <label
                                htmlFor="firstname"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               Pn
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e) => setProductName(e.target.value)}
                                    type="text"
                                    id="productName"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="lastname"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                pd
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e) => setProductDescription(e.target.value)}
                                    type="text"
                                    id="productDescription"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                bn
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e) => setBrandName(e.target.value)}
                                    type="text"
                                    id="brandName"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="phonenumber"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               pp
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e) => setProductPrice(e.target.value)}
                                    type="number"
                                    id="productPrice"
                                    maxLength="10"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="phonenumber"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               stocks
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e) => setStocks(e.target.value)}
                                    type="number"
                                    id="stocks"
                                    maxLength="10"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                cat
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e) => setCategory(e.target.value)}
                                    type="text"
                                    name="category"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                         <div className="mt-4">
                            <label
                                htmlFor="subcategory"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               subcat
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e) => setSubcategory(e.target.value)}
                                    type="text"
                                    name="subcategory"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                               Signup
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                          <Link to='/'>
                          <a className="text-purple-600 hover:underline">
                                LogIn
                            </a>
                          </Link>
                        </span>
                    </div>
                  </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    );
}