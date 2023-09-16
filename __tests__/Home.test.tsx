import React from 'react';
import Page from '../src/app/home/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
