import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Button, Navbar, Sidebar } from "../components";
import TextInput2 from "../components/Elements/TextInput2";
import { FiPlusCircle } from "react-icons/fi";
import { FaSave, FaTrashAlt } from "react-icons/fa";
import Buttons from "../components/Buttons";
import { MdDelete } from "react-icons/md";

const ProductUpdate = () => {
  const { productName } = useParams(); // Retrieve the product ID from URL parameters
  const navigate = useNavigate();

  // Define state variables to store product details and for edit form fields
  const [product, setProduct] = useState({});

  const { setCurrentMode, currentMode, activeMenu } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentMode]);

  const [editFields, setEditFields] = useState({
    productName: "",
    brandName: "",
    productPrice: 0,
    offeredPrice: 0,
    offerName: "",
    productDescription: "",
    stocks: 0,
    category: "",
    subcategory: "",
    images: [""],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${productName}`)
      .then((response) => {
        const productData = response.data;
        setProduct(productData);

        // Set editFields state with existing product details
        setEditFields({
          productName: productData.productName,
          brandName: productData.brandName,
          productPrice: productData.productPrice,
          offeredPrice: productData.offeredPrice,
          offerName: productData.offerName,
          productDescription: productData.productDescription,
          stocks: productData.stocks,
          category: productData.category,
          subcategory: productData.subcategory,
          images: productData.images
        });
      })
      .catch((error) => console.log(productName));
  }, [productName]);

  // Handle form field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditFields({ ...editFields, [name]: value });
  };

  // Handle form submission for editing product details
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/products/${productName}`, editFields, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Product updated successfully");
          navigate("/products");
        }
      })
      .catch((error) => {
        // Handle error response
        console.error("Error editing product:", error);
      });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(`http://localhost:8000/api/products/${productName}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            navigate("/");
          } else {
            throw new Error("Failed to delete product");
          }
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  };

  const handleImageChange = (index, value) => {
    const newImages = [...editFields.images];
    newImages[index] = value;
    setEditFields({ ...editFields, images: newImages });
  };

  const handleAddImage = () => {
    setEditFields({ ...editFields, images: [...editFields.images, ""] });
  };

  const handleRemoveImage = (index) => {
    const newImages = [...editFields.images];
    newImages.splice(index, 1);
    setEditFields({ ...editFields, images: newImages });
  };

  if (!product.images || product.images.length === 0) {
    return <div>No images found.</div>;
  }

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
            <div className="bg-white shadow-xl p-8 uppercase tracking-wider w-full dark:text-gray- 200 dark:bg-secondary-dark-bg m-12 rounded-2xl">
              <div>
                <a href="/">
                  <h3 className="text-xl uppercase font-bold text-black">
                    Update Product
                  </h3>
                </a>
                <div className=" my-4">
                  {product.images.map((image, index) => (
                    <div className="flex justify-center">
                      <img
                        src={image}
                        alt={product.productName}
                        className=" object-cover w-96 h-72"
                      />
                    </div>
                  ))}

                  <div className="px-44 mt-20">
                    <form onSubmit={handleSubmit}>
                      <div name="images">
                        {editFields.images.map((image, index) => (
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
                              <TextInput2
                                name={`images.${index}`}
                                placeholder="Enter Image Url"
                                type="text"
                                className="mt-2"
                                value={editFields.images}
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
                      <TextInput2
                        type="text"
                        id={product.productName}
                        name={product.productName}
                        label="product name"
                        value={editFields.productName}
                        onChange={handleFieldChange}
                      />
                     <div className="flex flex-wrap items-center my-3">
                     <label htmlFor="productDescription"
                      className="font-semibold" >
                        product Description
                        </label>
                      <textarea  
                        id={product.productDescription}
                        name={product.productDescription}
                        value={editFields.productDescription}
                        onChange={handleFieldChange}
                        className="ml-68"
                        style={{fontWeight :"normal"}} 
                        rows={4} cols={30} />
                     </div>
                      {/* <TextInput2
                        type="text"
                        label="product description"
                        id={product.productDescription}
                        name={product.productDescription}
                        value={editFields.productDescription}
                        onChange={handleFieldChange}
                      /> */}
                      <TextInput2
                        type="text"
                        label="brand name"
                        id={product.brandName}
                        name={product.brandName}
                        value={editFields.brandName}
                        onChange={handleFieldChange}
                      />
                      <TextInput2
                        type="text"
                        label="category"
                        id={product.category}
                        name={product.category}
                        value={editFields.category}
                        onChange={handleFieldChange}
                      />
                      <TextInput2
                        type="text"
                        label="subcategory"
                        id={product.subcategory}
                        name={product.subcategory}
                        value={editFields.subcategory}
                        onChange={handleFieldChange}
                      />
                      <TextInput2
                        type="text"
                        label="stocks"
                        id={product.stocks}
                        name={product.stocks}
                        value={editFields.stocks}
                        onChange={handleFieldChange}
                      />
                      <TextInput2
                        type="text"
                        label="productPrice"
                        id={product.productPrice}
                        name={product.productPrice}
                        value={editFields.productPrice}
                        onChange={handleFieldChange}
                      />
                      <TextInput2
                        type="text"
                        label="offeredPrice"
                        id={product.offeredPrice}
                        name={product.offeredPrice}
                        value={editFields.offeredPrice}
                        onChange={handleFieldChange}
                      />
                      <TextInput2
                        type="text"
                        label="offerName"
                        id={product.offerName}
                        name={product.offerName}
                        value={editFields.offerName}
                        onChange={handleFieldChange}
                      />

                      <div className=" mt-12 mb-10 flex flex-wrap justify-evenly">
                        <Buttons
                          type="submit"
                          btnlabel="save"
                          icons={<FaSave />}
                        />
                        <Buttons
                          type="button"
                          func={handleDelete}
                          btnlabel="delete"
                          icons={<MdDelete />}
                        />
                      </div>
                    </form>
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

export default ProductUpdate;
