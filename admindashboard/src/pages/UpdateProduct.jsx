import { useParams } from 'react-router-dom';
import Products from './Products';

function UpdateProduct() {
  const { index } = useParams(); // Get the index from the URL parameters

  // Use the index to access the product details from the products array
  const product = Products[parseInt(index)];

  // Check if product is undefined before accessing its properties
  if (!product) {
    return <div>Error: Product not found</div>;
  }

  return (
    <div>
      <form>
        <label>Product Name:</label>
        <input type="text" value={product.productName} readOnly />
         

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
