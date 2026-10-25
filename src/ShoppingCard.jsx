import React, { useState, useEffect } from 'react';

// === CONCEPT 1: PROPS TEST ===
// TASK 1: Complete this sub-component. 
// It must accept 'item', 'onIncrement', and 'onDecrement' as props and wire them to the UI elements.
function CartItem({ item, onIncrement, onDecrement }) {
  return (
    <div data-testid="cart-item" style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
      <h4>{/* Render item name here */}</h4>
      <p>Price: ${/* Render item price here */}</p>
      <div>
        <button onClick={onDecrement}>-</button>
        <span data-testid={`qty-${item.id}`} style={{ margin: '0 10px', fontWeight: 'bold' }}>
          {/* Render item quantity here */}
        </span>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

// === CONCEPT 2: CUSTOM HOOKS TEST ===
// TASK 2: Complete this custom hook.
// It should take the total price and return a discounted price (10% off) ONLY IF total price is over $300.
// Otherwise, it should return the original total price.
function useDiscount(totalPrice) {
  const [finalPrice, setFinalPrice] = useState(totalPrice);

  useEffect(() => {
    // Write hook logic here
  }, [totalPrice]);

  return finalPrice;
}

const INITIAL_ITEMS = [
  { id: 1, name: 'Wireless Headphones', price: 99 },
  { id: 2, name: 'Mechanical Keyboard', price: 149 },
];

export default function ShoppingCart() {
  // === CONCEPT 3: STATE MANAGEMENT TEST ===
  // TASK 3: Manage the state of items in the cart. Complete the increment and decrement functions.
  const [cart, setCart] = useState(INITIAL_ITEMS.map(item => ({ ...item, quantity: 1 })));

  const handleIncrement = (id) => {
    // Update state to increment item quantity
  };

  const handleDecrement = (id) => {
    // Update state to decrement item quantity (Minimum quantity must be 1)
  };

  // Calculate base total price dynamically based on state quantities
  const baseTotal = 0; 

  // Using the custom hook to compute the final price
  const finalTotal = useDiscount(baseTotal);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'sans-serif' }}>
      <h2>Your Shopping Cart</h2>
      
      {cart.map(item => (
        /* Render the CartItem component here passing the correct props */
        <div key={item.id}>Replace this with CartItem component</div>
      ))}

      <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '10px' }}>
        <p>Base Total: ${baseTotal}</p>
        <h3>Final Total: $<span data-testid="final-price">{finalTotal}</span></h3>
      </div>
    </div>
  );
}
