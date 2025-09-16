import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';
import { toast } from 'react-toastify';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await API.get('/api/cart');
      setCart(response.data);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to load cart');
      setLoading(false);
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    try {
      await API.put(`/api/cart/update/${productId}`, { quantity: newQuantity });
      await fetchCart();
      toast.success('Cart updated');
    } catch (error) {
      toast.error('Failed to update cart');
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      await API.delete(`/api/cart/remove/${productId}`);
      await fetchCart();
      toast.success('Item removed from cart');
    } catch (error) {
      toast.error('Failed to remove item from cart');
    }
  };

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    try {
      // In a real app, you would collect shipping address and payment method
      const orderData = {
        shippingAddress: {
          street: '123 Main St',
          city: 'City',
          state: 'State',
          zipCode: '123456'
        },
        paymentMethod: 'COD' // Cash on Delivery
      };
      
      await API.post('/api/orders', orderData);
      toast.success('Order placed successfully');
      navigate('/orders');
    } catch (error) {
      toast.error('Failed to place order');
      setCheckoutLoading(false);
    }
  };

  if (loading) return <div className="container text-center">Loading cart...</div>;

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart && cart.items.length > 0 ? (
        <>
          <Cart 
            cartItems={cart.items} 
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
          <div style={{ marginTop: '30px', textAlign: 'right' }}>
            <button 
              onClick={handleCheckout}
              className="btn btn-primary"
              disabled={checkoutLoading}
            >
              {checkoutLoading ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p>Your cart is empty</p>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-primary"
            style={{ marginTop: '20px' }}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;