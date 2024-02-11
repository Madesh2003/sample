import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Sidebar } from "../components";

const ProductUpdate = () => {
  const { productName } = useParams(); // Retrieve the product ID from URL parameters
  const navigate = useNavigate();

  // Define state variables to store product details and for edit form fields
  const [product, setProduct] = useState(null);

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

  if (!product) {
    return <div>Loading...</div>;
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
            <div className="bg-white shadow-xl p-8 uppercase tracking-wider w-full dark:text-gray- 200 dark:bg-secondary-dark-bg m-3 rounded-2xl">
              <div>
                <a href="/">
                  <h3 className="text-xl uppercase font-bold text-center text-black">
                    Update Product
                  </h3>
                </a>
                  <div className="flex flex-wrap gap-5 justify-evenly my-8">
                  {product.images.map((image, index) => (
                    <div>
                      <img
                        src={image}
                        alt={product.productName}
                        className=" object-cover w-full h-60"
                      />
                    </div>
                  ))}
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="productName">Product Name:</label>
                        <input
                          type="text"
                          id="productName"
                          name="productName"
                          value={editFields.productName}
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="brandName">Brand Name:</label>
                        <input
                          type="text"
                          id="brandName"
                          name="brandName"
                          value={editFields.brandName}
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="productPrice">Product Price:</label>
                        <input
                          type="Number"
                          id="productPrice"
                          name="productPrice"
                          value={editFields.productPrice}
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="productDescription">
                          Product Description:
                        </label>
                        <input
                          type="text"
                          id="productDescription"
                          name="productDescription"
                          value={editFields.productDescription}
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="category">category:</label>
                        <input
                          type="text"
                          id="category"
                          name="category"
                          value={editFields.category}
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="subcategory">subcategory:</label>
                        <input
                          type="text"
                          id="subcategory"
                          name="subcategory"
                          value={editFields.subcategory}
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="offeredPrice">offeredPrice:</label>
                        <input
                          type="Number"
                          id="offeredPrice"
                          name="offeredPrice"
                          value={editFields.offeredPrice}
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="stocks">stocks:</label>
                        <input
                          type="Number"
                          id="stocks"
                          name="stocks"
                          value={editFields.stocks}
                          onChange={handleFieldChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="offerName">offerName:</label>
                        <input
                          type="text"
                          id="offerName"
                          name="offerName"
                          value={editFields.offerName}
                          onChange={handleFieldChange}
                        />
                      </div>

                      <button type="submit">Save Changes</button>
                      <button type="button" onClick={handleDelete}>
                        Delete Product
                      </button>
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
