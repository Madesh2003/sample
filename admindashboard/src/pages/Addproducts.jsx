import React, { useContext, useEffect } from 'react';
import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import { FaTrashAlt } from "react-icons/fa";
import { Categories, SubCategories } from '../components/Contants'
import TextInput from "../components/Elements/TextInput";
import { FiPlusCircle } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { IoCreateOutline } from "react-icons/io5";
import Buttons from "../components/Buttons";
import SidebarNavbar from "../components/Sidebar.Navbar";
import { useStateContext } from '../contexts/ContextProvider';
import { Navbar, Sidebar } from '../components';



const initialState = {
  productName: "",
  brandName:"",
  productDescription: "",
  productPrice: 0,
  offeredPrice: 0,
  offerName: "",
  category: "",
  subcategory: "",
  images: [""],
  stocks: 0,
};


export default function Addproducts() {

  var newarr;


const { setCurrentMode, currentMode, activeMenu } = useStateContext();

useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentMode]);
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
        <Formik
          initialValues={initialState}
          validate={(values) => { 
            newarr = values
            const errors = {};
            if (!values.productName) {
              errors.productName = "Required";
            } else if (!values.productDescription) {
              errors.productDescription = "Required";
            } else if(!values.brandName) {
              errors.brandName = "Required";
            } else if (!values.productPrice) {
              errors.productPrice = "Required";
             } else if (!values.stocks) {
                errors.stocks = "Required";
            } else if (!values.category) {
              errors.category = "Required";
            } else if (!values.subcategory) {
              errors.subcategory = "Required";
            }
            return errors;
          }}
          // onSubmit={(values, { setSubmitting, resetForm }) => {
          //   newarr = values;
          //   console.log(newarr)
          // }
          //   console.log(values)
          //   if (values) {
          //     fetch("http://localhost:8000/product/create", {
          //       method: "POST",
          //       body: JSON.stringify(values),
          //       headers: {
          //         "Content-Type": "application/json",
          //       },
          //     })
          //       .then((response) => {
          //         console.log(response)
          //         setSubmitting(false);
          //         resetForm();
          //         return response.json();
          //       })
          //       .then((result) => console.log(result))
          //       .catch((error) => console.log(error));
          //   }
          // }}

        >
          {({
            values = {},
            errors = {},
            createproduct=()=>{
              console.log("Created");
            },
            handleChange = () => { },
            handleBlur = () => { },
            touched = {},
            handleSubmit = () => { },
            resetForm = () => { },
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <div className="flex font-semibold justify-center mb-5">
                    <p>add products</p>
                  </div>
                  <div>
                    <FieldArray name="images">
                      {({ remove, push }) => (
                        <div>
                          {values.images.length > 0 &&
                            values.images.map((image, index) => (
                              <div
                                className="flex flex-wrap items-center justify-between"
                                key={index}
                              >
                                <div className="mb-3">
                                  <label htmlFor={`images.${index}`}
                                    className="font-semibold">
                                    Image {index + 1}
                                  </label><br />
                                  <Field
                                    name={`images.${index}`}
                                    placeholder="Enter Image Url"
                                    type="text"
                                    className="form-control mt-2"
                                  />
                                  <ErrorMessage
                                    name={`images.${index}`}
                                    component="div"
                                    className="field-error"
                                  />
                                </div>
                                <div className="">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-primary"
                                    onClick={() => remove(index)}
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
                            onClick={() => push("")}
                          >
                            <FiPlusCircle />
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </div>
                  <TextInput
                    label="Product Name"
                    id="productName"
                    name="productName"
                    type="text"
                    value={values["productName"]}
                    placeholder="Enter Product name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <TextInput
                    label="Product Description"
                    id="ProductDescription"
                    name="ProductDescription"
                    type="text"
                    value={values["ProductDescription"]}
                    placeholder="Enter Product Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <TextInput
                    label="Product BrandName"
                    id="brandName"
                    name="brandName"
                    type="text"
                    value={values["brandName"]}
                    placeholder="Enter Product BrandName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div className="row">
                    <div className="col-6">
                      <TextInput
                        label="Product Normal Price"
                        id="productPrice"
                        name="productPrice"
                        type="number"
                        value={values["productPrice"]}
                        placeholder="Enter Normal Price"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <TextInput
                        label="Product Offer Price"
                        id="offeredPrice"
                        name="offeredPrice"
                        type="number"
                        min="1"
                        value={values["offeredPrice"]}
                        placeholder="Enter Offer Price"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <TextInput
                        label="Product Offer Name"
                        id="offerName"
                        name="offerName"
                        type="text"
                        value={values["offerName"]}
                        placeholder="Enter Offer Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <TextInput
                        label="Enter Category"
                        id="category"
                        type="text"
                        name="category"
                        value={values["category"]}
                        placeholder='Category'
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <TextInput
                        label="Enter Sub Category"
                        id="subcategory"
                        name="subcategory"
                        value={values["subcategory"]}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="SubCategory"
                      />
                    </div>
                  </div>
                  {/* <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={values["isActive"]}
                      id="isActive"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="isActive">
                      Product Active
                    </label>
                  </div> */}
                  <TextInput
                    label="Stocks"
                    id="stocks"
                    name="stocks"
                    type="number"
                    value={values["stocks"]}
                    placeholder="Enter Stocks"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div className="flex justify-around flex-wrap">
                    <Buttons
                      type="submit"
                      func={createproduct}
                      btnlabel="Create"
                      icons={<IoCreateOutline />}
                    />
                    <Buttons
                      func={resetForm}
                      btnlabel="reset"
                      icons={<GrPowerReset />} />
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}
