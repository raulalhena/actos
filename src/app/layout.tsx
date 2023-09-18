import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './Providers';

const inter = Inter({ subsets: [ 'latin' ] });

export const metadata: Metadata = {
    title: 'ACTOS',
    description: 'Crea y gestiona tus eventos de forma molona! yeahh!',
    authors: [ 'Teresa Madridejos', 'Yumi Namie', 'Diego Cruz', 'Andreu Baltazar', 'Raul Alhena' ]
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
