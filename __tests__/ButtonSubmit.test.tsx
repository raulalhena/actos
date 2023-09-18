import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import ButtonSubmit from '@/components/Button/ButtonSubmit';

test('Renders ButtonSubmit component', () => {
    render(<ButtonSubmit label="Enviar" />);

    const buttonElement = screen.getByText(/Enviar/i);
    expect(buttonElement).toBeInTheDocument();
});
