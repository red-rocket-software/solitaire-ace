import type { Metadata, Viewport } from 'next';
import { Inter, Figtree } from 'next/font/google';
import './globals.css';
import { Providers } from '@/redux/provider';
import Provider from '@/components/Provider';
import Header from '@/components/Header/Header';
import SEO from '@/components/SEO/SEO';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

const figtree = Figtree({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SolitaireAce.com - Play Online & 100% Free',
  description:
    'Play Solitaire online for free. No download is required. Play full screen on desktop and mobile. ',
  keywords: 'solitaire, online solitaire, free solitaire',
  appleWebApp: {
    title: 'Solitaireace.com',
  },
};

export const viewport: Viewport = {
  themeColor: '#462B5F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <SEO />
      </head>
      <body className={`${inter.className} ${figtree.className}`}>
        <Providers>
          <Provider>
            <Header />
            {children}
            <Footer />
          </Provider>
        </Providers>
      </body>
    </html>
  );
}
