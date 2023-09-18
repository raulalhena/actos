import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import Page from '@/app/home/page';
import { render, screen } from '@testing-library/react';



describe('Page Component', () => {
  test('renders the "page" text correctly', () => {
    render(<Page />); // ARRANGE

    // if exist text 'page'
    const textElement = screen.getByText(/page/i); // ACT
    expect(textElement).toBeInTheDocument(); // ASSERT
  });

  test('renders the "Comprar" button correctly', () => {
    render(<Page />); // ARRANGE

    // if exist btn "Comprar" 
    const buttonElement = screen.getByText(/Comprar/i); // ACT
    expect(buttonElement).toBeInTheDocument(); // ASSERT
  });
});
