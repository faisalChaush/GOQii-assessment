import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/reducers/productReducer';
import "../style/SearchBar.css"
import ProductCard from './ProductCard';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const products = useSelector((state) => state.products.items);
  
    const handleSearch = (e) => {
      setQuery(e.target.value);
    };
  
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search products..."
        />
        <div className="products">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
export default SearchBar;
