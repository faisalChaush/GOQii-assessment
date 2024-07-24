import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../store/reducers/productReducer';
import { useParams, useNavigate } from 'react-router-dom';
import "../style/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
   alert(`Product Added to Add to cart`)
  };

  const handleCheckout = () => {
    alert('Proceed to checkout button clicked ');

  };

  return (
    <div className="product-details">
    <button className="back-button" onClick={() => navigate('/')}>Back to List</button>
    <div className="product-content">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">Price: ${product.price}</p>
        <p className="description">{product.description}</p>
        <p className="category">Category: {product.category}</p>
        <p className="rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <div className="actions">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button className="checkout" onClick={handleCheckout}>Checkout</button>
        </div>
        <div className="reviews">
          <h2>User Reviews</h2>
          {/* Render user reviews here */}
        </div>
      </div>
    </div>
  </div>

  );
};

export default ProductDetails;
