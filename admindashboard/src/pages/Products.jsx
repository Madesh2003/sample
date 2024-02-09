import React,{ useEffect} from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";
import { MdDownloading } from 'react-icons/md';
import { ProductsContext } from '../contexts/Productcountcontext';
import { useContext } from 'react';
import { IoMdAdd } from "react-icons/io";
import { useStateContext } from '../contexts/ContextProvider';
import { Navbar, Sidebar } from '../components';
import axios from 'axios';


export default function Products() {
  const { setCurrentMode, currentMode, activeMenu } = useStateContext();

  useEffect(() => {
      const currentThemeColor = localStorage.getItem('colorMode');
      const currentThemeMode = localStorage.getItem('themeMode');
      if (currentThemeColor && currentThemeMode) {
        setCurrentMode(currentThemeMode);
      }
    }, [setCurrentMode]);

  const { products } = useContext(ProductsContext);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchproducts = async () => {
  //     try{
  //       const res = await axios.get("http://localhost:8000/product");
  //       console.log(res.data)
  //       setProducts(res.data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   };
  //   fetchproducts();
  // }, []);


  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the search term
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);

    // Reset current page when searching
    setCurrentPage(1);
  }, [searchTerm, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

   // Define onChangePage function
   const onChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate an array of page numbers to display in the pagination bar
  const generatePageNumbers = () => {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const maxPageNumbers = 5; // Maximum number of page numbers to display

    if (totalPages <= maxPageNumbers) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  const handleupdate = (name) =>{
    const filteredproduct = products.filter((data) => data.productName === name)
    if(filteredproduct.length > 0){
      console.log(filteredproduct)
    }else{
      console.log("error on handleupdate function")
    }
  }

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
    <div className='my-10'>
      <div className='flex flex-wrap justify-between items-center mx-3'>
        <div>
          <p className='text-2xl font-semibold tracking-wide uppercase'>All Products</p>
        </div>
        <div className='flex justify-around items-center gap-5'>
        <div>
            <input
              type='text'
              placeholder='Search products...'
              className='border p-2 rounded-full text-center shadow-lg'
              onChange={handleSearch}
            />
          </div>
          <NavLink to='/addproduct'> 
          <button
            className='text-md font-medium h-10 flex items-center bg-brand-bg text-white dark:text-white rounded-md shadow-lg dark:bg-card-dark-bg p-4 '
            onClick={() => console.log('Add Product')}
          >
            <IoMdAdd className='mr-2' />
            Add Product
          </button>
          </NavLink>
          <button
            className='text-2xl h-14 text-brand-500 dark:text-white opacity-0.9 rounded-full bg-card-bg dark:bg-card-dark-bg p-4 hover:drop-shadow-xl'
            onClick={() => console.log('Download products')}
          >
            <MdDownloading />
          </button>
          
        </div>
      </div>

      <div className='flex flex-wrap gap-6 justify-center mt-10 overflow-hidden'>
      {filteredProducts.length === 0 ? (
          <p className="text-xl font-semibold text-gray-600">No products found.</p>
        ) : (
          currentProducts.map((product, index) => (
          <Card
            key={index}
            className='shadow-4xl' 
            sx={{ width: 280, maxWidth: '100%', boxShadow: 'xl' }}
          >
          <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">{product.category}</Typography>
              <p className='text-lg font-semibold tracking-wide'>{product.productName}</p>
              {product.offeredPrice > 0 ? (
                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: 'xl' }}
                  endDecorator={
                    <Chip component="span" size="sm" variant="soft" color="success">
                      {product.offerName}
                    </Chip>
                  }
                >
                  <p>
                    {product.offeredPrice}{' '}
                    <span className='text-gray-700 line-through w'>{product.productPrice}</span>
                  </p>
                </Typography>
              ) : (
                <Typography level="title-lg" sx={{ mt: 1, fontWeight: 'xl' }}>
                  <span>{product.productPrice}</span>
                </Typography>
              )}
              <Typography level="body-sm">
                (Only{' '}
                <b>
                  {product.stocks === 0 ? (
                    <span className='text-red-600'>{product.stocks}</span>
                  ) : (
                    <span>{product.stocks}</span>
                  )}
                </b>{' '}
                left in stock!)
              </Typography>
            </CardContent>
            <CardOverflow>
              <NavLink className='w-full bg-brand-bg flex justify-center rounded-lg mb-4'>
                <button className='text-white font-semibold tracking-wide py-2 flex items-center gap-2' onClick={() => handleupdate(product.productName)}>
                  Update <span> <GrUpdate /></span>
                </button>
              </NavLink>
            </CardOverflow>
          </Card>
          ))
        )}
      </div>

     <div className='flex justify-around items-center'> 
     <div>
      products {filteredProducts.length}
     </div>
     <div className="my-8">
      {generatePageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onChangePage(pageNumber)}
          className={`mx-2 px-4 py-2 rounded-full transition-all duration-300 ${
            currentPage === pageNumber
              ? 'bg-brand-bg text-white'
              : 'bg-blue-500 text-white hover:bg-black hover:text-white'
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
    <div className=''>
      <p>{currentPage} of {totalPages} pages</p>
    </div>
     </div>
    </div>
    </div>
    </div>
    </div>
  );
}