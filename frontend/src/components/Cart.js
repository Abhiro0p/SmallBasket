import React from 'react';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return <div className="text-center">Your cart is empty</div>;
  }

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.product._id} className="cart-item">
          <img 
            src={`/uploads/${item.product.image}`} 
            alt={item.product.name}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h3 className="cart-item-name">{item.product.name}</h3>
            <p className="cart-item-price">₹{item.product.price}</p>
            <div className="cart-item-quantity">
              <button 
                onClick={() => onUpdateQuantity(item.product._id, item.quantity - 1)}
                className="quantity-btn"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => onUpdateQuantity(item.product._id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
          </div>
          <button 
            onClick={() => onRemoveItem(item.product._id)}
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="cart-total">
        Total: ₹{total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;