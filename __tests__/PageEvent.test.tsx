import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import Page from '@/app/event/page';


test('renders EventPage component', () => {
  render(<Page />);

  // Verify that the page content is rendered
  const pageTitle = screen.getByText('Crea tu propio evento');
  const pageDescription = screen.getByText(/Lorem ipsum/i);

  expect(pageTitle).toBeInTheDocument();
  expect(pageDescription).toBeInTheDocument();

  // Verify that the EventForm component is rendered
  const eventForm = screen.getByTestId('event-form'); // Use an appropriate test ID
  expect(eventForm).toBeInTheDocument();
});
