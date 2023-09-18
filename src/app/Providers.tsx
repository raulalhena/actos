'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { ProvidersProps } from './interfaces/providersProps';

function Providers({ children }: ProvidersProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default Providers;