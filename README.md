# Technical Assessment: React Core Concepts (Shopping Cart UI)

## Overview
Your task is to complete a partially built Shopping Cart component. You will be evaluated on your understanding of three core React concepts: **Props**, **State Management**, and **Custom Hooks**.

An automated testing suite is already configured to monitor your implementation. 

---

## Tasks to Complete

### Task 1: Component Architecture & Props
- Locate the `CartItem` sub-component inside `src/ShoppingCart.jsx`.
- Complete the component structure so it accepts the following props: `item`, `onIncrement`, and `onDecrement`.
- Render the `item.name`, `item.price`, and `item.quantity` dynamically into the JSX elements provided.
- Bind the `onIncrement` and `onDecrement` function props to the respective `+` and `-` buttons.

### Task 2: Custom Hooks
- Complete the custom hook named `useDiscount(totalPrice)` inside `src/ShoppingCart.jsx`.
- The hook must listen to changes in `totalPrice`.
- If the `totalPrice` is strictly **greater than $300**, it must apply a **10% discount** and return the discounted price.
- If the `totalPrice` is $300 or less, it must return the original `totalPrice`.

### Task 3: State Management
- In the main `ShoppingCart` component, manage the state of the cart items array.
- Implement the `handleIncrement(id)` function to increase an item's quantity by 1.
- Implement the `handleDecrement(id)` function to decrease an item's quantity by 1. **Constraint:** The minimum quantity allowed for an item is `1` (it cannot go to 0 or negative numbers).
- Update `baseTotal` to dynamically calculate the combined cost of all items in the cart based on their quantities (`price * quantity`).

---

## Testing Your Implementation
To view your evaluation progress in real-time, open a terminal in the editor and run:
```bash
npx vitest
```
Initially, 3 test cases will fail. As you complete the tasks correctly, the test suite will automatically re-run and turn green.
