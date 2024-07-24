import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ProductCard.css';

const truncateDescription = (description, wordLimit) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
};

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{truncateDescription(product.description, 40)}</p>
        <Link to={`/products/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
