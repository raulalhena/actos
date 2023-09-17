import React from 'react';

import { render, screen } from '@testing-library/react';
import ButtonSubmit from '../src/components/Button/ButtonSubmit';
import '@testing-library/jest-dom/extend-expect';

test('Renderiza el componente ButtonSubmit corretamente', () => {
    render(<ButtonSubmit label="Enviar" />);

    const buttonElement = screen.getByText(/Enviar/i);
    expect(buttonElement).toBeInTheDocument();
});
