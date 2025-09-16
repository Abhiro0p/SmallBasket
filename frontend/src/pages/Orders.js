import React, { useState, useEffect } from 'react';
import API from '../utils/api';
import { toast } from 'react-toastify';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await API.get('/api/orders');
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to load orders');
      setLoading(false);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'Processing': return 'status-processing';
      case 'Shipped': return 'status-shipped';
      case 'Delivered': return 'status-delivered';
      case 'Cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  if (loading) return <div className="container text-center">Loading orders...</div>;

  return (
    <div className="container">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <div className="text-center">You have no orders yet</div>
      ) : (
        orders.map(order => (
          <div key={order._id} className="order-card">
            <div className="order-header">
              <div>
                <strong>Order ID:</strong> {order._id}
              </div>
              <div>
                <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
              </div>
              <div>
                <span className={`order-status ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </div>
            </div>
            <div>
              <strong>Items:</strong>
              {order.items.map(item => (
                <div key={item.product._id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                  <div>{item.product.name} (x{item.quantity})</div>
                  <div>₹{item.price * item.quantity}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'right', marginTop: '15px', fontSize: '18px', fontWeight: 'bold' }}>
              Total: ₹{order.totalAmount}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;