import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Suspense } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ui/ChatWidget';
import ParticleBackground from '@/components/ui/ParticleBackground';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Udhayakumar P | Data Analytics & AI Portfolio',
  description: 'Portfolio of Udhayakumar P, showcasing projects in Data Analytics and AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen bg-dark-900 text-gray-200 transition-colors duration-300`}
      >
        <ThemeProvider>
          <Suspense fallback={null}>
            <LoadingScreen />
          </Suspense>
          <CustomCursor />
          <ScrollProgress />
          <ParticleBackground />
          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <BackToTop />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
