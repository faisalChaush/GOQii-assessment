import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/reducers/productReducer';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../style/ProductList.css';

gsap.registerPlugin(ScrollTrigger);

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === 'succeeded') {
      gsap.fromTo('.product-card', 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.products',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            markers: false, // Set to true for debugging
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, [status, products]);

  return (
    <div className="container product-list">
      <SearchBar />
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
