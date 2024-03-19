import React, { useContext, useEffect } from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { GoDot } from 'react-icons/go';
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';
import { useSoldProducts } from '../contexts/revenuecontext';
import { MdOutlineSupervisorAccount } from 'react-icons/md'
import { ProductsContext } from '../contexts/Productcountcontext';
import Area from '../components/Charts/Area';
import { useCustomerContext } from '../contexts/CustomerContext';
import Downloadbtn from '../components/Downloadbtn';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import Navbar  from '../components/Navbar';
import Sidebar  from '../components/Sidebar';



const Ecommerce = () => {
  const { setCurrentMode, currentMode, activeMenu } = useStateContext();


    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentMode(currentThemeMode);
        }
      }, [setCurrentMode]);

  const { calculateTotalProducts, downloadProductsData } = useContext(ProductsContext);
  const { calculateTotalRevenue, downloadCSV, soldProducts } = useSoldProducts();
  const { uniqueCustomerCount } = useCustomerContext();


  const currentYear = new Date().getFullYear();
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
    <div className="mt-24 mb-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white shadow-2xl dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
          <div className="flex justify-between items-center">
            <div className='flex flex-col space-y-2'>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl font-extrabold tracking-wide">&#8377; {calculateTotalRevenue()}</p>
             <Downloadbtn func={downloadCSV}/>
            </div>
            <button
              type="button"
              className="text-2xl h-14 text-brand-500 dark:text-white opacity-0.9 rounded-full bg-card-bg dark:bg-card-dark-bg p-4 hover:drop-shadow-xl"
            >
             <FaIndianRupeeSign />
            </button>

          </div>
        </div>



        <div className="flex my-7 flex-wrap justify-center gap-4 items-center">
          <div className="flex flex-wrap gap-6 cursor-pointer  shadow-xl bg-white h-36 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <Link to="/customerdetails">
              <button
                type="button"
                className="text-2xl h-14 text-brand-500 dark:text-white opacity-0.9 rounded-full bg-card-bg dark:bg-card-dark-bg p-4 hover:drop-shadow-xl"
              >
                <MdOutlineSupervisorAccount />
              </button>
            </Link>
            <div>
              <p className="mt-3">
                <span className="text-lg font-extrabold tracking-wide">{uniqueCustomerCount}</span>
              </p>
              <p className="text-sm font-semibold tracking-wide text-gray-500  mt-1">Customers</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6  shadow-xl bg-white h-36 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <Link to="/products">
              <button
                type="button"
                className="text-2xl h-14 text-brand-500 dark:text-white opacity-0.9 rounded-full bg-card-bg dark:bg-card-dark-bg p-4 hover:drop-shadow-xl"
              >
                <BsBoxSeam />
              </button>
            </Link>
            <div>
              <p className="mt-3">
                <span className="text-lg font-extrabold tracking-wide">{calculateTotalProducts()}</span>
              </p>
              <p className="text-sm font-semibold tracking-wide text-gray-500  mt-1">Products</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex my-7 gap-10 flex-wrap justify-center">
        <div className="bg-white shadow-xl dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates For {currentYear}</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Sold Products</span>
              </p>
              <p className="flex items-center text-myblue gap-2 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Revenue</span>
              </p>
            </div>
          </div>
          <div className="mt-7">
            <div>
              <Area currentMode={currentMode} width="700px" />
            </div>
          </div>
        </div>
      </div>
</div>
</div>
</div>
    </div>
  );
};

export default Ecommerce;