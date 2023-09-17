import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import TextInput from '@/components/TextInput/TextInput';

test('renders TextInput component', () => {
  render(
    <TextInput
      label="Username"
      placeholder="Enter your username"
      id="username"
      maxLength={20}
      minLength={3}
      value=""
      isPassword={false}
      onChange={() => {}}
    />
  );

  // Selecione o rótulo com base no texto
  const labelElement = screen.getByText('Username');
  expect(labelElement).toBeInTheDocument();
});
