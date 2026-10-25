import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ShoppingCart from './ShoppingCard';

describe('React Core Concepts Assessment', () => {
  
  it('Task 1 (Props): renders sub-component data correctly via props', () => {
    render(<ShoppingCart />);
    // Check if item names are visible in the DOM
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
  });

  it('Task 3 (State): handles quantity state modifications correctly', () => {
    render(<ShoppingCart />);
    
    const incrementButtons = screen.getAllByText('+');
    fireEvent.click(incrementButtons[0]); // Click '+' on Wireless Headphones

    expect(screen.getByTestId('qty-1')).toHaveTextContent('2');
  });

  it('Task 2 (Hooks): applies 10% custom hook discount only when total cross $300', () => {
    render(<ShoppingCart />);
    
    // Initial cost: 99 + 149 = 248 (Below 300, no discount)
    expect(screen.getByTestId('final-price')).toHaveTextContent('248');

    const incrementButtons = screen.getAllByText('+');
    fireEvent.click(incrementButtons[0]); // Quantities: 2 headphones ($198) + 1 keyboard ($149) = $347
    
    // Total is $347 (Above 300 -> 10% discount applies -> 347 - 34.7 = 312.3)
    expect(screen.getByTestId('final-price')).toHaveTextContent('312.3');
  });
});
