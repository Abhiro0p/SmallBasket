import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img 
        src={`/uploads/${product.image}`} 
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <p className="product-category">{product.category}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to={`/product/${product._id}`} className="btn btn-secondary">
            View Details
          </Link>
          <button 
            onClick={() => onAddToCart(product)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;