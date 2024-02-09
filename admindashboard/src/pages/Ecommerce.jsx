import React, { useContext, useEffect } from 'react';
import { BsCurrencyDollar, BsBoxSeam } from 'react-icons/bs';
import { GoDot } from 'react-icons/go';
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';
import { useSoldProducts } from '../contexts/revenuecontext';
import { BiSolidNavigation } from "react-icons/bi";
import { FaDownload } from 'react-icons/fa'
import Barchart from './Charts/Bar';
import { MdOutlineSupervisorAccount } from 'react-icons/md'
import Topsellingproducts from '../components/Topsellingproduct';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ProductsContext } from '../contexts/Productcountcontext';
import { Area } from '../components';
import { Navbar, Sidebar } from '../components';


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
        <div className="bg-white shadow-2xl dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-cente">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl font-extrabold tracking-wide">&#8377; {calculateTotalRevenue()}</p>
              <button onClick={downloadCSV} class=" shadow-[0px 0px 10px 1px rgba(69,4,253,1)] transition duration-700 border-0 text-md h-10 w-32 bg-brand-bg hover:bg-black text-white mt-2 px-3 rounded-md">
                <span>Download</span>
                <FaDownload class='inline-block animate-bounce text-md ml-2' />
              </button>
            </div>
            <button
              type="button"
              className="text-2xl h-14 text-brand-500 dark:text-white opacity-0.9 rounded-full bg-card-bg dark:bg-card-dark-bg p-4 hover:drop-shadow-xl"
            >
              <BsCurrencyDollar />
            </button>

          </div>
        </div>



        <div className="flex my-7 flex-wrap justify-center gap-4 items-center">
          <div className="flex flex-wrap gap-6  shadow-xl bg-white h-36 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <Link to="/customers">
              <button
                type="button"
                className="text-2xl h-14 text-brand-500 dark:text-white opacity-0.9 rounded-full bg-card-bg dark:bg-card-dark-bg p-4 hover:drop-shadow-xl"
              >
                <MdOutlineSupervisorAccount />
              </button>
            </Link>
            <div>
              <p className="mt-3">
                <span className="text-lg font-extrabold tracking-wide">38,354</span>
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

      <div className="flex justify-center my-10">
        <div className='bg-white shadow-2xl flex flex-wrap gap-6 items-center dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6'>
          <div className=" border-r-1 border-black pr-6 md:w-500">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Products sold by Category</p>
            </div>
            <div className="mt-7">
              <div>
                <Barchart currentMode={currentMode} width="700px" height="560px" />
              </div>
            </div>
          </div>

          <div className='grid grid-flow-row justify-center content-between h-96'>
            <div className="">
              <p className="font-semibold text-xl">Top Selling Products</p>
            </div>
            <div className="md:w-500 mt-7">
              <Topsellingproducts />
            </div>
            <div className='flex flex-wrap justify-end'>

              <Link to='/Topsellingproducts'>
                <TooltipComponent content='view full data' position='TopCenter'>
                  <button
                    type="button"
                    className="text-2xl h-14 text-brand-500 dark:text-white opacity-0.9 rounded-full bg-card-bg dark:bg-card-dark-bg p-4 hover:drop-shadow-xl duration-500"
                  >
                    <BiSolidNavigation />
                  </button>
                </TooltipComponent>
              </Link>

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