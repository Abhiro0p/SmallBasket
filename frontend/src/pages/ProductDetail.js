import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/api';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to load product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) {
      toast.error('Please login to add items to cart');
      return;
    }

    try {
      await API.post('/api/cart/add', {
        productId: product._id,
        quantity: 1
      });
      toast.success('Product added to cart');
    } catch (error) {
      toast.error('Failed to add product to cart');
    }
  };

  if (loading) return <div className="container text-center">Loading product...</div>;
  if (!product) return <div className="container text-center">Product not found</div>;

  return (
    <div className="container">
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src={`/uploads/${product.image}`} 
            alt={product.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>
        <div style={{ flex: '2', minWidth: '300px' }}>
          <h1>{product.name}</h1>
          <p className="product-price">₹{product.price}</p>
          <p className="product-category">{product.category}</p>
          <p>{product.description}</p>
          <p>In stock: {product.stock}</p>
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary"
            style={{ marginTop: '20px' }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;