import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './Providers';
import { Author } from 'next/dist/lib/metadata/types/metadata-types';

const inter = Inter({ subsets: [ 'latin' ] });

const authors: Array<Author> = [ 
    { name: 'Teresa Madridejos' }, 
    { name: 'Yumi Namie' }, 
    { name: 'Diego Cruz' }, 
    { name: 'Andreu Baltazar' }, 
    { name: 'Raul Alhena' } 
];

export const metadata: Metadata = {
    title: 'ACTOS',
    description: 'Crea y gestiona tus eventos de forma molona! yeahh!',
    authors
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
