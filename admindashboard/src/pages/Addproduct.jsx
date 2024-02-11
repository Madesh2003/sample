// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import axios from "axios";
// import { AuthContext } from ".././contexts/AuthContext";
// import { setSessionStorageData } from ".././Storage/Sessionstorage";
// import { useStateContext } from '../contexts/ContextProvider';
// import { Navbar, Sidebar } from '../components';
// import TextInput from "../components/Elements/TextInput";
// import { FiPlusCircle } from "react-icons/fi";
// import { GrPowerReset } from "react-icons/gr";
// import { IoCreateOutline } from "react-icons/io5";
// import Buttons from "../components/Buttons";
// import { ProductsContext } from '../contexts/Productcountcontext'

// export default function Addproduct() {
//     const { fetchProducts } = useContext(ProductsContext);

//     const { setCurrentMode, currentMode, activeMenu } = useStateContext();

// useEffect(() => {
//     const currentThemeColor = localStorage.getItem('colorMode');
//     const currentThemeMode = localStorage.getItem('themeMode');
//     if (currentThemeColor && currentThemeMode) {
//       setCurrentMode(currentThemeMode);
//     }
//   }, [setCurrentMode]);

//     const [productName, setProductName] = useState('')
//     const [brandName, setBrandName] = useState('')
//     const [productDescription, setProductDescription] = useState('')
//     const [productPrice, setProductPrice] = useState(0)
//     const [offeredPrice, setOfferedPrice] = useState(0)
//     const [offerName, setOfferName] = useState('')
//     const [category, setCategory] = useState('')
//     const [subcategory, setSubcategory] = useState('')
//     const [images, setImages] = useState('')
//     const [stocks, setStocks] = useState(0)

//     const navigate = useNavigate()

//     const handleSignup = async (event) => {
//         event.preventDefault();
//         try {
//           await axios.post("http://localhost:8000/product/create", {
//             productName,
//             productDescription,
//             brandName,
//             productPrice,
//             offeredPrice,
//             offerName,
//             category,
//             subcategory,
//             images,
//             stocks
//           });
//           alert('Created successfully');
//           fetchProducts();
//         } catch (err) {
//           console.log(err);
//           alert('Fill all the required fields');
//         }
//       };

//   const resetForm= () => {

//   }

//   const createproduct = () => {
//     console.log("created")
//   }

//     return (
//         <div className={currentMode === 'Dark' ? 'dark' : ''}>

//         <div className="flex relative dark:bg-main-dark-bg">

//                    {activeMenu ? (
//                      <div className="w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
//                        <Sidebar />
//                      </div>
//                    ) : (
//                      <div className="w-0 dark:bg-secondary-dark-bg">
//                        <Sidebar />
//                      </div>
//                    )}
//                    <div
//                      className={
//                        activeMenu
//                          ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-64 w-full  '
//                          : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
//                      }
//                    >
//                      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
//                        <Navbar />
//                      </div>
//         <div className=" flex mt-15 flex-wrap justify-center ">
//           <div className="bg-white shadow-xl p-8 uppercase tracking-wider w-full dark:text-gray- 200 dark:bg-secondary-dark-bg m-3 rounded-2xl">
//                 <div>
//                     <a href="/">
//                         <h3 className="text-xl uppercase font-bold text-center text-black">
//                             add product
//                         </h3>
//                     </a>
//                 </div>
//                     <form onSubmit={handleSignup}>

//                     <TextInput
//                     label="Product Name"
//                     id="productName"
//                     name="productName"
//                     type="text"
//                     placeholder="Enter Product name"
//                     onChange={(e) => setProductName(e.target.value)}
//                   />
//                   <TextInput
//                     label="Product Description"
//                     id="ProductDescription"
//                     name="ProductDescription"
//                     type="text"
//                     placeholder="Enter Product Description"
//                     onChange={(e) => setProductDescription(e.target.value)}
//                   />

//                   <TextInput
//                     label="Product BrandName"
//                     id="brandName"
//                     name="brandName"
//                     type="text"
//                     placeholder="Enter Product BrandName"
//                     onChange={(e) => setBrandName(e.target.value)}
//                   />
//                       <TextInput
//                         label="Product Normal Price"
//                         id="productPrice"
//                         name="productPrice"
//                         type="number"
//                         placeholder="Enter Normal Price"
//                             onChange={(e) => setProductPrice(e.target.value)}
//                       />
//                       <TextInput
//                         label="Product Offer Price"
//                         id="offeredPrice"
//                         name="offeredPrice"
//                         type="number"
//                         min="1"
//                         placeholder="Enter Offer Price"
//                             onChange={(e) => setOfferedPrice(e.target.value)}
//                       />
//                       <TextInput
//                         label="Product Offer Name"
//                         id="offerName"
//                         name="offerName"
//                         type="text"
//                         placeholder="Enter Offer Name"
//                             onChange={(e) => setOfferName(e.target.value)}
//                       />
//                       <TextInput
//                         label="Enter Category"
//                         id="category"
//                         type="text"
//                         name="category"
//                         placeholder='Category'
//                             onChange={(e) => setCategory(e.target.value)}
//                       />
//                       <TextInput
//                         label="Enter Sub Category"
//                         id="subcategory"
//                         name="subcategory"
//                           onChange={(e) => setSubcategory(e.target.value)}
//                         placeholder="SubCategory"
//                       />

//                   <TextInput
//                     label="Stocks"
//                     id="stocks"
//                     name="stocks"
//                     type="number"
//                     placeholder="Enter Stocks"
//                     onChange={(e) => setStocks(e.target.value)}
//                   />
//                   <div className="flex justify-around flex-wrap">
//                     <Buttons
//                       type="submit"
//                       func={createproduct}
//                       btnlabel="Create"
//                       icons={<IoCreateOutline />}
//                     />
//                     <Buttons
//                       func={resetForm}
//                       btnlabel="reset"
//                       icons={<GrPowerReset />} />
//                   </div>
//                   </form>
//                   </div>
//                   </div>
//                   </div>
//                   </div>
//                   </div>

//     )
//                 }

import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ProductsContext } from "../contexts/Productcountcontext";
import { Navbar, Sidebar } from "../components";
import TextInput from "../components/Elements/TextInput";
import Buttons from "../components/Buttons";
import { IoCreateOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { useStateContext } from "../contexts/ContextProvider";
import { FiPlusCircle } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";

export default function AddProduct() {
  const { fetchProducts } = useContext(ProductsContext);
  const { setCurrentMode, currentMode, activeMenu } = useStateContext();

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentMode]);

  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    productDescription: "",
    productPrice: 0,
    offeredPrice: 0,
    offerName: "",
    category: "",
    subcategory: "",
    images: [""],
    stocks: 0,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({ ...formData, images: newImages });
  };

  const handleAddImage = () => {
    setFormData({ ...formData, images: [...formData.images, ""] });
  };

  const handleRemoveImage = (index) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData({ ...formData, images: newImages });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/product/create", formData)
        .then((res) => {
          if (res.status === 200) {
            alert("Created successfully");
            navigate("/products");
            fetchProducts();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const resetForm = () => {
    setFormData({
      productName: "",
      brandName: "",
      productDescription: "",
      productPrice: 0,
      offeredPrice: 0,
      offerName: "",
      category: "",
      subcategory: "",
      images: [""],
      stocks: 0,
    });
  };

  const values = {};

  const createProduct = () => {
    console.log("Product created");
  };

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
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
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-64 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div className=" flex mt-15 flex-wrap justify-center ">
            <div className="bg-white shadow-xl p-8 uppercase tracking-wider w-full dark:text-gray- 200 dark:bg-secondary-dark-bg m-3 rounded-2xl">
              <div>
                <a href="/">
                  <h3 className="text-xl uppercase font-bold text-center text-black">
                    add product
                  </h3>
                </a>
              </div>
              <form onSubmit={handleSignup}>
                <div name="images">
                  {formData.images.map((image, index) => (
                    <div
                      className="flex flex-wrap items-center justify-between"
                      key={index}
                    >
                      <div className="mb-3">
                        <label
                          htmlFor={`images.${index}`}
                          className="font-semibold"
                        >
                          Image {index + 1}
                        </label>
                        <br />
                        <TextInput
                          name={`images.${index}`}
                          placeholder="Enter Image Url"
                          type="text"
                          className="mt-2"
                          value={formData.images[index]}
                          onChange={(e) =>
                            handleImageChange(index, e.target.value)
                          }
                        />
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          onClick={() => handleRemoveImage(index)}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className=" transition 
                                    shadow-xl duration-700 mb-10 border-1 hover:bg-black hover:text-white p-2 rounded-full"
                    onClick={handleAddImage}
                  >
                    <FiPlusCircle />
                  </button>
                </div>
                <TextInput
                  label="Product Name"
                  name="productName"
                  type="text"
                  placeholder="Enter Product name"
                  value={formData.productName}
                  onChange={handleInputChange}
                />
                <TextInput
                  label="Product Description"
                  name="productDescription"
                  type="text"
                  placeholder="Enter Product Description"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                />
                <TextInput
                  label="Product BrandName"
                  name="brandName"
                  type="text"
                  placeholder="Enter Product BrandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                />
                <TextInput
                  label="Product Normal Price"
                  name="productPrice"
                  type="number"
                  placeholder="Enter Normal Price"
                  value={formData.productPrice}
                  onChange={handleInputChange}
                />
                <TextInput
                  label="Product Offer Price"
                  name="offeredPrice"
                  type="number"
                  min="1"
                  placeholder="Enter Offer Price"
                  value={formData.offeredPrice}
                  onChange={handleInputChange}
                />
                {/* <TextInput
                  label="Product Offer Name"
                  name="offerName"
                  type="text"
                  placeholder="Enter Offer Name"
                  value={formData.offerName}
                  onChange={handleInputChange}
                /> */}
                <div className="mb-3">
                  <label htmlFor="product offer name" className="font-semibold">
                    Product Offer Name
                  </label>
                  <br />
                  <input
                    type="text"
                    className="block mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="offerName"
                    placeholder="Enter Offer Name"
                    value={formData.offerName}
                    onChange={handleInputChange}
                  />
                </div>
                <TextInput
                  label="Enter Category"
                  name="category"
                  type="text"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleInputChange}
                />
                <TextInput
                  label="Enter Sub Category"
                  name="subcategory"
                  type="text"
                  placeholder="SubCategory"
                  value={formData.subcategory}
                  onChange={handleInputChange}
                />
                <TextInput
                  label="Stocks"
                  name="stocks"
                  type="number"
                  placeholder="Enter Stocks"
                  value={formData.stocks}
                  onChange={handleInputChange}
                />
                <div className="flex justify-around flex-wrap">
                  <Buttons
                    type="submit"
                    func={createProduct}
                    btnlabel="Create"
                    icons={<IoCreateOutline />}
                  />
                  <Buttons
                    func={resetForm}
                    btnlabel="Reset"
                    icons={<GrPowerReset />}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
