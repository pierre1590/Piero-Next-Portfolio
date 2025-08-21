import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: 'Piero Sabino - %s',
    default: 'Piero Sabino',
  },
  description: 'Portfolio personale di Piero Sabino, sviluppatore Full-stack.',
  
  // Aggiungiamo i metadati per i motori di ricerca e i social
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ['portfolio', 'sviluppatore web', 'full-stack', 'react', 'nextjs', 'sviluppo software'],
  
  // Open Graph per Facebook, LinkedIn, ecc.
  openGraph: {
    title: 'Piero Sabino - Portfolio',
    description: 'Portfolio personale di Piero Sabino, sviluppatore Full-stack. Scopri i miei progetti e le mie competenze.',
    url: 'http://localhost:3000',
    siteName: 'Piero Sabino',
    images: [
      {
        url: '/Piero.jpg', // Percorso corretto: non includere "/public/"
        width: 1200,
        height: 630,
        alt: 'Piero Sabino Portfolio',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Piero Sabino - Portfolio',
    description: 'Portfolio personale di Piero Sabino, sviluppatore Full-stack. Scopri i miei progetti e le mie competenze.',
    creator: '@tuo-username-twitter',
    images: ['/Piero.jpg'],
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-gray-900">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}