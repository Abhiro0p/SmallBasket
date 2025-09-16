import React from 'react';
import ProductList from '../components/ProductList';
import API from '../utils/api';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  const handleAddToCart = async (product) => {
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

  return (
    <div className="container">
      <h1>Welcome to SmallBasket</h1>
      <p>Your one-stop shop for groceries</p>
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Home;