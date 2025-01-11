import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ui/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The VR Estate',
  description: 'Virtual Reality Solutions for Real Estate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollProgress />
        <Header />
        {children}
      </body>
    </html>
  );
} 